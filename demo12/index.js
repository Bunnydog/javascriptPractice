
//37——左； 38——上 ； 39——右 ； 40——下

var oBox  = document.querySelector(".box");

document.onkeydown = function (e) { 
    
    //速度
    var speed = 10;
    //按shift加速
    if(e.shiftKey){
        speed = 50;
    }

    switch(e.keyCode){
        //左
        case 37:
            var left = parseInt(getComputedStyle(oBox)["marginLeft"]);
            left -= speed;
            oBox.style.marginLeft = left  + "px";  
            break;
        //上
        case 38:
            var top = parseInt(getComputedStyle(oBox)["marginTop"]);
            top -= speed;
            oBox.style.marginTop = top  + "px";  
            break;
        //右
        case 39:
            var left = parseInt(getComputedStyle(oBox)["marginLeft"]);
            left += speed;
            oBox.style.marginLeft = left  + "px";  
            break;
        //下
        case 40:
            var top = parseInt(getComputedStyle(oBox)["marginTop"]);
            top += speed;
            oBox.style.marginTop = top  + "px";  
            break;
        
    }
}