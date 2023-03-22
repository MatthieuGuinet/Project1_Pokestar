export default function hoverButton(myArr) {
  const textButtons = document.querySelectorAll(".text_button");
  const svgButtons = document.querySelectorAll(".lr_buttons");
  for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    element.addEventListener("mouseover", () => {
      textButtons[i].style.cursor = "pointer";
      svgButtons[i].style.fill = "#949494";
      svgButtons[i].style.cursor = "pointer";
    });
    element.addEventListener("mouseout", () => {
      svgButtons[i].style.fill = "white";
    });
  }
}
