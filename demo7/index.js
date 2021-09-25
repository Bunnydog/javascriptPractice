window.onload = function () {  

    //图片地址数组
    const imgs = ["./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.jpg","./img/5.jpg","./img/6.jpg","./img/7.jpg",]
    var i = 0;  //默认图片索引号

    //绑定按钮 0 为 上， 1为下
    var oBtns = document.getElementsByTagName("button");

    //显示图片当前索引信息
    var oInfo = document.getElementsByClassName("info")[0];
    //修改展示信息的函数
    function setInfo(i){ 
        oInfo.innerHTML = "一共 "+ imgs.length +" 张图片，当前是第 "+ (i+1) +" 张";
    }
    setInfo(i);
    

    //设置自动播放
    var timer;
    oBtns[0].onclick = function () {  
        clearInterval(timer);
        timer = setInterval(() => {
            var oImg = document.getElementsByTagName("img")[0];
            i++;
            i %= imgs.length;
            oImg.src = imgs[i];
            setInfo(i);
        
        }, 1000);

    }

    //设置点击上一张的事件
    oBtns[1].onclick = function () {  
        //获取图片元素
        var oImg = document.getElementsByTagName("img")[0];
        i--;
        if(i<0)
        {
            i = imgs.length-1;
        }
        oImg.src = imgs[i];
        setInfo(i);
    }

    //设置点击下一张的事件
    oBtns[2].onclick = function () {  
        //获取图片元素
        var oImg = document.getElementsByTagName("img")[0];
        i++;
        if(i>imgs.length-1)
        {
            i = 0;
        }
        oImg.src = imgs[i];
        setInfo(i);
    }

    //设置停止按钮
    oBtns[3].onclick = function () {  
        clearInterval(timer);
    }


}