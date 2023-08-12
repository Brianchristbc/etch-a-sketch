for (let i=0; i<256; i++) {
  const sketch = document.createElement('div');
  sketch.classList.add('sketch');
  sketch.style.width = "10px";
  sketch.style.height = "10px";
  sketch.style.background = "aliceblue"
  sketch.style.margin = "0";
  const container = document.querySelector('.container');
  container.appendChild(sketch);
}

const sketch = document.querySelectorAll('.sketch')

sketch.forEach((sketch) => {
  sketch.addEventListener('mouseover', () => {
    sketch.style.background = randomColorGenerator();
  })
})

const reset = document.querySelector('.reset')

reset.addEventListener('click', () => {
  sketch.forEach((sketch) => {
    sketch.style.background = (colorOfChoice || "#ff0000")
  })
})

colorPicker = document.querySelector('.color-picker');
// addeventlistener can be fired with input and change
// event.target.value

colorPicker.addEventListener('input', (e) => {
  colorOfChoice = e.target.value;
})

colorPicker.addEventListener('change', (e) => {
  colorOfChoice = e.target.value;
})
// when can i use this instead of e

function randomColorGenerator() {
  const red = Math.floor((Math.random())*255);
  const green = Math.floor((Math.random())*255);
  const blue = Math.floor((Math.random())*255);
  return `rgb(${red}, ${green}, ${blue})`
}

const rainbowText = document.querySelector('.rainbow-text');

rainbowText.style.color = randomColorGenerator()







// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// console.log(p.replace('dog', 'monkey'));