define(function () {
    return {
        daojishi: function daojishi() {
            var shijian1 = localStorage["addTime"].replace(/-/, "/");
            var shijian2 = new Date(shijian1).getTime() + 867 * 1000;
            var shijian3 = shijian2 - new Date().getTime();
            var time = parseFloat(shijian3) / 1000;
            if (shijian3 > 0) {
                time = parseInt(time / 60.0) + "分钟" + parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60) + "秒";
            } else {
                time = "00分0秒";
                localStorage["status"] = 3;
            }
            $("#text3")[0].innerHTML = time;
            setTimeout(function () {
                daojishi();
            }, 1000);
        }
    };
});
