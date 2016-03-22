define(function (back) {
    return {
        back: function () {
            $("#fanhui").on("touchend", function () {
                window.history.back(-1);
            });
        }
    };
});
// 返回上一级
