document.addEventListener('DOMContentLoaded', () => {
// const counterButton = document.getElementById("counterButton");
// const numberContainer = document.getElementById("numberContainer");

Number.innerHTML='This is a button'
console.log(Number.innerHTML);

let number = 0;

function adding() {
  numberContainer.innerHTML = number ++;
console.log(  numberContainer)

}
 counterButton.addEventListener('click', adding)
})