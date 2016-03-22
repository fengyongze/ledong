define(function () {
    return {
        sun: function (data) {
            var quan = sessionStorage["daijinquan"];
            for (var i = 0; i < data.data.length; i++) {
                var time1 = data.data[i].exp_time.replace(/-/, "/");
                var time2 = new Date(time1).getTime() - new Date().getTime();
                var main = template("main", data.data[i]);
                var exp = template("exp", data.data[i]);
                if (quan === "1") {
                    if (time2 < 0) {
                        $("#content").append(exp);
                    } else {
                        $("#content").append(main);
                    }
                } else {
                    if (time2 > 0) {
                        $("#content").append(main);
                    }
                    $("#text2box").addClass("one");
                    $("#anniubox").addClass("one");
                    $(".daijinquanbox").on("touchend", function () {
                        var a = $(this).index();
                        $(".img")[a].src = "img/代金券选中@2x.png";
                        sessionStorage["coupons_id"] = $(this).attr("id");
                        setTimeout(function () {
                            window.history.back(-1)
                        }, 300);
                    });
                }
            }
        }
    };
});
