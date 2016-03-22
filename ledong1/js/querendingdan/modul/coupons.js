define(function () {
    return {
        coupons: function (quan) {
            if (sessionStorage["coupons_id"] == undefined) {
                var j = 0
                for (var i = 0; i < quan.data.length; i++) {
                    var time1 = quan.data[i].exp_time.replace(/-/, "/")
                    var time2 = new Date(time1).getTime() - new Date().getTime()
                    if (time2 > 0) {
                        $("#text8")[0].innerHTML = "¥-" + quan.data[i].coupons_amount.replace(".00", "")
                    }
                }
            } else {
                var coupons_id = sessionStorage["coupons_id"]
                $("#text8")[0].innerHTML = "¥-" + quan.data[coupons_id].coupons_amount.replace(".00", "")
            }
        }
    };
});
