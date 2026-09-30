import { TrainingSessionStore } from './TrainingSessionStore.js';
import { calculateTrainingInsights, formatDuration } from './training-session.js';

const SEGMENTS = [
	{ key: 'runTime', label: 'Run' },
	{ key: 'bikeTime', label: 'Bike' },
	{ key: 'swimTime', label: 'Swim' },
];

const store = new TrainingSessionStore();
const elements = {
	timer: document.querySelector('#timer'),
	segment: document.querySelector('#current-segment'),
	progress: document.querySelector('#segment-progress'),
	start: document.querySelector('#start-timer'),
	flag: document.querySelector('#flag-segment'),
	decision: document.querySelector('#drill-decision'),
	createDrill: document.querySelector('#create-another-drill'),
	saveTraining: document.querySelector('#save-training'),
	drillList: document.querySelector('#drill-list'),
	drillCount: document.querySelector('#draft-count'),
	sessionForm: document.querySelector('#session-form'),
	athleteName: document.querySelector('#athlete-name'),
	athleteId: document.querySelector('#athlete-id'),
	location: document.querySelector('#training-location'),
	currentTime: document.querySelector('#current-time'),
	sessionRows: document.querySelector('#training-rows'),
	emptyState: document.querySelector('#empty-state'),
	error: document.querySelector('#error-message'),
};

let sessions = [];
let draftDrills = [];
let segmentIndex = 0;
let elapsedBeforeStart = 0;
let segmentStartedAt = null;

function showError(error) {
	elements.error.textContent = error instanceof Error ? error.message : String(error);
	elements.error.hidden = false;
	console.error(error);
}

function clearError() {
	elements.error.textContent = '';
	elements.error.hidden = true;
}

function currentElapsedMilliseconds() {
	return elapsedBeforeStart + (segmentStartedAt === null ? 0 : performance.now() - segmentStartedAt);
}

function renderTimer() {
	elements.timer.textContent = formatDuration(currentElapsedMilliseconds() / 1000);
}

function renderSegment() {
	document.querySelectorAll('.track-step').forEach((step, index) => {
		step.classList.toggle('is-current', index === segmentIndex);
		step.classList.toggle('is-complete', index < segmentIndex);
	});

	if (segmentIndex < SEGMENTS.length) {
		const segment = SEGMENTS[segmentIndex];
		elements.segment.textContent = segment.label;
		elements.progress.textContent = `Segment ${segmentIndex + 1} of ${SEGMENTS.length}`;
		elements.flag.textContent = `Flag end of ${segment.label}`;
		elements.flag.disabled = segmentStartedAt === null;
	} else {
		elements.segment.textContent = 'Set complete';
		elements.progress.textContent = 'All three segments recorded';
		elements.flag.disabled = true;
	}
}

function setTimerRunning(isRunning) {
	elements.start.textContent = isRunning ? 'Pause timer' : (segmentStartedAt === null && elapsedBeforeStart > 0 ? 'Resume timer' : 'Start sequence');
	elements.start.setAttribute('aria-pressed', String(isRunning));
	elements.flag.disabled = !isRunning;
}

function renderDrills() {
	elements.drillCount.textContent = String(draftDrills.length);
	elements.drillList.replaceChildren();

	if (draftDrills.length === 0) {
		const empty = document.createElement('li');
		empty.className = 'empty-drills';
		empty.textContent = 'Completed sets will appear here.';
		elements.drillList.append(empty);
		return;
	}

	draftDrills.forEach((drill, index) => {
		const item = document.createElement('li');
		item.className = 'drill-card';
		const title = document.createElement('strong');
		title.textContent = `Drill ${index + 1}`;
		const times = document.createElement('span');
		times.textContent = `Run ${formatDuration(drill.runTime)} · Bike ${formatDuration(drill.bikeTime)} · Swim ${formatDuration(drill.swimTime)}`;
		item.append(title, times);
		elements.drillList.append(item);
	});
}

function addCell(row, value) {
	const cell = document.createElement('td');
	cell.textContent = value;
	row.append(cell);
}

function renderSessions() {
	elements.sessionRows.replaceChildren();
	elements.emptyState.hidden = sessions.length !== 0;

	sessions.forEach(session => {
		const insights = calculateTrainingInsights(session.drills);
		const row = document.createElement('tr');
		addCell(row, session.athleteId);
		addCell(row, session.athleteName);
		addCell(row, session.location);
		addCell(row, new Date(session.occurredAt).toLocaleTimeString([], {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		}));
		addCell(row, String(insights.drillCount));
		addCell(row, formatDuration(insights.totalDurationSeconds));
		addCell(row, `${insights.averageSpeedKph.toFixed(2)} km/h`);
		addCell(row, insights.goalReached ? 'Goal reached' : 'Below target');

		const detailRow = document.createElement('tr');
		detailRow.className = 'drill-details-row';
		const detailCell = document.createElement('td');
		detailCell.colSpan = 8;
		detailCell.textContent = session.drills.map((drill, index) =>
			`Drill ${index + 1}: Run ${formatDuration(drill.runTime)}, Bike ${formatDuration(drill.bikeTime)}, Swim ${formatDuration(drill.swimTime)}`,
		).join(' · ');
		detailRow.append(detailCell);
		elements.sessionRows.append(row, detailRow);
	});
}

function syncIdPreview() {
	elements.athleteId.value = store.getAthleteId(elements.athleteName.value);
}

function showDrillDecision() {
	elements.decision.hidden = false;
	elements.sessionForm.hidden = true;
	elements.start.disabled = true;
	elements.flag.disabled = true;
}

function finishDrill() {
	draftDrills.push({
		runTime: 0,
		bikeTime: 0,
		swimTime: 0,
		...activeDrill,
	});
	store.saveDraftDrills(draftDrills);
	renderDrills();
	segmentIndex = SEGMENTS.length;
	renderSegment();
	showDrillDecision();
}

let activeDrill = {};

function startOrPauseTimer() {
	clearError();
	if (segmentStartedAt !== null) {
		elapsedBeforeStart = currentElapsedMilliseconds();
		segmentStartedAt = null;
		setTimerRunning(false);
		renderTimer();
		return;
	}

	segmentStartedAt = performance.now();
	setTimerRunning(true);
	renderSegment();
	renderTimer();
}

function flagSegment() {
	clearError();
	if (segmentStartedAt === null || segmentIndex >= SEGMENTS.length) return;

	const currentSegment = SEGMENTS[segmentIndex];
	activeDrill[currentSegment.key] = Number((currentElapsedMilliseconds() / 1000).toFixed(1));
	segmentIndex += 1;
	elapsedBeforeStart = 0;
	renderTimer();

	if (segmentIndex === SEGMENTS.length) {
		segmentStartedAt = null;
		setTimerRunning(false);
		finishDrill();
		return;
	}

	segmentStartedAt = performance.now();
	setTimerRunning(true);
	renderSegment();
}

function beginAnotherDrill() {
	clearError();
	activeDrill = {};
	segmentIndex = 0;
	elapsedBeforeStart = 0;
	segmentStartedAt = null;
	elements.decision.hidden = true;
	elements.sessionForm.hidden = true;
	elements.start.disabled = false;
	renderTimer();
	renderSegment();
	setTimerRunning(false);
}

function openTrainingForm() {
	clearError();
	elements.decision.hidden = true;
	elements.sessionForm.hidden = false;
	elements.currentTime.value = new Date().toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	});
	syncIdPreview();
	elements.athleteName.focus();
}

function saveTraining(event) {
	event.preventDefault();
	clearError();
	const athleteName = elements.athleteName.value.trim();
	const location = elements.location.value.trim();
	if (!athleteName || !location || draftDrills.length === 0) {
		showError(new Error('Enter an athlete name and training location after completing at least one drill.'));
		return;
	}

	try {
		const occurredAt = new Date();
		elements.currentTime.value = occurredAt.toLocaleTimeString([], {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		});
		const session = store.saveSession({
			athleteId: store.getAthleteId(athleteName),
			athleteName,
			location,
			occurredAt: occurredAt.toISOString(),
			drills: [...draftDrills],
		});
		sessions.push(session);
		store.clearDraftDrills();
		draftDrills = [];
		renderDrills();
		renderSessions();
		elements.sessionForm.reset();
		elements.sessionForm.hidden = true;
		elements.start.disabled = false;
		beginAnotherDrill();
	} catch (error) {
		showError(error);
	}
}

function initialize() {
	try {
		sessions = store.loadSessions();
		draftDrills = store.loadDraftDrills();
		renderSessions();
		renderDrills();
		renderSegment();
		setTimerRunning(false);
		if (draftDrills.length > 0) {
			segmentIndex = SEGMENTS.length;
			renderSegment();
			showDrillDecision();
		}
	} catch (error) {
		showError(error);
	}

	elements.start.addEventListener('click', startOrPauseTimer);
	elements.flag.addEventListener('click', flagSegment);
	elements.createDrill.addEventListener('click', beginAnotherDrill);
	elements.saveTraining.addEventListener('click', openTrainingForm);
	elements.athleteName.addEventListener('input', syncIdPreview);
	elements.sessionForm.addEventListener('submit', saveTraining);

	window.setInterval(renderTimer, 100);
}

initialize();
