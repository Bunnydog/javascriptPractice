window.onload = function () {

    var oBtn = document.querySelectorAll("button");
    var oBox = document.querySelector(".box");
    var oBox2 = document.querySelector(".box2");





    oBtn[0].onclick = function () {

        /*
        clearInterval(timer);
        //要想用js实现动画的效果，得借助定时器。
        //用timer来控制动画的结束时机
        timer = setInterval(() => {
            //获取box原来的left的值。
            var oldValue = parseInt(getComputedStyle(oBox)["left"]);
            var newValue = oldValue + 20;
            if (newValue > 800) {
                newValue = 800;
            }
            oBox.style.left = newValue + "px";

            if (newValue == 800) {
                clearInterval(timer);
            }
        }, 10);
        */
        move(oBox, "left", 20, 800)

    }


    oBtn[1].onclick = function () {
        move(oBox, "left", 20, 0)
    }

    oBtn[2].onclick = function () {
        move(oBox2, "left", 10, 800)
    }


    oBtn[3].onclick = function () {
        move(oBox2, "width", 10, 800,function () {  
            move(oBox2, "height", 10, 300);
        });
    }








}