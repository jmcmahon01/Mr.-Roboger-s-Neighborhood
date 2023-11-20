//Business Logic
function isNumber(inputNumber) {
  if (isNaN(inputNumber)) {
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
//UI Logic
window.addEventListener("load", function () {
  const form = document.querySelector("form");
  const mrRodgers = document.getElementById("mrRodgers");
  const resultP = document.getElementById("resultP");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputNumber = document.getElementById("inputNumber").value;
    const errorMessage = isNumber(inputNumber);
    const returnArray = countToNumber(parseInt(inputNumber));
    if (errorMessage) {
      document.getElementById("error").removeAttribute("class");
      document.getElementById("mrRodgers").setAttribute("hidden");
    } else if (returnArray) {
      resultP.textContent = "I... AM.... Mr. RODGERS... BEEP BOOP BEEP. I... CAN... COUNT.... TO YOUR... NUMBER: " + returnArray.join(', ');
      mrRodgers.removeAttribute("class");
    }
  });
  const resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", function () {
    document.getElementById("inputNumber").value = '';
    resultP.textContent = '';
    mrRodgers.classList.add("hidden");
    document.getElementById("error").classList.add("hidden");;
  });
});







