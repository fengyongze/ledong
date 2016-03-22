define(function () {
    return {
        qiandao: function (data) {
            if (data.data[0] !== undefined) {
                $("#qiandao")[0].innerText = data.data[0].total_day;
                $("#jifen")[0].innerText = data.data[0].score;
            }
        },
        qiandaopost: function (data) {
            $("#qiandao")[0].innerText = data.data.total_day;
            $("#jifen")[0].innerText = data.data.score;
        }
    };
});
