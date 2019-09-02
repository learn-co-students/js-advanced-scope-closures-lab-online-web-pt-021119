const produceDrivingRange = range =>
  (start, finish) => {
    const distance = Math.abs(parseInt(finish) - parseInt(start));
    if (range >= distance) {
      return `within range by ${range - distance}`
    } else if (range < distance) {
      return `${distance - range} blocks out of range`
    }
  }