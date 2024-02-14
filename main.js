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

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("javaexp1").innerHTML = 5 * 10;
});

document.addEventListener("DOMContentLoaded", function () {
  var x;
  x = 5;
  document.getElementById("javaexp2").innerHTML = x * 10;
});

document.getElementById("javaexp3").innerHTML = "John" + " " + "Doe";

document.addEventListener("DOMContentLoaded", function () {
  let x, y;
  x = 5 + 6;
  y = x * 10;

  document.getElementById("javakey1").innerHTML = y;
});

document.addEventListener("DOMContentLoaded", function () {
  var x, y;
  x = 5 + 6;
  y = x * 10;

  document.getElementById("javakey2").innerHTML = y;
});

document.addEventListener("DOMContentLoaded", function () {
  let x;
  x = 5;
  // x = 6; I will not be executed

  document.getElementById("javakey3").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function () {
  let lastname, lastName;
  lastName = "Doe";
  lastname = "Peterson";

  document.getElementById("javacas1").innerHTML = lastName;
});

// change heading:
document.getElementById("myH").innerHTML = "JavaScript Comments";
// change paragraph:
document.getElementById("myP").innerHTML = "My first paragraph.";

document.addEventListener("DOMContentLoaded", function () {
  let x = 5; //Declare x, give it the value
  let y = x + 2; // Declear y, give it the value of x + 2

  // Write y to demo
  document.getElementById("javacom1").innerHTML = y;
});

/*
The code below will change
the heading with id = "myH1"
and the paragraph with id = "myP1"
 */

document.getElementById("myH1").innerHTML = "JavaScript Comments";
document.getElementById();

//document.getElementById("myH2").innerHTML = "My first Page"
document.getElementById("myP2").innerHTML = "My first paragraph";

/*document.getElementById("myH3").innerHTML = 'Welcome to my homepage'
document.getElementById("myp3").innerHTML = "This is my first paragraph"*/

//document.addEventListener("DOMContentLoaded", function () {
  x = 5;
  y = 6;
  z = x + y;
  document.getElementById("javavari").innerHTML =  z;
//});

/*document.addEventListener("DOMContentLoaded", function(){
  var x = 5;
  var y = 6;
  var z = x + y;
  console.log("Value of z:", z);
  document.getElementById("javavari1").innerHTML = z;
});*/

document.addEventListener("DOMContentLoaded", function(){
  let x = 5;
  let y = 6;
  let z = x + y;
  document.getElementById("javalet").innerHTML = y;
})

document.addEventListener("DOMContentLoaded", function () {
  let x = 5; //Declare x, give it the value
  let y = x + 2; // Declear y, give it the value of x + 2

  // Write y to demo
  document.getElementById("javalet1").innerHTML = y;
});

