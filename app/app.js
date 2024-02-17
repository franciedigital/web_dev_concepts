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

document.addEventListener("DOMContentLoaded", function(){
  let carName = "Volvo";
  document.getElementById("javavar1").innerHTML= "My car is a "+ carName;
})

document.addEventListener("DOMContentLoaded", function(){
  let person = 'John Doe', carName = "Volvo", price = 200;
  document.getElementById("javavar2").innerHTML = price;
})

document.addEventListener("DOMContentLoaded", function(){
  let person = "John Doe",
  carName = "Volvo",
  price = 200;
  document.getElementById("javavar3").innerHTML = price;
});

document.addEventListener("DOMContentLoaded", function(){
  let carName;
  document.getElementById("javavar4").innerHTML = carName;
});

document.addEventListener("DOMContentLoaded", function(){
  var carName = "Volvo";
  var carName;
  document.getElementById("javavar5").innerHTML = carName;
});

document.addEventListener("DOMContentLoaded", function(){
  let x = 5 + 2 + 3;
  document.getElementById("javavar6").innerHTML = x;
})

document.addEventListener("DOMContentLoaded", function(){
  let x = "John" + " " + "Doe";
  document.getElementById("javavar7").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function(){
  let x = "5" + 2 + 3;
  document.getElementById("javavar8").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function(){
  let x = 2 + 3 + "5";
  document.getElementById("javavar9").innerHTML = x;
});


document.addEventListener("DOMContentLoaded", function(){
  let $$$ = 2;
  let $myMoney = 5;
  document.getElementById("javavar10").innerHTML = $myMoney - $$$;
});


document.addEventListener("DOMContentLoaded", function(){
  let $$$ = 2;
  let $myMoney = 5;
  document.getElementById("javavar11").innerHTML = $myMoney - $$$;
});

document.addEventListener("DOMContentLoaded", function(){
  var x = 100
  //Here x is 10
  {
    var x = 2;
  }
  //Here x is 2
  document.getElementById("javarede").innerHTML = x;
  //Here x is 2
})

document.addEventListener("DOMContentLoaded", function(){
  let x = 10;
  //Here x is 10
  {
    let x = 2;
    //Here x is 2
  }
  document.getElementById("javarede1").innerHTML = x;
  // Here x is 10
})
