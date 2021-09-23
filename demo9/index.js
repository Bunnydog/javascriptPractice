
function deleteA() {  
        //获取当前的tr
        var oTr = this.parentNode.parentNode;
        var oName = oTr.firstElementChild.innerText;

        //弹出提示框
        var state = confirm("确定删除 "+oName+" 吗？");
        
        //实现删除元素
        if (state) {
            oTr.parentNode.removeChild(oTr);
        }

        return false; //取消超链接跳转

}

window.onload = function () {

    //实现点击delete超链删除效果。
    var oA = document.getElementsByTagName("a");
    //给每一个超链都添加点击事件。
    for (var i = 0; i < oA.length; i++) {
        oA[i].onclick = deleteA;
    }


    //实现点击按钮添加新成员
    var oBtn = document.getElementById("btn");
    oBtn.onclick = function () {

        //获取表单信息
        var oText = document.querySelectorAll("input[type = text]");
        var oAText = '<a href="javascript:;">delete</a>';
        //创建tr
        var oTr = document.createElement("tr");
        //创建td
        for (var i = 0; i < 4; i++) {
            if (i < 3) {
                var oTd = document.createElement("td");
                oTd.innerHTML = oText[i].value;
            } else {
                var oTd = document.createElement("td");
                oTd.innerHTML = oAText;
            }
            oTr.appendChild(oTd);
        }
        //获取父元素

        var otbody = document.getElementsByTagName("tbody")[0];
        otbody.appendChild(oTr);

        //添加删除事件
        var oa = oTr.querySelector("a");
        oa.onclick = deleteA;
    }

}