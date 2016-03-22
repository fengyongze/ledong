define(function () {
    return {
        coupons: function (data) {
            var j = 0;
            for (var i = 0; i < data.data.length; i++) {
                var time1 = data.data[i].exp_time.replace(/-/, "/")
                var time2 = new Date(time1).getTime() - new Date().getTime()
                if (time2 > 0) {
                    j++
                }
            }
            $("#quanbox").after("<text id='quan'>" + j + "张</text>")
        },
        couponsfail: function () {
            var j = 0
            $("#quanbox").after("<text id='quan'>" + j + "张</text>")
        }
    }
})
