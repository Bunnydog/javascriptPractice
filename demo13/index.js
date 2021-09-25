window.onload = function () {




    //设置.nav-pointer的宽度
    var oNavPointer = document.querySelector(".nav-pointer");
    //获取超链接
    var oAs = document.querySelectorAll("a");
    //获取超链接元素的宽度,+10是marign的属性值。
    var oWidth = parseInt(getComputedStyle(oAs[0])["width"]) + 10;
    oNavPointer.style.width = oWidth * oAs.length + "px";


    //点击超链实现跳转
    //实现左右移动，需要控制ul元素的left属性值即可
    var oUl = document.querySelector("ul");
    var toggleLength = -510;
    var index = 0;
    oAs[index].style.backgroundColor = "black";

     //造一个函数： 使得导航点可以变颜色。
     function setA() {
        //遍历a的背景颜色是为了重置点击加上的行内颜色样式

        for (var i = 0; i < oAs.length; i++) {
            oAs[i].style.backgroundColor = "";
        }
        oAs[index].style.backgroundColor = "black";
    }

    for (var i = 0; i < oAs.length; i++) {
        oAs[i].num = i; //利用属性来接受i ，也可以直接用let定义，可免去该操作。
        oAs[i].onclick = function () {
            index = this.num;
            oUl.style.left = toggleLength * index + "px";
            setA();
        }
    }


    // 自动切换图片
    setInterval(() => {
        index++;
        index %= oAs.length;
        oUl.style.left = toggleLength * index + "px";
        setA();
    }, 3000);



}