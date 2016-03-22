var access_token = localStorage["access_token"];
//保存access_token参数
require.config({
    baseUrl: "js/yonghu/modul",
    paths: {
        skip: "/js/public/skip",
        _AJAX: "/js/public/_AJAX",
        yonghutop: "yonghutop",
        qiandao: "qiandao",
        coupons: "coupons"
    }
});
//点击页面跳转
requirejs(["skip"], function (skip) {
    skip.skip("#box1", "denglu.html");
    skip.skip("#wodedingchang", "wodedingchang.html");
    skip.skip("#wodeshouzang", "wodeshoucang.html");
    skip.skip(".glyphicon", "gengduo.html");
    $("#daijinquan").on("touchend", function () {
        sessionStorage["daijinquan"] = "1";
        window.location.href = "daijinjuan.html";
    });
});
//头部的交互
requirejs(["_AJAX", "yonghutop"], function (_AJAX, _top) {
    var box1 = $("#box1");
    var box2 = $("#box2");
    var glyphicon = $(".glyphicon");
    if (access_token === undefined) {
        box1.removeClass("one");
        box2.addClass("one");
        glyphicon.addClass("one");
    } else {
        box1.addClass("one");
        box2.removeClass("one");
        glyphicon.removeClass("one");
        _AJAX._AJAX("http://112.74.18.193/api/user/info/access_token/" + access_token + "/format/json", "get", "JSON", {}, _top.yonghutop, _top.fail_fun);
    }
});
//签到交互
requirejs(["_AJAX", "qiandao"], function (_AJAX, qiandao) {
    _AJAX._AJAX("http://112.74.18.193/api/user/score/access_token/" + access_token + "/format/json", "GET", "JSON", {}, qiandao.qiandao);
    $("#qiandaobox").on("touchend", function () {
        _AJAX._AJAX("http://112.74.18.193/api/user/score/format/json", "POST", "JSON", {
            access_token: access_token
        }, qiandao.qiandaopost);
    });
});
//代金券显示
requirejs(["_AJAX", "coupons"], function (_AJAX, coupons) {
    _AJAX._AJAX("http://112.74.18.193/api_v2/pay/coupons/access_token/" + access_token + "/format/json", "GET", "JSON", coupons.coupons);
});
