require.config({
    baseUrl: "js/zhuce/modul",
    paths: {
        number: "/js/public/number",
        _AJAX: "/js/public/_AJAX",
        back: "/js/public/back",
        countdown: "/js/public/countdown",
        register: "register"
    }
});
requirejs(["back"], function (back) {
    back.back();
});
//#box1获取验证码按钮的交互
//#box2确认注册按钮的交互
requirejs(["_AJAX", "number", "countdown", "register"], function (_AJAX, number, countdown, register) {
    var box1 = $("#box1");
    var sum = number.random();
    box1.on("touchend", function () {
        _AJAX._AJAX("http://xtx.telhk.cn:8080/sms.aspx?action=send&userid=5532&password=486454&account=a10216&content=" + sum + "【乐动】" + "&sendTime=&mobile=" + $("#shouji").val());
        countdown.countdown();
    });
    $("#box2").on("touchend", function () {
        var yanzhengma = $("#yanzhengma").val();
        var str = base64.encode64($("#mima").val());
        if (sum === yanzhengma) {
            _AJAX._AJAX("http://112.74.18.193/api/user/register/format/json", "POST", "JSON", {
                telephone: $("#shouji").val(),
                PWD: str
            }, register.register)
        } else {
            $(".modal-body")[0].innerText = "验证码输入错误，请重新输入"
            $("#one").modal("show")
        }
    });
});
