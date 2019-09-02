const produceDrivingRange = range =>
  (start, finish) => {
    const distance = Math.abs(parseInt(finish) - parseInt(start));
    if (range >= distance) {
      return `within range by ${range - distance}`
    } else if (range < distance) {
      return `${distance - range} blocks out of range`
    }
  }

  const produceTipCalculator = percent => fare => fare * percent;

  const createDriver = () => {
    let driverId = 0;
    return class {
      constructor(name){
        this.name = name;
        this.id = ++driverId;
      }
    }
  }