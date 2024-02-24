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

document.addEventListener("DOMContentLoaded", function(){
  var x = 2;
  //Now x is 2

  var x = 3;
  //Now x is 3
  document.getElementById("javarede2").innerHTML = x;
})

document.addEventListener("DOMContentLoaded", function(){
  let x = 2;
  {
    let x = 3;
  }

  {
    let x = 4;
  }
  document.getElementById("javarede3").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function(){
  carName = "Volvo";
  document.getElementById("javarede4").innerHTML = carName;
  var carName;
});

document.addEventListener("DOMContentLoaded", function(){
  try {
    carName = "Saab";
    let carName = "Volvo";
  }

  catch(err) {
    document.getElementById("javarede5").innerHTML = err;
  }
})

document.addEventListener("DOMContentLoaded", function(){
  try {
    const p1 = 3.1415;
    p1 = 3.14;
  }
  catch (err) {
    document.getElementById("javaconst1").innerHTML = err;
  }
});

document.addEventListener("DOMContentLoaded", function(){
  //Create an Array
  const cars = ["Saab", "Volvo", "BNW"];

  //change an element:
  cars[0] = 'Toyota';

  //Add an element:
  cars.push("Audi");

  // Display the array
  document.getElementById("javaconst2").innerHTML = cars;
})

document.addEventListener("DOMContentLoaded", function(){
  try {
    const cars = ['Saab', 'Volvo', 'Audi'];
    cars = ['Toyota', 'Volvo', 'Audi'];
  }

  catch (err) {
    document.getElementById('javaconst3').innerHTML = err;
  }
});

document.addEventListener("DOMContentLoaded", function(){
  //Create an object:
  const car = {type:'Fiat', model:'500', color:'white'};

  //Change a property:
  car.color = 'red'

  //Add a property
  car.owner = 'Johnson'
  //Display the property:
  document.getElementById('javaconst4').innerHTML = 'Car owner is ' +  car.owner;
});

document.addEventListener("DOMContentLoaded", function(){
  try {
    const car = {type:"Fiat", mode:'500', color:'white'};
    car = {type:'Volvo', model:'EX60', color:'red'};
  }
  catch(err) {
    document.getElementById("javaconst5").innerHTML = err;
  }
});

document.addEventListener("DOMContentLoaded", function(){
  const x = 10;
  //Here x is 10
  {
    const x = 2;
    //Here x is 2
  }
  //Here x is 10
  document.getElementById("javaconst6").innerHTML = "x is " + x;
});

document.addEventListener("DOMContentLoaded", function(){
  carName = "Volvo";
  document.getElementById("javaconst7").innerHTML = carName;
  var carName;
})

document.addEventListener("DOMContentLoaded", function(){
  try {
    alert(carName);
    const carName = "Volvo"
  }
  catch (err) {
    document.getElementById("javaconst8").innerHTML = err;
  }
});

document.addEventListener("DOMContentLoaded", function(){
  let x = 10;
  document.getElementById("javaopera").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function(){
  //Assign the value of 5 to x
  let x = 5;
  //Assign the value of 2 to y
  let y = 2;
  //Assign the value x + y to z
  let z = x + y;
  //Didplay z
  document.getElementById("javaopera1").innerHTML = "The sum of x + y is: " + z;
});


document.addEventListener("DOMContentLoaded", function(){
  let x = 5;
  let y = 2;
  let z = x + y;
  document.getElementById("javaopera2").innerHTML = z;
});

document.addEventListener("DOMContentLoaded", function(){
  let x = 5;
  let y = 2;
  let z = x * y;
  document.getElementById("javaopera3").innerHTML = z;
});

document.addEventListener("DOMContentLoaded", function(){
  let a = 3;
  let x = (100 + 50) * a;
  document.getElementById("javaopera4").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function(){
  var x = 10;
  x += 5;
  document.getElementById("javaopera5").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function(){
  let text1 = "A";
  let text2 = "B";
  let result = text1 < text2;
  document.getElementById("javaopera6").innerHTML = "Is A less than B? : " + result;
})



