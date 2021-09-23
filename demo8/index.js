//实现全选/全不选的功能
var oToggleAll = document.getElementById("toggleAll");
var oItems = document.getElementsByName("sport");

oToggleAll.onchange = function () {

    // if (oToggleAll.checked) {
    //     for (var i = 0; i < oItems.length; i++) {
    //         oItems[i].checked = true;
    //     }
    // } else {
    //     for (var i = 0; i < oItems.length; i++) {
    //         oItems[i].checked = false;
    //     }
    // }

    for (var i = 0; i < oItems.length; i++) {
        oItems[i].checked = this.checked;
    }
}


//解决全选框与选项的关系问题
var state = false;  //判断是否全选的状态量。
for (var i = 0; i < oItems.length; i++) {
    oItems[i].addEventListener("change", function () {
        for (var j = 0; j < oItems.length; j++) {
            if (!oItems[j].checked) {
                state = false;
                oToggleAll.checked = state;
                break;
            }else{
                state = true;
                oToggleAll.checked = state;
            }
        }

    }, false)
}

function  changeState() {  
    for (var j = 0; j < oItems.length; j++) {
        if (!oItems[j].checked) {
            state = false;
            oToggleAll.checked = state;
            break;
        }else{
            state = true;
            oToggleAll.checked = state;
        }
    }
}






var oDivBtns = document.getElementsByClassName("btns")[0];
var oBtns = oDivBtns.getElementsByTagName("input");

//实现全选按钮的功能
oBtns[0].onclick = function () {
    for (var i = 0; i < oItems.length; i++) {
        oItems[i].checked = true;
    }
    changeState();

}

//实现全不选按钮的功能
oBtns[1].onclick = function () {
    for (var i = 0; i < oItems.length; i++) {
        oItems[i].checked = false;
    }
    changeState()

}

//实现反选按钮的功能
oBtns[2].onclick = function () {
    for (var i = 0; i < oItems.length; i++) {

        oItems[i].checked = !oItems[i].checked;
    }
    changeState()

}

//实现提交按钮的功能
oBtns[3].onclick = function () {
    for (var i = 0; i < oItems.length; i++) {
        if (oItems[i].checked) {
            alert(oItems[i].value);
        }
    }
}