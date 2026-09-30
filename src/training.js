import { TrainingDrill } from './drill.js';

export class Training {
	constructor(newDate = new Date(2024, 3, 3), newLocation, kmDistanceRequirement = 26.55, targetSpeed = 37.16) {
		// Handle if first argument is a string (location passed as first arg)
		if (typeof newDate === 'string') {
			this.date = new Date(2024, 3, 3);
			this.location = newDate;
		} else {
			this.date = newDate;
			this.location = newLocation;
		}
		this.distance = kmDistanceRequirement
		this.speed = targetSpeed
		this.drillCount = 0;
		this.allDrillsLog = [];
	}

    saveToStorage(drill) {
        return this.storage.saveById(this.id, drill)
    }

    loadLocalStorage(){
        return this.storage.loadLocalStorage(this.id)
    }

	getAllDrills() {
		let result = `${this.toString()}`
		for (let aDrill of this.allDrillsLog) {
			result += aDrill.toString()
		}
		return result
	}

    addDrill(newTimeStamp, newSwimmingDuration, newRunningDuration, newCyclingDuration) {
        const newDrill = new TrainingDrill(newTimeStamp, newSwimmingDuration, newRunningDuration, newCyclingDuration)
        this.allDrillsLog.push(newDrill)
        this.saveToStorage(newDrill)
        this.drillCount += 1
    }

    findTrainingDrill(targetDrillStartTime) {
        let foundDrill = null
        for (let aDrill of this.allDrillsLog) {
            if (!aDrill.time) {
                aDrill.formatDateTime()
            }
            if (aDrill.time === targetDrillStartTime) {
                foundDrill = aDrill
                break
            }
        }
        return foundDrill
    }

	formatDate() {
		const d = this.date;
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		const result = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
		return result;
	}

	getGoalReach() {
		this.sortDrills();
		let passedDrills = {}
		for (const aDrill of this.allDrillsLog) {
			if (aDrill.isGoalReached(this.distance, this.speed)) {
				passedDrills["Time: " + aDrill.time] = aDrill.calculateSpeed(this.distance) + "kph"
			}
		}
		return passedDrills;
	}

	findTrainingDrill(targetDrillStartTime) {
		this.sortDrills();
		let foundDrill = null;
		for (const aDrill of this.allDrillsLog) {
			if (aDrill.time === targetDrillStartTime) {
				foundDrill = aDrill;
				break;
			}
		}
		return foundDrill;
	}

	removeDrill(targetDrillStartTime) { // Time
		const foundDrill = this.findTrainingDrill(targetDrillStartTime);
		const isPresent = foundDrill !== null;
		let result = null;
		if (isPresent) {
			const index = this.allDrillsLog.indexOf(foundDrill);
			this.allDrillsLog.splice(index, 1);
			this.drillCount -= 1;
			result = this.allDrillsLog;
		}
		return result;
	}
//!
	calculateAvgSpeed() { // Kph //by dates
		let cumulativeSpeed = 0;
		for (const aDrill of this.allDrillsLog) {
			cumulativeSpeed += aDrill.calculateSpeed(this.distance);
		}
		return parseFloat((cumulativeSpeed / this.drillCount).toFixed(2));
	}

	isGoalReached() {
		return this.calculateAvgSpeed() >= this.speed
	}

	updateDrill(startTime, keyItem, valueReplacement) {
		const aDrill = this.findTrainingDrill(startTime);
		aDrill[keyItem] = parseFloat(valueReplacement.toFixed(2));
		return this.allDrillsLog;
	}
}
