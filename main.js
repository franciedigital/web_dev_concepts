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
