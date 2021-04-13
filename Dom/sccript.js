//getElemenById = id ye ulaşır
//innerHTml = etiketin içine girilen değere ulaşığ değeri değiştirir.
document.getElementById("pLabel").innerHTML ="Kaan";

//tag ile ulaşır.
var a = document.getElementsByTagName("a");

//class ismine ulaşır.
// var classElemanlari = document.getElementsByClassName("intro1");
// alert(classElemanlari[0].innerHTML);


// var quearyElemanlari = document.querySelectorAll("p.intro2");
// alert(quearyElemanlari.length)

//İsimle ulaşır.
var element = document.getElementsByName("input1");


var elemtnt = document.getElementById("button").addEventListener("click",()=>{
    alert("tıklandi");
})