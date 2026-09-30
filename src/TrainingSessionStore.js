export const TRAINING_SESSIONS_KEY = 'triathlon-training-sessions';
export const DRAFT_DRILLS_KEY = 'triathlon-draft-drills';

export class TrainingSessionStore {
	constructor(storage = window.localStorage) {
		this.storage = storage;
	}

	loadSessions() {
		return this.readArray(TRAINING_SESSIONS_KEY, 'training sessions');
	}

	loadDraftDrills() {
		return this.readArray(DRAFT_DRILLS_KEY, 'draft drills');
	}

	saveDraftDrills(drills) {
		this.storage.setItem(DRAFT_DRILLS_KEY, JSON.stringify(drills));
	}

	clearDraftDrills() {
		this.storage.removeItem(DRAFT_DRILLS_KEY);
	}

	saveSession(session) {
		const sessions = this.loadSessions();
		const savedSession = { ...session, id: this.createSessionId() };
		this.storage.setItem(
			TRAINING_SESSIONS_KEY,
			JSON.stringify([...sessions, savedSession]),
		);
		return savedSession;
	}

	getAthleteId(name) {
		const normalizedName = name.trim().toLocaleLowerCase();
		if (normalizedName) {
			const existingAthlete = this.loadSessions().find(
				session => session.athleteName.trim().toLocaleLowerCase() === normalizedName,
			);
			if (existingAthlete) return existingAthlete.athleteId;
		}

		const lastId = this.loadSessions().reduce((highest, session) => {
			const match = /^ATH-(\d+)$/.exec(session.athleteId);
			return match ? Math.max(highest, Number(match[1])) : highest;
		}, 0);

		return `ATH-${String(lastId + 1).padStart(4, '0')}`;
	}

	readArray(key, label) {
		const serialized = this.storage.getItem(key);
		if (serialized === null) return [];

		const value = JSON.parse(serialized);
		if (!Array.isArray(value)) {
			throw new Error(`Saved ${label} data must be an array.`);
		}
		return value;
	}

	createSessionId() {
		return `session-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
	}
}
