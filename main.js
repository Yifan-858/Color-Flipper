const yearColorCode = [
  "#BB2649",
  "#B7A990",
  "#f0cfc3",
  "#ECD5B8",
  "#D4CACD",
  "#B1B09F",
  "#C6D1DD",
];
const yearColorName = [
  "Viva Magenta",
  "Fields of Rye",
  "Pale Dogwood",
  "Gray Sand",
  "Gray Lilac",
  "Agate Gray",
  "Plein Air",
];

const btn = document.getElementById("btn");
const colorName = document.querySelector(".colorName");

btn.addEventListener("click", () => {
  function getRandomNumber() {
    return Math.floor(Math.random() * yearColorCode.length);
  }

  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = yearColorCode[randomNumber];
  colorName.textContent = yearColorName[randomNumber];
});
