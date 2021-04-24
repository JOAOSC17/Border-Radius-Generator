const form = document.querySelector('form');
const topLeftSlider = form.querySelector("#topLeft");
const topRightSlider = form.querySelector("#topRight");
const bottomRightSlider = form.querySelector("#bottomRight");
const bottomLeftSlider = form.querySelector("#bottomLeft");
const output = form.querySelector("#output");
const box = document.querySelector("example-box");

function resetBoxBorders() {
  box.style.borderRadius = "0 0 0 0";
}
function resetSliders() {
  topLeftSlider.value = 0;
  topRightSlider.value = 0;
  bottomRightSlider.value = 0;
  bottomLeftSlider.value = 0;
}
function renderOutput() {
  output.textContent = `border-radius: ${topLeftSlider.value}% ${topRightSlider.value}% ${bottomRightSlider.value}% ${bottomLeftSlider.value}%;`;
}
function updateInterface() {
  box.style.borderTopLeftRadius = topLeftSlider.value + "%";
  box.style.borderTopRightRadius = topRightSlider.value + "%";
  box.style.borderBottomRightRadius = bottomRightSlider.value + "%";
  box.style.borderBottomLeftRadius = bottomLeftSlider.value + "%";
  renderOutput();
}
function resetInterface() {
  resetBoxBorders();
  resetSliders();
  renderOutput();
}
form.addEventListener('input', function(event) {
  updateInterface()
})
document.addEventListener('click', function(event) {
event.preventDefault();
  if (event.target.matches('#reset') ) {
    resetInterface();
  }
  
  if ( event.target.matches('#copy') ) {
    output.select();
    document.execCommand("copy");
  }

});