// 实现拖拽效果
// 1、给元素绑定按下鼠标事件
// 2、在按下事件中嵌套移动事件
// 3、最后在松开鼠标后，结束移动事件和自身的事件

//4、解决鼠标与元素点击后偏移的问题，偏移量 = page - offset !注意计算位置


var oPhoto = document.querySelector(".photo");
oPhoto.onmousedown = function (event) {

    var skewLeft = event.pageX - oPhoto.offsetLeft;
    var skewTop = event.pageY - oPhoto.offsetTop;


    document.onmousemove = function (event) {

        var x = event.pageX;
        var y = event.pageY;

        oPhoto.style.left = x-skewLeft + "px";
        oPhoto.style.top = y-skewTop + "px";
    }

    this.onmouseup = function () {
        document.onmousemove = null;
    }

    return false;

}