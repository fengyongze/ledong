require.config({
    baseUrl: "js/wodedingchang/modul",
    paths: {
        back: "/js/public/back",
        _AJAX: "/js/public/_AJAX",
        allPay: "allPay"
    }
});
requirejs(["back"], function (back) {
    back.back();
});
requirejs(["_AJAX", "allPay"], function (_AJAX, allPay) {
    var access_token = localStorage["access_token"];
    var page = 1;
    if (access_token === undefined) {
        window.location.href = "denglu.html"
    } else {
        function one() {
            _AJAX._AJAX("http://112.74.18.193/api/pay/status/format/json", "get", "JSON", {
                access_token: access_token,
                page: page
            }, allPay.allPay);
        }
        $(window).scroll(function () {
            var scrollTop = $(this).scrollTop();
            var scrollHeight = $(document).height();
            var windowHeight = $(this).height();
            if (scrollTop + windowHeight === scrollHeight) {
                page++;
                one();
            }
        });
        one();
    }
});
$(document).ready(function () {
    //    $("#fanhui").on("touchend", function () {
    //        window.history.back(-1)
    //    })
    //    if (access_token == undefined) {
    //        window.location.href = "denglu.html"
    //    } else {
    if (localStorage["title"] != undefined) {
        if (localStorage["title"] != "") {
            var shijian1 = localStorage["addTime"].replace(/-/, "/")
            var shijian2 = new Date(shijian1).getTime() + 867 * 1000
            var shijian3 = shijian2 - new Date().getTime()
            if (shijian3 > 0) {
                $("#daizhifu")[0].innerHTML = "<div class='box5'><hr><b class='text2 title'></b><hr class='text3'><div><div class='text3 ground'>场地：</div><div class='text4 changdi'></div><text class='text5 jinqian'></text></div><div class='div1'><text class='text3 date'>日期：</text><text class='text4 shijian'></text></div><div class='div2'><text class='text3 code'>验证码：</text><text class='text4 yanzhengma'>暂无</text><hr></div><div class='box3'>去支付</div><div class='box2'>取消</div></div>"
                $(".box5 .title")[0].innerText = localStorage["title"]
                $(".box5 .changdi")[0].innerText = localStorage["groundsInfo"].replace(/,/g, "\r\n")
                $(".box5 .jinqian")[0].innerHTML = localStorage["totalPaidPrice"].replace(".00", "") + "元"
                $(".box5 .shijian")[0].innerText = localStorage["date"] + "(" + localStorage["xingqi"] + ")"
                $(".box3").on("touchend", function () {
                    window.location.href = "querendingdan.html"
                })
                $(".box2").on("touchend", function () {
                    $.ajax({
                        type: "post",
                        url: "http://112.74.18.193/api/pay/cancel_order/format/json",
                        dataType: "JSON",
                        data: {
                            access_token: access_token,
                            orderId: orderId
                        },
                        success: function (cancel) {
                            if (cancel.errcode == 0) {
                                localStorage["title"] = ""
                                localStorage["status"] = 3
                                $(".modal-body")[0].innerText = "取消成功"
                                $("#one").modal("show")
                                $('#one').on('hidden.bs.modal', function () {
                                    window.location.href = "yonghu.html"
                                })
                            }
                        }
                    })
                })
                $(".box5").on("touchend", function () {
                    sessionStorage["page"] = "1"
                    window.location.href = "dingdanxiangqing.html"
                })
            }
        }
    }
    //    }
})

function qwe() {
    $("#dingdan").attr("class", "content")
    $("#daizhifu").attr("class", "content current")
    $("#quanbudingdan").attr("class", "col-xs-6")
    $("#zhifu").attr("class", "col-xs-6 current")
}

function asd() {
    $("#daizhifu").attr("class", "content")
    $("#dingdan").attr("class", "content current")
    $("#zhifu").attr("class", "col-xs-6")
    $("#quanbudingdan").attr("class", "col-xs-6 current")
}
var access_token = localStorage["access_token"]
var orderId = localStorage["orderId"]
