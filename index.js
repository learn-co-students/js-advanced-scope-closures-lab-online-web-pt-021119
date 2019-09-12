function produceDrivingRange(range){
  return function(start,end){
    let distance = (Math.abs(parseInt(end)-parseInt(start)))
    if (range > distance)
      return `within range by ${(range-distance)}`;
    else
      return `${(distance-range)} blocks out of range`;
  }
}

function produceTipCalculator(decimal){
  return function(fare){
    return tip=fare*decimal;
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}
