const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const hexCode = document.querySelector(".hexCode");

btn.addEventListener("click", () => {
  let ourHex = "#";
  function getRandomNumber() {
    return Math.floor(Math.random() * 15);
  }

  for (i = 0; i <= 5; i++) {
    ourHex += hex[getRandomNumber()];
  }

  hexCode.textContent = ourHex;
  document.body.style.background = ourHex;
});
