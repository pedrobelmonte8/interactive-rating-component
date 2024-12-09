let form = document.getElementById("myForm");
let ratingCollection = document.getElementsByClassName("ratingButtons");

//Código para la selección de los botones
[...ratingCollection].forEach((input) =>
  input.addEventListener("click", changeColor)
); //Convertimos la HTMLColection en un array para poder trabajar

function changeColor() {
  [...ratingCollection].forEach((input) => input.classList.remove("selected"));
  this.classList.add("selected");
}

//Código para la ejecución del formulario
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let htmlCollectionRate = document.getElementsByClassName("selected");

  if (htmlCollectionRate[0]) {
    const rate = htmlCollectionRate[0].getAttribute("data-rating");
    window.location.href = `./thanksPage.html?rate=${rate}`;
  }
});
