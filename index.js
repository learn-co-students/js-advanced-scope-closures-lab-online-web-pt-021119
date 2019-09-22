function produceDrivingRange(range){
  return function(start, end){
    const distance = Math.abs(parseInt(start) - parseInt(end));

    if(distance > range){
      return `${distance - range} blocks out of range`;
    } else {
      return `within range by ${range - distance}`;
    }
  }
}

function produceTipCalculator(tipPercent){
  return bill => bill * tipPercent;
}

function createDriver(){
  let driverId = 0;

  return class{
    constructor(name){
      this.name = name;
      this.id = ++ driverId;
    }
  }
}
