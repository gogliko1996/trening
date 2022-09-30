
document.getElementById("line2").appendChild(document.createElement("div"));

 document.getElementById("lineBox").addEventListener("click", function() { 
    document.getElementById("lineBox").classList.toggle("lineBoxClic");
    document.getElementById("line2").classList.toggle("lineX");
    document.getElementById("line1").classList.toggle("lineNone");
    document.getElementById("line3").classList.toggle("lineNone");
    document.getElementById("nav").classList.toggle("nav");
    document.getElementById("ul").classList.toggle("ul");
 });



// let input = document.getElementById("getText");

// input.addEventListener("focus", function(){
//    input.style.border = "1px solid red";
// });
// input.addEventListener("keydown", function(ivent){

// });

// document.getElementById("getText").addEventListener("keydown", function(name) {
//    name.target.classList.add("goga");
// });


// let ul = document.getElementById("naw");
// let li = document.createElement("li");
// li.innerText = "javscript";
// ul.appendChild(li);

let input = document.getElementById("getText");
let button = document.getElementById("botton");
let div = document.getElementById("naw");
let form = document.getElementById("form");


form.addEventListener("submit", function (v) {
   v.preventDefault();
   let value = input.value;
   let li = document.createElement("li");
   let clearbottan = document.createElement("span");
   clearbottan.innerHTML = '<i class="fa-solid fa-delete-left"></i>';
   clearbottan.addEventListener("click", function () {
      li.remove();
   });
   li.innerText = value;
   li.appendChild(clearbottan);
   div.appendChild(li);
   input.value = " ";

});
document.getElementById("clicClear").addEventListener("click", function(){
   div.innerHTML = " ";
})








    



