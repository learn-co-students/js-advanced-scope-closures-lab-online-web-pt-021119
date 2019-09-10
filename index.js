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