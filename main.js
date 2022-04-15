var carModel = {
  x: null,
  y: null,
  carMoving: false
};
var intervalID;
var $car = document.querySelector('.image-container');

window.addEventListener('keydown', handleDirection);
function handleDirection(event) {
  if (event.key === 'ArrowRight') {
    $car.className = 'image-container rotate-none';
    if (carModel.carMoving === true) {
      clearInterval(intervalID);
      intervalID = setInterval(driveRight, 16);
    }
  }
  if (event.key === 'ArrowDown') {
    $car.className = 'image-container rotate-right';
    if (carModel.carMoving === true) {
      clearInterval(intervalID);
      intervalID = setInterval(driveDown, 16);
    }

  }
  if (event.key === 'ArrowLeft') {
    $car.className = 'image-container rotate-opposite';
    if (carModel.carMoving === true) {
      clearInterval(intervalID);
      intervalID = setInterval(driveLeft, 16);
    }
  }
  if (event.key === 'ArrowUp') {
    $car.className = 'image-container rotate-left';
    if (carModel.carMoving === true) {
      clearInterval(intervalID);
      intervalID = setInterval(driveUp, 16);
    }

  }
  if (event.key === ' ' && carModel.carMoving === false) {
    intervalID = setInterval(startCar, 16);
    carModel.carMoving = true;
  } else if (event.key === ' ' && carModel.carMoving === true) {
    clearInterval(intervalID);
    carModel.carMoving = false;
  }
}

function startCar() {
  carModel.x += 10;
  $car.style.left = (carModel.x + 'px');
}

function driveDown() {
  carModel.y += 10;
  $car.style.top = (carModel.y + 'px');
}

function driveLeft() {
  carModel.x -= 10;
  $car.style.left = (carModel.x + 'px');
}

function driveUp() {
  carModel.y -= 10;
  $car.style.top = (carModel.y + 'px');
}

function driveRight() {
  carModel.x += 10;
  $car.style.left = (carModel.x + 'px');
}
