export const TRIATHLON_DISTANCE_KM = 26.55;
export const TARGET_SPEED_KPH = 37.16;

export function calculateTrainingInsights(drills) {
	const totalDurationSeconds = drills.reduce(
		(total, drill) => total + drill.runTime + drill.bikeTime + drill.swimTime,
		0,
	);
	const distanceKm = drills.length * TRIATHLON_DISTANCE_KM;
	const averageSpeedKph = totalDurationSeconds > 0
		? Number((distanceKm * 3600 / totalDurationSeconds).toFixed(2))
		: 0;

	return {
		drillCount: drills.length,
		totalDurationSeconds,
		distanceKm,
		averageSpeedKph,
		goalReached: averageSpeedKph >= TARGET_SPEED_KPH,
	};
}

export function formatDuration(totalSeconds) {
	const wholeSeconds = Math.floor(totalSeconds);
	const hours = Math.floor(wholeSeconds / 3600);
	const minutes = Math.floor((wholeSeconds % 3600) / 60);
	const seconds = wholeSeconds % 60;
	return [hours, minutes, seconds]
		.map(value => String(value).padStart(2, '0'))
		.join(':');
}
