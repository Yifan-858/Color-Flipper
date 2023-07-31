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

const getRandomColorIndex = () => Math.floor(Math.random() * yearColorCode.length);

const convertRgbToHex = (rgbValue) => {
  // Regular expression pattern to match against
  const regexPattern = /(\d+),\s*(\d+),\s*(\d+)/;

  // Values that match the regular expression
  const match = rgbValue.match(regexPattern);

  // The separate RGB values
  const rgbValues = [
    match[1], 
    match[2], 
    match[3],
  ];

  // RGB values converted to base 16 (hexadecimal)
  const hexValues = [
    parseInt(rgbValues[0]).toString(16), 
    parseInt(rgbValues[1]).toString(16), 
    parseInt(rgbValues[2]).toString(16),
  ];

  // Concatenated hex color string
  const newHexColor = `#${hexValues[0]}${hexValues[1]}${hexValues[2]}`.toUpperCase();

  return newHexColor;
};

const getNewRandomColor = (currentColor) => {
  // Get a random color index
  let randomColorIndex = getRandomColorIndex();

  // Get the random color
  let newColor = yearColorCode[randomColorIndex];

  // Get a new random color if it's the same as the current
  while (newColor === currentColor) {
      randomColorIndex = getRandomColorIndex();
      newColor = yearColorCode[randomColorIndex];
  };

  // Return a color object with both the name and the code if it
  return { name: yearColorName[randomColorIndex], code: yearColorCode[randomColorIndex] };
};

btn.addEventListener("click", () => {
  // Get current background color as RGB.
  const currentBgColorAsRgb = window.getComputedStyle(document.body, null).backgroundColor;

  // Convert background color to HEX
  const currentBgColorAsHex = convertRgbToHex(currentBgColorAsRgb);
  
  // Get a new background color
  const newBackgroundColor = getNewRandomColor(currentBgColorAsHex);

  document.body.style.backgroundColor = newBackgroundColor.code;
  colorName.textContent = newBackgroundColor.name;
});