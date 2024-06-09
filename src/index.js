document.addEventListener('DOMContentLoaded', () => {
const counterButton = document.getElementById("counterButton");
const numberContainer = document.getElementById("numberContainer");

// numberContainer.innerHTML='This is a button'
// console.log(numberContainer.innerHTML);

let number = 0;

function adding() {
  numberContainer.innerHTML = number ++;
// console.log(numberContainer); it works with or without this part
}
counterButton.addEventListener('click', adding)

})
//  const counterButton = document.getElementById("counterButton");
//  const numberContainer = document.getElementById("numberContainer");

//  let number = 0;

//  function adding() {
//    numberContainer.innerHTML = number++;
//   //  console.log(numberContainer.innerHTML);
//  }

//  counterButton.addEventListener('click', adding);
