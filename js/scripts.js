function isNumber(inputNumber) {
  if (typeof inputNumber !== 'number' || isNaN(inputNumber)) {
    return "Please enter a number";
  }
}

function countToNumber() {
  let returnArray = [];
  for (let i = 0; i <= inputNumber; i++) {
    returnArray.push(i);
  }
  return returnArray;
}