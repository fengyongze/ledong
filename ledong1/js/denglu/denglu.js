/**
 * Created by acer on 2015-12-26.
 */
require.config({
    baseUrl: "js/denglu/modul",
    paths: {
        _AJAX: "/js/public/_AJAX",
        skip: "/js/public/skip",
        signIn: "signIn"
    }
});
//页面跳转
requirejs(["skip"], function (skip) {
    skip.skip("#fanhui", "yonghu.html");
    skip.skip("#zhuce", "zhuce.html");
});
//登录交互
requirejs(["_AJAX", "signIn"], function (_AJAX, sign) {
    $("#dengluanniu").on("touchend", function () {
        var str = base64.encode64($("#mima").val());
        _AJAX._AJAX("http://112.74.18.193/api/user/login/format/json", "post", "JSON", {
            telephone: $("#shouji").val(),
            PWD: str
        }, sign.signIn, sign.signInfail);
    });
});
