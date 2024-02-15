document.addEventListener("DOMContentLoaded", function () {
  const x = 5;
  const y = 6;
  const z = x + y;
  document.getElementById("javaconst").innerHTML = "The value of z is:" + z;
});

document.addEventListener("DOMContentLoaded", function () {
  const price1 = 5;
  const price2 = 6;
  let total = price1 + price2;
  document.getElementById("javamix").innerHTML = "The total is:" + total;
});

document.addEventListener("DOMContentLoaded", function(){
  const pi = 3.14;
  let person = "John Doe";
  let answer = "Yes I am!";
  document.getElementById("javavar").innerHTML = pi + "<br>" + person + "<br>" +  answer;
});
