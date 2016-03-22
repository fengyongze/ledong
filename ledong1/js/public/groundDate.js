define(function () {
    return {
        groundDate: function () {
            for (var i = 1; i < 7; i++) {
                var str = "周" + "日一二三四五六日一二三四五".charAt(new Date().getDay() + i);
                $(".text1")[0].innerText = "今日"
                $(".text1")[i].innerText = str
                var now = new Date();
                var date = new Date(now.getTime() + i * 24 * 3600 * 1000);
                var month = date.getMonth() + 1;
                var day = date.getDate();
                $(".text2")[0].innerText = (new Date().getMonth() + 1) + "-" + new Date().getDate()
                $(".text2")[i].innerText = month + "-" + day
            }
        }
    }
})
