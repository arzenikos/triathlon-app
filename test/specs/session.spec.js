import { TrainingSessionStore } from '../../src/TrainingSessionStore.js';
import {
	calculateTrainingInsights,
	formatDuration,
} from '../../src/training-session.js';

describe('training sessions', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	test('persists completed training sessions and draft drills', () => {
		const store = new TrainingSessionStore();
		const drill = { runTime: 60, bikeTime: 120, swimTime: 180 };

		store.saveDraftDrills([drill]);
		expect(store.loadDraftDrills()).toEqual([drill]);

		const session = store.saveSession({
			athleteId: 'ATH-0001',
			athleteName: 'Alex Athlete',
			location: 'Local pool',
			occurredAt: new Date().toISOString(),
			drills: [drill],
		});

		expect(store.loadSessions()).toEqual([session]);
		store.clearDraftDrills();
		expect(store.loadDraftDrills()).toEqual([]);
	});

	test('reuses an athlete ID by name and generates the next ID otherwise', () => {
		const store = new TrainingSessionStore();
		store.saveSession({
			athleteId: 'ATH-0003',
			athleteName: 'Alex Athlete',
			location: 'Local pool',
			occurredAt: new Date().toISOString(),
			drills: [],
		});

		expect(store.getAthleteId(' alex athlete ')).toBe('ATH-0003');
		expect(store.getAthleteId('New Athlete')).toBe('ATH-0004');
	});

	test('calculates session duration and average speed from all drills', () => {
		const insights = calculateTrainingInsights([
			{ runTime: 360, bikeTime: 360, swimTime: 360 },
			{ runTime: 360, bikeTime: 360, swimTime: 360 },
		]);

		expect(insights).toEqual({
			drillCount: 2,
			totalDurationSeconds: 2160,
			distanceKm: 53.1,
			averageSpeedKph: 88.5,
			goalReached: true,
		});
	});

	test('formats elapsed time as a digital clock', () => {
		expect(formatDuration(3661.9)).toBe('01:01:01');
	});
});
