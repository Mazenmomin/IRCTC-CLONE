
var a = document.querySelector(".train-options");
var b = document.querySelector(".m");
function yess(){
    a.classList.toggle("new");
}
function non(){
    b.classList.toggle("n");
}
function avai(){
    // var q = document.getElementsByClassName("ac3");
//    document.getElementsByClassName("ac3").innerHTML = "hello";
document.getElementById("h").innerHTML = "<span style='color: #37A51D;font-weight: 700;'>AVAILABLE-0006</span>";
document.getElementById("h3").innerHTML = "<span style='color: red;font-weight: 700;'>WL-97</span>";
document.getElementById("h2").innerHTML = "<span style='color: #37A51D;font-weight: 700;'>AVAILABLE-009</span>";
}
function avai2(){
    document.getElementById("h4").innerHTML = "<span style='color: red;font-weight: 700;'>WL-03</span>";
document.getElementById("h5").innerHTML = "<span style='color: #37A51D;font-weight: 700;'>AVAILABLE-127</span>";
}
function avai3(){
    document.getElementById("h7").innerHTML = "<span style='color: red;font-weight: 700;'>WL-921</span>";
document.getElementById("h6").innerHTML = "<span style='color: #37A51D;font-weight: 700;'>AVAILABLE-001</span>";
}
function fun(){
    window.alert("Booking");
}
function fun2(){
    window.alert("NO date");
}
function fun3(){
    window.alert("No train");
}