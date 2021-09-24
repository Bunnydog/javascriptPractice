var oBox = document.querySelector(".box");
document.onmousemove = function (event) {  

    var x = event.clientX;
    var y = event.clientY;
    oBox.style.left = x +"px";
    oBox.style.top = y +"px";

}