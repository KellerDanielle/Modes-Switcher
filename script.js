let mode = "light"; // Change mode here

// Code snippet
let color, image, label;

switch (mode) {
  case "dark":
    color = "darkSlateBlue";
    image = "/img/dark-icon.png";
    label = "Dark Mode";
    break;
  case "light":
    color = "ghostWhite";
    image = "/img/light-icon.png";
    label = "Light Mode";
    break;
  default:
    color = "dimGray";
    image = "/img/ninja-icon.png";
    label = "Ninja Mode";
}

console.log(label);
