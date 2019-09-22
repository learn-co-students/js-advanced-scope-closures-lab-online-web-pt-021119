function produceDrivingRange(number){
    return function(num1, num2) {
      const distance = Math.abs(parseInt(num1) - parseInt(num2));
      if(distance > number) {
        return `${distance - number} blocks out of range`
      } else {
        return `within range by ${number - distance}`
      }
    }
  }

function produceTipCalculator(tip){
    return function (amount){
        return Math.abs(tip * amount);
    }
}

function createDriver(){
    let driverId = 0;

    return class{
        constructor(name) {
            this.name = name
            this.id = ++driverId
        }
    }
}
