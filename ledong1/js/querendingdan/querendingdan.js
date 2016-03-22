require.config({
    baseUrl: "js/querendingdan/modul",
    paths: {
        back: "/js/public/back",
        _AJAX: "/js/public/_AJAX",
        coupons: "coupons",
        page: "page",
        daojishi: "daojishi",
    }
});
requirejs(["back"], function (back) {
    back.back();
});
requirejs(["page", "daojishi"], function (page, daojishi) {
    page.page();
    daojishi.daojishi();
});
requirejs(["_AJAX", "coupons"], function (_AJAX, coupons) {
    var access_token = localStorage["access_token"];
    _AJAX._AJAX("http://112.74.18.193/api_v2/pay/coupons/format/json", "get", "JSON", {
        access_token: access_token
    }, coupons.coupons);
    $("#box4").on("touchend", function () {
        sessionStorage["daijinquan"] = "2";
        window.location.href = "daijinjuan.html";
    });
});
requirejs(["_AJAX"], function (_AJAX) {
    $(".img5.wx").on("touchend", function () {
        if ($(".img5.wx").hasClass("one")) {
            $(".img5.wx").removeClass("one");
            sessionStorage["channel"] = undefined;
        } else {
            $(".img5.wx").addClass("one");
            $(".img5.alipay").removeClass("one");
            sessionStorage["channel"] = "wx";
        }
    });
    $(".img5.alipay").on("touchend", function () {
        if ($(".img5.alipay").hasClass("one")) {
            $(".img5.alipay").removeClass("one");
            sessionStorage["channel"] = undefined;
        } else {
            $(".img5.alipay").addClass("one");
            $(".img5.wx").removeClass("one");
            sessionStorage["channel"] = "alipay";
        }
    });
    $("#box7").on("touchend", function () {
        var access_token = localStorage["access_token"];
        var orderid = localStorage["orderId"];
        var channel = sessionStorage["channel"];
        if (channel == "undefined") {
            $(".modal-body")[0].innerText = "请选择支付方式";
            $("#one").modal("show");
        } else {
            _AJAX._AJAX("http://112.74.18.193/api/pay/send/format/json", "post", "JSON", {
                orderId: orderid,
                access_token: access_token,
                channel: channel
            });
        }
    });
});
//$(document).ready(function () {
//    $("#fanhui").on("touchend", function () {
//        window.history.back(-1)
//    })
//    var access_token = localStorage["access_token"]
//    $.ajax({
//        type: "get",
//        url: "http://112.74.18.193/api_v2/pay/coupons/access_token/" + access_token + "/format/json",
//        dataType: "JSON",
//        success: function (quan) {
//            if (sessionStorage["coupons_id"] == undefined) {
//                var j = 0
//                for (var i = 0; i < quan.data.length; i++) {
//                    var time1 = quan.data[i].exp_time.replace(/-/, "/")
//                    var time2 = new Date(time1).getTime() - new Date().getTime()
//                    if (time2 > 0) {
//                        $("#text8")[0].innerHTML = "¥-" + quan.data[i].coupons_amount.replace(".00", "")
//                    }
//                }
//            } else {
//                var coupons_id = sessionStorage["coupons_id"]
//                $("#text8")[0].innerHTML = "¥-" + quan.data[coupons_id].coupons_amount.replace(".00", "")
//            }
//        }
//
//    })
//    $("#title")[0].innerText = localStorage["title"]
//    $("#groundsInfo")[0].innerText = localStorage["groundsInfo"].replace(/,/g, "\r\n")
//    $("#text5")[0].innerHTML = "¥" + localStorage["totalPaidPrice"]
//    $("#riqi")[0].innerText = localStorage["date"] + "(" + localStorage["xingqi"] + ")"
//    $("#text12")[0].innerHTML = "去支付¥" + localStorage["totalPaidPrice"]
//    daojishi()
//
//    function daojishi() {
//        var shijian1 = localStorage["addTime"].replace(/-/, "/")
//        var shijian2 = new Date(shijian1).getTime() + 867 * 1000
//        var shijian3 = shijian2 - new Date().getTime()
//        if (shijian3 > 0) {
//            var time = parseFloat(shijian3) / 1000
//            time = parseInt(time / 60.0) + "分钟" + parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60) + "秒";
//        } else {
//            time = "00分0秒"
//            localStorage["status"] = 3
//        }
//        $("#text3")[0].innerHTML = time
//        setTimeout(function () {
//            daojishi()
//        }, 1000)
//    }
//    $("#box7").on("touchend", function () {
//        var access_token = localStorage["access_token"]
//        var orderid = localStorage["orderId"]
//        var channel = sessionStorage["channel"]
//        if (channel == "undefined") {
//            $(".modal-body")[0].innerText = "请选择支付方式"
//            $("#one").modal("show")
//        } else {
//            $.ajax({
//                url: "http://112.74.18.193/api/pay/send/format/json",
//                type: "POST",
//                data: {
//                    orderId: orderid,
//                    access_token: access_token,
//                    channel: channel
//                },
//                dataType: "JSON",
//                success: function (zhifu) {
//                    alert(zhifu.errcode)
//                }
//            })
//        }
//    })
//})
//
//function sunzi() {
//    if ($("#img7").hasClass("one")) {
//        $("#span2")[0].innerHTML = "<img src='img/选中按钮@2x.png' class='two' id='img7'ontouchstart='sunzi()'>"
//        $("#span1")[0].innerHTML = "<img src='img/未选中按钮@2x.png' class='one' id='img5'ontouchstart='show()'>"
//        sessionStorage["channel"] = "alipay"
//    } else if ($("#img7").hasClass("two")) {
//        $("#span2")[0].innerHTML = "<img src='img/未选中按钮@2x.png' class='one' id='img7'ontouchstart='sunzi()'>"
//        sessionStorage["channel"] = undefined
//    }
//}
//$(function() {
//    $("#myModal").on('shown.bs.modal', function (e) {
//        $("#input1").focus()
//    })
//})
//function check1(){
//    $("#input2").focus()
//    if($("#input1").val()==""){
//        $("#input1").focus()
//    }
//}
//function  check2(){
//    $("#input3").focus()
//    if($("#input2").val()==""){
//        $("#input1").focus()
//    }
//}
//function  check3(){
//    $("#input4").focus()
//    if($("#input3").val()==""){
//        $("#input2").focus()
//    }
//}
//function  check4(){
//    $("#input5").focus()
//    if($("#input4").val()==""){
//        $("#input3").focus()
//    }
//}
//function  check5(){
//    $("#input6").focus()
//    if($("#input5").val()==""){
//        $("#input4").focus()
//    }
//}
//function check6(){
//    if($("#input6").val()==""){
//        $("#input5").focus()
//    }
//}
