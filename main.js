var carModel = {
  x: null,
  y: null
};

var $car = document.querySelector('.image-container');

window.addEventListener('keydown', handleDirection);
function handleDirection(event) {
  if (event.key === 'ArrowRight') {
    $car.className = 'image-container rotate-none';
  }
  if (event.key === 'ArrowDown') {
    $car.className = 'image-container rotate-right';
  }
  if (event.key === 'ArrowLeft') {
    $car.className = 'image-container rotate-opposite';
  }
  if (event.key === 'ArrowUp') {
    $car.className = 'image-container rotate-left';
  }
  if (event.key === ' ') {
    var intervalID = setInterval(startCar, 16);
  }
}

function startCar() {
  carModel.x += 10;
  $car.style.left = (carModel.x + 'px');
}
