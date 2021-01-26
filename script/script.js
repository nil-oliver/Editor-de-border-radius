var top = document.querySelector("#cima");
var right = document.querySelector("#right");
var bottom = document.querySelector("#bottom");
var left = document.querySelector("#left");
var quadrado = document.querySelector("#quadrado");
var copiar = document.querySelector("#btn-copy");

top.onchange = atualizar;
right.onchange = atualizar;
bottom.onchange = atualizar;
left.onchange = atualizar;

function atualizar(){
    var propriedade = "border-radius: " + cima.value + "% " + right.value +"% " +
    bottom.value +"% " + left.value +"% ";
    console.log("propriedades: " + propriedade);
    document.querySelector("#propriedades").value = propriedade;
    quadrado.style = propriedade;
}

function copy() {
  var copyText = document.getElementById("propriedades");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
};









