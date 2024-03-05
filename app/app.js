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

document.addEventListener("DOMContentLoaded", function () {
  const pi = 3.14;
  let person = "John Doe";
  let answer = "Yes I am!";
  document.getElementById("javavar").innerHTML =
    pi + "<br>" + person + "<br>" + answer;
});

document.addEventListener("DOMContentLoaded", function () {
  let carName = "Volvo";
  document.getElementById("javavar1").innerHTML = "My car is a " + carName;
});

document.addEventListener("DOMContentLoaded", function () {
  let person = "John Doe",
    carName = "Volvo",
    price = 200;
  document.getElementById("javavar2").innerHTML = price;
});

document.addEventListener("DOMContentLoaded", function () {
  let person = "John Doe",
    carName = "Volvo",
    price = 200;
  document.getElementById("javavar3").innerHTML = price;
});

document.addEventListener("DOMContentLoaded", function () {
  let carName;
  document.getElementById("javavar4").innerHTML = carName;
});

document.addEventListener("DOMContentLoaded", function () {
  var carName = "Volvo";
  var carName;
  document.getElementById("javavar5").innerHTML = carName;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 5 + 2 + 3;
  document.getElementById("javavar6").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = "John" + " " + "Doe";
  document.getElementById("javavar7").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = "5" + 2 + 3;
  document.getElementById("javavar8").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 2 + 3 + "5";
  document.getElementById("javavar9").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function () {
  let $$$ = 2;
  let $myMoney = 5;
  document.getElementById("javavar10").innerHTML = $myMoney - $$$;
});

document.addEventListener("DOMContentLoaded", function () {
  let $$$ = 2;
  let $myMoney = 5;
  document.getElementById("javavar11").innerHTML = $myMoney - $$$;
});

document.addEventListener("DOMContentLoaded", function () {
  var x = 100;
  //Here x is 10
  {
    var x = 2;
  }
  //Here x is 2
  document.getElementById("javarede").innerHTML = x;
  //Here x is 2
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 10;
  //Here x is 10
  {
    let x = 2;
    //Here x is 2
  }
  document.getElementById("javarede1").innerHTML = x;
  // Here x is 10
});

document.addEventListener("DOMContentLoaded", function () {
  var x = 2;
  //Now x is 2

  var x = 3;
  //Now x is 3
  document.getElementById("javarede2").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 2;
  {
    let x = 3;
  }

  {
    let x = 4;
  }
  document.getElementById("javarede3").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function () {
  carName = "Volvo";
  document.getElementById("javarede4").innerHTML = carName;
  var carName;
});

document.addEventListener("DOMContentLoaded", function () {
  try {
    carName = "Saab";
    let carName = "Volvo";
  } catch (err) {
    document.getElementById("javarede5").innerHTML = err;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  try {
    const p1 = 3.1415;
    p1 = 3.14;
  } catch (err) {
    document.getElementById("javaconst1").innerHTML = err;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  //Create an Array
  const cars = ["Saab", "Volvo", "BNW"];

  //change an element:
  cars[0] = "Toyota";

  //Add an element:
  cars.push("Audi");

  // Display the array
  document.getElementById("javaconst2").innerHTML = cars;
});

document.addEventListener("DOMContentLoaded", function () {
  try {
    const cars = ["Saab", "Volvo", "Audi"];
    cars = ["Toyota", "Volvo", "Audi"];
  } catch (err) {
    document.getElementById("javaconst3").innerHTML = err;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  //Create an object:
  const car = { type: "Fiat", model: "500", color: "white" };

  //Change a property:
  car.color = "red";

  //Add a property
  car.owner = "Johnson";
  //Display the property:
  document.getElementById("javaconst4").innerHTML = "Car owner is " + car.owner;
});

document.addEventListener("DOMContentLoaded", function () {
  try {
    const car = { type: "Fiat", mode: "500", color: "white" };
    car = { type: "Volvo", model: "EX60", color: "red" };
  } catch (err) {
    document.getElementById("javaconst5").innerHTML = err;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const x = 10;
  //Here x is 10
  {
    const x = 2;
    //Here x is 2
  }
  //Here x is 10
  document.getElementById("javaconst6").innerHTML = "x is " + x;
});

document.addEventListener("DOMContentLoaded", function () {
  carName = "Volvo";
  document.getElementById("javaconst7").innerHTML = carName;
  var carName;
});

document.addEventListener("DOMContentLoaded", function () {
  try {
    alert(carName);
    const carName = "Volvo";
  } catch (err) {
    document.getElementById("javaconst8").innerHTML = err;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 10;
  document.getElementById("javaopera").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function () {
  //Assign the value of 5 to x
  let x = 5;
  //Assign the value of 2 to y
  let y = 2;
  //Assign the value x + y to z
  let z = x + y;
  //Didplay z
  document.getElementById("javaopera1").innerHTML = "The sum of x + y is: " + z;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 5;
  let y = 2;
  let z = x + y;
  document.getElementById("javaopera2").innerHTML = z;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 5;
  let y = 2;
  let z = x * y;
  document.getElementById("javaopera3").innerHTML = z;
});

document.addEventListener("DOMContentLoaded", function () {
  let a = 3;
  let x = (100 + 50) * a;
  document.getElementById("javaopera4").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function () {
  var x = 10;
  x += 5;
  document.getElementById("javaopera5").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function () {
  let text1 = "A";
  let text2 = "B";
  let result = text1 < text2;
  document.getElementById("javaopera6").innerHTML =
    "Is A less than B? : " + result;
});

document.addEventListener("DOMContentLoaded", function () {
  let text1 = "20";
  let text2 = "5";
  let result = text1 < text2;
  document.getElementById("javaopera7").innerHTML =
    "Is 20 less than 5? " + result;
});

document.addEventListener("DOMContentLoaded", function () {
  let text1 = "John";
  let text2 = "Doe";
  let text3 = text1 + " " + text2;
  document.getElementById("javaopera8").innerHTML = text3;
});

document.addEventListener("DOMContentLoaded", function () {
  let text1 = "What a very ";
  text1 += "nice day";
  document.getElementById("javaopera9").innerHTML = text1;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 5 + 5;
  let y = "5" + 5;
  let z = "hello" + 5;
  document.getElementById("javaopera10").innerHTML =
    x + "<br>" + y + "<br>" + z;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 100 + 50;
  document.getElementById("javaarith").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function () {
  let a = 100;
  let b = 50;
  let x = a + b;
  document.getElementById("javaarith1").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function () {
  let a = 3;
  let x = (100 + 50) * a;
  document.getElementById("javaarith2").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 5;
  let y = 2;
  let z = x + y;
  document.getElementById("javaarith3").innerHTML = z;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 5;
  let y = 2;
  let z = x - y;
  document.getElementById("javaarith4").innerHTML = z;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 5;
  let y = 2;
  let z = x * y;
  document.getElementById("javaarith5").innerHTML = z;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 5;
  let y = 2;
  let z = x / y;
  document.getElementById("javaarith6").innerHTML = z;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 5;
  let y = 2;
  let z = x % y;
  document.getElementById("javaarith7").innerHTML = z;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 5;
  x++;
  let z = x;
  document.getElementById("javaarith8").innerHTML = z;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 5;
  x--;
  let z = x;
  document.getElementById("javaarith9").innerHTML = z;
});
document.addEventListener("DOMContentLoaded", function () {
  let x = 5;
  document.getElementById("javaarith10").innerHTML = x ** 3;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 5;
  document.getElementById("javaarith11").innerHTML = Math.pow(x, 2);
});
document.getElementById("javaarith12").innerHTML = 100 + 50 * 3;

document.addEventListener("DOMContentLoaded", function () {
  let x = 10;
  document.getElementById("javaassign").innerHTML = "The value of x is : " + x;
});

document.addEventListener("DOMContentLoaded", function () {
  let y = 50;
  let x = 10 + y;
  document.getElementById("javaassign1").innerHTML = "Value of x is: " + x;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 10;
  x += 5;
  document.getElementById("javaassign2").innerHTML = "Value of x is: " + x;
});

document.addEventListener("DOMContentLoaded", function () {
  let text = "Hello ";
  text += "World";
  document.getElementById("javaassign3").innerHTML = text;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 10;
  x -= 5;
  document.getElementById("javaassign4").innerHTML = "The Value of x is " + x;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 10;
  x *= 5;
});
document.addEventListener("DOMContentLoaded", function () {
  let x = 10;
  x **= 5;
  document.getElementById("javaassign6").innerHTML = "Value of x is: " + x;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 10;
  x /= 5;
  document.getElementById("javaassign7").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 10;
  x %= 5;
  document.getElementById("javaassign8").innerHTML = "Value of x is: " + x;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = -100;
  x <<= 5;
  document.getElementById("javaassign9").innerHTML = "Value of x is: " + x;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = -100;
  x >>= 5;
  document.getElementById("javaassign10").innerHTML = "Value of x is: " + x;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = -100;
  x >>>= 5;
  document.getElementById("javaassign11").innerHTML = "Value of x is: " + x;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 100;
  x &= 5;
  document.getElementById("javaassign12").innerHTML = "Value of x is: " + x;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 100;
  x |= 5;
  document.getElementById("javaassign13").innerHTML = "Value of x is: " + x;
});
document.addEventListener("DOMContentLoaded", function () {
  let x = 100;
  x &&= 5;
  document.getElementById("javaassign14").innerHTML = "Value of x is: " + x;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = undefined;
  x ||= 5;
  document.getElementById("javaassign15").innerHTML = "Value of x is: " + x;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 16 + "Volvo";
  document.getElementById("javatypes").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = "Volvo" + 16;
  document.getElementById("javatypes1").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 16 + 4 + "Volvo";
  document.getElementById("javatypes2").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = "Volvo" + 16 + 4;
  document.getElementById("javatypes3").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function () {
  let x; //Now x is undefined
  x = 5; //Now x is a number
  x = "John"; //x is now a string
  document.getElementById("javatypes4").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function () {
  let carName1 = "Volvo XC6o";
  let carName2 = "Volvo XC6o";
  document.getElementById("javatypes5").innerHTML =
    carName1 + "<br>" + carName2;
});

document.addEventListener("DOMContentLoaded", function () {
  let answer1 = "It's alright";
  let answer2 = "He is called Johnny";
  let answer3 = 'He is called "Johnny"';
  document.getElementById("javatypes6").innerHTML =
    answer1 + "<br>" + answer2 + "<br>" + answer3;
});

document.addEventListener("DOMContentLoaded", function () {
  let x1 = 34.0;
  let x2 = 34;
  let x3 = 3.14;
  document.getElementById("javatypes7").innerHTML =
    x1 + "<br>" + x2 + "<br>" + x3;
});
document.addEventListener("DOMContentLoaded", function () {
  let y = 123e5;
  let z = 123e-5;
  document.getElementById("javatypes8").innerHTML = y + "<br>" + z;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = BigInt("123456789012345678901234567890");
  document.getElementById("javatypes8").innerHTML = x;
});

document.addEventListener("DOMContentLoaded", function () {
  let x = 5;
  let y = 5;
  let z = 6;
  document.getElementById("javatypes10").innerHTML =
    (x == y) + "<br>" + (x == z);
});

document.addEventListener("DOMContentLoaded", function () {
  const cars = ["Saab", "Volvo", "BMW"];
  document.getElementById("javatypes11").innerHTML = cars[0];
});
document.addEventListener("DOMContentLoaded", function () {
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: "50",
    eyeColor: "blue",
  };
  document.getElementById("javatypes12").innerHTML =
    person.firstName + " is " + person.age + " Years old ";
});

document.getElementById("javatypes13").innerHTML =
  typeof "" + "<br>" + typeof "John" + "<br>" + typeof "John Doe";

document.addEventListener("DOMContentLoaded", function () {
  let car;
  document.getElementById("javatypes14").innerHTML = car + "<br>" + typeof car;
});
document.addEventListener("DOMContentLoaded", function () {
  let car = "Volvo";
  car = undefined;
  document.getElementById("javatypes15").innerHTML = car + "<br>" + typeof car;
});

document.addEventListener("DOMContentLoaded", function () {
  let car = "";
  document.getElementById("javatypes16").innerHTML =
    "The value is: " + car + "<br>" + typeof car;
});

document.addEventListener("DOMContentLoaded", function () {
  function myFunction(p1, p2) {
    return p1 * p2;
  }

  let result = myFunction(4, 3);
  document.getElementById("javafunc").innerHTML = result;
});

document.addEventListener("DOMContentLoaded", function() {
  let x = myFunction(4, 3);
  document.getElementById("javafunc1").innerHTML = x;
  function myFunction(a, b) {
    return a * b;
  }


  
});

document.addEventListener("DOMContentLoaded", function(){
  function toCelsius(f) {
    return (5/9) * (f - 32);

  }
  let value = toCelsius(77);
  document.getElementById("javafunc2").innerHTML = value;
})
