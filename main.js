document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
});


document.getElementById("changeTextBtn1").addEventListener("click", function(){
    document.getElementById("demo1").style.fontSize='35px';
});

document.getElementById("hideTextBtn").addEventListener("click",function(){
    document.getElementById("demo2").style.display="none";
});

document.getElementById("showTextBtn").addEventListener("click", function(){
    document.getElementById("demo3").style.display="block";
});

document.getElementById("newdemo").innerHTML = 5 + 6;

document.getElementById("windowpm").addEventListener("click", function(){
    window.print();
});


let x, y, z; //statement 1
x = 5;       // Statement 2
y = 6;       //  Statement 3
z = x + y;   // statement 4

document.getElementById("newdemo1").innerHTML = "The value of z is " + z +".";

document.getElementById("democoma").innerHTML =
"Hello Dolly!";

document.getElementById("jsstate").addEventListener("click", function(){
    document.getElementById("newdemo2").innerHTML = "Hello Dolly!";
    document.getElementById("newdemo3").innerHTML = "How are you?";
})