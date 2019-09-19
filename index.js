function produceDrivingRange(blockRange) {
  return function(one, two) {
    let blockOne = one.slice(0, 2)
    let blockTwo = two.slice(0, 2)
    let distance = Math.abs(blockOne - blockTwo);

    if (blockRange > distance) {
      let newdistance = blockRange - distance
      return `within range by ${newdistance}`

    } else {
      let newdistance = distance - blockRange
      return `${newdistance} blocks out of range`
    }
  }
}

function produceTipCalculator(tipFare) {
  return function(tip) {
    return tipFare * tip
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
