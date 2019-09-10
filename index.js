function produceDrivingRange(range){
	return function (streetA, streetB){
		let distance = Math.abs(parseInt(streetA) - parseInt(streetB))
		if (distance>range){
			return `${distance-range} blocks out of range`
		} else{
			return `within range by ${range-distance}`
		}
	}
}

function produceTipCalculator(percentage){
	return function(fare){
		return fare * percentage
	}
}

function createDriver(){
	let driverId = 0
	return class {
		constructor(name){
			this.id = ++driverId
			this.name = name
		}
	}
}


