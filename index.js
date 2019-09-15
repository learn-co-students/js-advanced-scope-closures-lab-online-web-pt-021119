function produceDrivingRange(range) {
  return function(a, b) {
    let startingBlock = a.split('th')[0]
    let endingBlock = b.split('th')[0]
    let travel = endingBlock - startingBlock

    let leftover = travel - range
    if (leftover > 0) {
      return `${leftover} blocks out of range`
    } else {
      return `within range by ${range - travel}`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(amountDue) {
    return amountDue * percentage
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }

  
}
