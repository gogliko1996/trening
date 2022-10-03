
document.getElementById("line2").appendChild(document.createElement("div"));

 document.getElementById("lineBox").addEventListener("click", function() { 
    document.getElementById("lineBox").classList.toggle("lineBoxClic");
    document.getElementById("line2").classList.toggle("lineX");
    document.getElementById("line1").classList.toggle("lineNone");
    document.getElementById("line3").classList.toggle("lineNone");
    document.getElementById("nav").classList.toggle("nav");
    document.getElementById("ul").classList.toggle("ul");
 });

let input = document.getElementById("getText");
let button = document.getElementById("button");
let clicclear = document.getElementById("clicClear")
let div = document.getElementById("naw");
let form = document.getElementById("form");

form.addEventListener("submit", function (name) {
   name.preventDefault();
let p = document.createElement("p");
let value = input.value;
let delet = document.createElement("span");
delet.innerHTML = '  <i class="fa-solid fa-delete-left"></i>';
delet.addEventListener("click", function () {
   p.remove();
});
clicclear.innerHTML = '<i class="fa-solid fa-trash"></i>';
p.setAttribute("class", "valuetext");
p.innerText = value;
p.appendChild(delet);
div.appendChild(p);
input.value = " ";
});
clicclear.addEventListener("click", function () {
   div.innerHTML = " ";
   clicclear.innerHTML = " ";
});







    



