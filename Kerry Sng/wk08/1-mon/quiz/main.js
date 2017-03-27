var changeColor = document.querySelector('form')
var result = document.querySelector('colorSearch')
changeColor.addEventListener('submit', addColor)
// console.log('hello');
function addColor(){

  changeColor.style.backgroundColor = result.value;

};


changeColor.addEventListener('keyup', function (event) {
  if (event.which === 13) {
    addColor();
  }
});
