function getStreetNumber(streetString) {
  const noLetters = streetString.replace(/[A-Za-z]/g, "");
  return Number.parseInt(noLetters);
}

function produceDrivingRange(blockRange) {
  return function(street1, street2) {
    const street_number1 = getStreetNumber(street1);
    const street_number2 = getStreetNumber(street2);
    const distance = Math.abs(street_number1 - street_number2);
    const difference = Math.abs(distance - blockRange);

    if (distance <= blockRange) {
      return `within range by ${difference}`;
    } else {
      return `${difference} blocks out of range`;
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return fare * tip;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(driverName) {
      this.name = driverName;
      this.id = ++driverId;
    }
  }
}
