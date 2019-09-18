const produceDrivingRange = function(blockRange) {
  return function(start, end) {
    const distance = Math.abs(start.replace(/\D+/, '') - end.replace(/\D+/, ''));
    const difference = blockRange - distance;
    if (difference >= 0) {
      return `within range by ${difference}`;
    } else {
      return `${-difference} blocks out of range`;
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function(checkAmount) {
    return checkAmount * tipPercent;
  }
}

const createDriver = function() {
  let driverId = 0;
  return class Driver {
    constructor(name){
    this.name = name
    this.id = ++driverId 
    } 
  }
}