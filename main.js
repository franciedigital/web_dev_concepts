document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
});

document
  .getElementById("changeTextBtn1")
  .addEventListener("click", function () {
    document.getElementById("demo1").style.fontSize = "35px";
  });

document.getElementById("hideTextBtn").addEventListener("click", function () {
  document.getElementById("demo2").style.display = "none";
});

document.getElementById("showTextBtn").addEventListener("click", function () {
  document.getElementById("demo3").style.display = "block";
});

document.getElementById("newdemo").innerHTML = 5 + 6;

document.getElementById("windowpm").addEventListener("click", function () {
  window.print();
});

let x, y, z; //statement 1
x = 5; // Statement 2
y = 6; //  Statement 3
z = x + y; // statement 4

document.getElementById("newdemo1").innerHTML = "The value of z is " + z + ".";

document.getElementById("democoma").innerHTML = "Hello Dolly!";

document.getElementById("jsstate").addEventListener("click", function () {
  document.getElementById("newdemo2").innerHTML = "Hello Dolly!";
  document.getElementById("newdemo3").innerHTML = "How are you?";
});

document.getElementById("javalit1").innerHTML = 10.5;

document.getElementById("javalit2").innerHTML = "John Doe";

function displayValue() {
  var x = 6;
  document.getElementById("javavar1").innerHTML = x;
}

window.onload = function () {
  displayValue();
};

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("javaop1").innerHTML = (5 + 6) * 10;
});

document.addEventListener("DOMContentLoaded", function () {
  let x, y;
  x = 5;
  y = 6;
  document.getElementById("javaop2").innerHTML = x + y;
});

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("javaexp1").innerHTML = 5 * 10;
});

document.addEventListener("DOMContentLoaded", function(){
  var x;
  x = 5;
  document.getElementById("javaexp2").innerHTML = x * 10;
});

document.getElementById("javaexp3").innerHTML = "John" + " " + "Doe";
