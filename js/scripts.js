//Business Logic
function isNumber(inputNumber) {
  if (typeof userInput !== 'number' || isNaN(userInput)) {
    return "Please enter a number";
  }
}

function countToNumber(inputNumber) {
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
//User Interface logic
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("numberForm");
  const mrRodgers = document.getElementById("mrRodgers");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputNumber = document.getElementById("inputNumber").value;

    // Convert inputNumber to a number
    const number = parseInt(inputNumber);

    // Clear existing content in mrRodgers div
    mrRodgers.innerHTML = '';

    if (isNaN(number)) {
      // Display the error message directly in the mrRodgers div
      const errorMessageElement = document.createElement('p');
      errorMessageElement.textContent = "Please enter a number";
      mrRodgers.appendChild(errorMessageElement);
    } else {
      // Generate the array
      const resultArray = countToNumber(number);

      // Display the result in the mrRodgers div
      const resultParagraph = document.createElement('p');
      resultParagraph.textContent = "I... AM.... Mr. RODGERS... BEEP BOOP BEEP. I... CAN... COUNT.... TO YOUR... NUMBER: ";
      mrRodgers.appendChild(resultParagraph);

      // Display the array elements
      for (const element of resultArray) {
        const elementParagraph = document.createElement('p');
        elementParagraph.textContent = element;
        mrRodgers.appendChild(elementParagraph);
      }

      // Remove the "hidden" class to show the mrRodgers div
      mrRodgers.classList.remove("hidden");
    }
  });
});