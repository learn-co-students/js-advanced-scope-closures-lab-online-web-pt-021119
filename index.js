function produceDrivingRange(range){
  return function(start, end){
    let travelDistance = Math.abs(parseInt(end) - parseInt(start));
    let diff = range - travelDistance

    if (diff > 0){
      return `within range by ${diff}`
    } else {
      return `${Math.abs(diff)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent){
  return function(fare){
    return fare*percent
  }
}

function createDriver(){
  let driverId= 0;

  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name;
    }
  }

}
