function produceDrivingRange(blocks) {
  return function(block1, block2) {
    let regexBlock1 = parseInt(block1.match(/[a-z]+|[^a-z]+/gi)[0]);
    let regexBlock2 = parseInt(block2.match(/[a-z]+|[^a-z]+/gi)[0]);

    let totalBlocks = Math.abs(regexBlock2 - regexBlock1);

    if (totalBlocks > blocks) {
      return `${totalBlocks - blocks} blocks out of range`;
    }
    else {
      return `within range by ${blocks - totalBlocks}`;
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function(fare) {
    return fare * tipPercent;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
