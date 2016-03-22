define(["init", "createTable", "touchtable"], function (init, createTable, table) {
    return {
        main: function (that) {
            var i = $(that).index();
            var now = new Date();
            var date = new Date(now.getTime() + i * 24 * 3600 * 1000);
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            if (month < 10) {
                month = "0" + month;
            }
            if (day < 10) {
                day = "0" + day;
            }
            init.init.select_date = year + "-" + month + "-" + day;
            init.init.xingqi = "周" + "日一二三四五六日一二三四五".charAt(date.getDay());
            localStorage["xingqi"] = init.init.xingqi;
            localStorage["date"] = init.init.select_date;
        },
        success: function (data) {
            var zhong = data.data.length;
            var heng = data.data[0].data.length;
            createTable.createTable(zhong, heng, data);
            init.init.jsonarray.arr_ground_site.splice(0, init.init.jsonarray.arr_ground_site.length);
            $("input").on("click", function () {
                table.table(this);
            });
        },
        changeBox: function (that) {
            $(".box1").removeClass("current");
            $(".text1").removeClass("current");
            $(that).children().children().addClass("current");
            $(that).children().children().children().addClass("current");
        }
    };
});
