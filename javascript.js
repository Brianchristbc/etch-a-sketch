const container = document.querySelector('.container')
let squares;

const squareInput = document.getElementById('square-input');
const squareInputButton = document.querySelector('.square-input-button');
const updated = document.querySelector('.updated')
const canvasPicker = document.getElementById('canvas-color-picker')
canvasPicker.value = '#F5F5F5'
const brushPicker = document.getElementById('brush-color-picker');
brushPicker.value = '#FFC0CB'

window.addEventListener('load', () => {
  squares = 100;
  let lengthOfSquares = 480/squares;
  let numberOfSquares = squares**2; 
  createCanvas(numberOfSquares, lengthOfSquares, canvasPicker.value || '#F5F5F5');

  const square = document.querySelectorAll('.square');
  
  canvasPicker.addEventListener('change', function pickColor() {
    square.forEach((element) => {
      element.style.background = canvasPicker.value
    })
  })
})

squareInputButton.addEventListener('click', () => {
  squares = (squareInput.value)*1;
  squareInput.value = "";
  let lengthOfSquares = 480/squares;
  let numberOfSquares = squares**2; 
  createCanvas(numberOfSquares, lengthOfSquares, canvasPicker.value || '#F5F5F5');
  updated.textContent = "updated!"

  const square = document.querySelectorAll('.square');
  
  canvasPicker.addEventListener('change', function pickColor() {
    square.forEach((element) => {
      element.style.background = canvasPicker.value
    })
  })
})


squareInput.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    squares = (squareInput.value)*1;
    squareInput.value = "";
    let lengthOfSquares = 480/squares;
    let numberOfSquares = squares**2; 
    createCanvas(numberOfSquares, lengthOfSquares, canvasPicker.value || '#F5F5F5');
    updated.textContent = "updated!"
  
    const square = document.querySelectorAll('.square');
    
    canvasPicker.addEventListener('change', function pickColor() {
      square.forEach((element) => {
        element.style.background = canvasPicker.value
      })
    })
  }
})

function createCanvas(numberOfSquares, lengthOfSquares, color) {
  container.innerHTML = "";
  for(let i=0; i<numberOfSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square')
    square.style.height = `${lengthOfSquares}px`;
    square.style.width = `${lengthOfSquares}px`;
    square.style.background = canvasPicker.value;
    container.appendChild(square);
  }
}

let brushColor = 'Pink';

function pickBrushColor() {
  brushColor = brushPicker.value;
  return brushColor;
}

brushPicker.addEventListener('change', () => {
  pickBrushColor();
})

container.addEventListener('mouseover', (e) => {
  const square = e.target;
  square.style.background = brushColor
})

function randomColorGenerator() {
  const red = (Math.floor(Math.random()*255));
  const green = (Math.floor(Math.random()*255));
  const blue = (Math.floor(Math.random()*255));
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}


const rainbowButton = document.querySelector('.rainbow-button');

rainbowButton.addEventListener('click', () => {
  brushToggle()})
  

  function brushToggle() {
    const displayToggle = document.querySelector('.toggle-row');
    if (!(rainbowButton.classList.contains('activated'))) {
      rainbowButton.classList.toggle('activated')
      displayToggle.textContent = 'toggled';
      container.removeEventListener('mouseover', (e) => {
        const square = e.target;
        square.style.background = brushColor
      })
      container.addEventListener('mouseover', (e) => {
        const square = e.target;
        square.style.background = randomColorGenerator()
      })
      }

      else if (rainbowButton.classList.contains('activated')) {
        rainbowButton.classList.toggle('activated')
        displayToggle.textContent = '';
        container.removeEventListener('mouseover', (e) => {
          const square = e.target;
          square.style.background = randomColorGenerator()
        })
        container.addEventListener('mouseover', (e) => {
          const square = e.target;
          square.style.background = brushColor
        })
      }
  }




