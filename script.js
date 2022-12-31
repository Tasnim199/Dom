var plusBtn = document.querySelectorAll(".plus-btn");
var value1 = document.querySelectorAll(".Quant");
console.log(plusBtn);

plusBtn[0].addEventListener("click", function () {
  value1[0].value = parseInt(value1[0].value) + 1;
});
plusBtn[1].addEventListener("click", function () {
  value1[1].value = parseInt(value1[1].value) + 1;
});
plusBtn[2].addEventListener("click", function () {
  value1[2].value = parseInt(value1[2].value) + 1;
});
var minusBtn = document.querySelectorAll(".minus-btn");

minusBtn[0].addEventListener("click", function () {
  value1[0].value = parseInt(value1[0].value) - 1;
});
minusBtn[1].addEventListener("click", function () {
  value1[1].value = parseInt(value1[1].value) - 1;
});
minusBtn[2].addEventListener("click", function () {
  value1[2].value = parseInt(value1[2].value) - 1;
});

var Prixunitaire = document.querySelectorAll(".price");
console.log(Prixunitaire);
