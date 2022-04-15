var $car = document.querySelector('.image-container');

window.addEventListener('keydown', handleDirection);
function handleDirection(event) {
  if (event.key === 'ArrowRight') {
    $car.className = 'image-container';
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
}
