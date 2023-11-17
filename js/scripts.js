function isNumber(inputNumber) {
  const userInput = parseInt(inputNumber);
  if (typeof inputNumber !== 'number' || isNaN(inputNumber)) {
    return "Please enter a number";
  }
}

function countToNumber() {
  let returnArray = [];
  for (let i = 0; i <= inputNumber; i++) {
    let element = '';
    if (i.toString().includes('1')) {
      element = 'Beep';
    } else if (i.toString().includes('2')) {
      element = 'Boop';
    }
    returnArray.push(element);
  }
  return returnArray;
}