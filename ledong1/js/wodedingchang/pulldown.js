var myScroll,
    pullUpEl,
    pullUpOffset,
    generatedCount = 1,
    access_token = localStorage["access_token"];

function pullUpAction() {
    var el, div;
    el = document.getElementById('thelist');
    div = document.createElement('div');
    $.ajax({
        type: "get",
        url: "http://112.74.18.193/api/pay/status/access_token/" + access_token + "/page/" + generatedCount + "/format/json",
        dataType: "JSON",
        success: function (data) {
            if (data.errcode != 0) {
                alert(data.errcode)
                    //                window.location.href="denglu.html"
            } else {
                var j = 0
                for (var i = (generatedCount - 1) * 10; i < data.data.length * generatedCount; i++) {
                    var div1 = document.createElement("div")
                    var div2 = document.createElement("div")
                    div1.setAttribute("class", "box4")
                    div2.setAttribute("class", "box4 weizhifu")
                    if (data.data[j].status == "2") {
                        el.appendChild(div1);
                        if (data.data[j].validateCodeStatus == 0) {
                            $(".box4")[i].innerHTML = "<hr><b class='text2 title'></b><hr class='text3'><div><div class='text3 ground'>场地：</div><div class='text4 changdi'></div></div><div class='div1'><text class='text3 date'>日期：</text><text class='text4 shijian'></text><text class='text5 jinqian'></text></div><div class='div2'><text class='text3 code'>验证码：</text><text class='text4 yanzhengma'></text><div class='text6'>未使用</div></div><hr>"
                        } else {
                            $(".box4")[i].innerHTML = "<hr><b class='text2 title'></b><hr class='text3'><div><div class='text3 ground'>场地：</div><div class='text4 changdi'></div></div><div class='div1'><text class='text3 date'>日期：</text><text class='text4 shijian'></text><text class='text5 jinqian'></text></div><div class='div2'><text class='text3 code'>验证码：</text><text class='text4 yanzhengma'></text><div class='text7'>已使用</div></div><hr>"
                        }
                    } else {
                        el.appendChild(div1);
                        $(".box4")[i].innerHTML = "<hr><b class='text2 title'></b><hr class='text3'><div><div class='text3 ground'>场地：</div><div class='text4 changdi'></div></div><div class='div1'><text class='text3 date'>日期：</text><text class='text4 shijian'></text><text class='text5 jinqian'></text></div><div class='div2'><text class='text3 code'>验证码：</text><text class='text4 yanzhengma'></text><div class='text7'>已取消</div></div><hr>"
                    }
                    $(".box4 .title")[i].innerHTML = data.data[j].ground.title
                    $(".box4 .changdi")[i].innerText = data.data[j].groundsInfo.replace(/,/g, "\r\n")
                    $(".box4 .shijian")[i].innerHTML = data.data[j].display_date + "(周" + data.data[j].display_day + ")"
                    $(".box4 .jinqian")[i].innerHTML = data.data[j].totalPrice + "元"
                    if (data.data[j].validateCode == "") {
                        $(".box4 .yanzhengma")[i].innerHTML = "暂无"
                    } else {
                        $(".box4 .yanzhengma")[i].innerHTML = data.data[j].validateCode
                    }
                    j++
                }
                $(".box4").on("touchend", function () {
                    var a = $(this).index()
                    sessionStorage["a"] = a
                    sessionStorage["page"] = "2"
                    window.location.href = "dingdanxiangqing.html"
                })
            }
        }
    })
}
$(document).ready(function () {
    pullUpAction()
})
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var scrollHeight = $(document).height();
    var windowHeight = $(this).height();
    if (scrollTop + windowHeight == scrollHeight) {
        generatedCount++
        pullUpAction()
    }
});
