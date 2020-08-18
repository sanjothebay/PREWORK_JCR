

document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height = "300px";

});

document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "red";

});

$("#button3").on("click", function(){
    $("#box").fadeOut()

});

document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style="height:150px; width:150px; background-color:orange; margin:25px";

});

document.getElementById("button5").addEventListener("click", function(){
    document.getElementById("box").style.height = "25px";

});

