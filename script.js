const showValue = () => {
  const textFizz = document.querySelector("#fizz");
  const inputFizz = Number(textFizz.value);
  const textBuzz = document.querySelector("#buzz");
  const inputBuzz = Number(textBuzz.value);
  const output = document.querySelector("#output");
  let fizzBuzzValue = "";

  if (
    !Number.isInteger(inputFizz) ||
    !Number.isInteger(inputBuzz) ||
    inputFizz === 0 ||
    inputBuzz === 0
  ) {
    output.textContent = "整数値を入力してください";
    return;
  }
  for (i = 1; i < 100; i++) {
    if (i % inputFizz === 0 && i % inputBuzz === 0) {
      fizzBuzzValue = "FizzBuzz " + i;
    } else if (i % inputFizz === 0) {
      fizzBuzzValue = "Fizz " + i;
    } else if (i % inputBuzz === 0) {
      fizzBuzzValue = "Buzz " + i;
    } else {
      fizzBuzzValue = "";
    }
    const pElement = document.createElement("p");
    output.appendChild(pElement);
    pElement.textContent = fizzBuzzValue;
  }
};
