//step 1: add text dynamically to the div
document.getElementById('note').textContent = 'this is Dom manipulation';

let circle = document.getElementById('circle');
circle.addEventListener('click', changeColor);

function changeColor(event) {
  //toScring(16) - translate to hexadecimal value
  let randomColor = Math.floor(Math.random() * 16777216).toString(16);
  randomColor = randomColor.padStart(6, '0');
  console.log(randomColor);
  circle.style.backgroundColor = `#${randomColor}`;
}
