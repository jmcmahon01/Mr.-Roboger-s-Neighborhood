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
    if (i.toString().includes('3')) {
      element = "Won't you be my neighbor?";
    } else if (i.toString().includes('2')) {
      element = 'Boop';
    } else if (i.toString().includes('1')) {
      element = "Beep";
    } else {
      element = i;
    }
    returnArray.push(element);
  }
  return returnArray;
}