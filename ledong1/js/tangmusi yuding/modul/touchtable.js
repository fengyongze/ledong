define(["init", "createqiuchangdiv"], function (init, div) {
    return {
        table: function (that) {
            var value = that.value;
            var td = window.event.srcElement.parentNode;
            var row = td.parentNode.rowIndex;
            var cell = td.cellIndex;
            var time = init.init.arr[row - 1];
            var nextTime = init.init.arr[row];
            $(that).parent().toggleClass("one");
            init.init.position.push({
                row, cell
            });
            $("#biaozhi").addClass("one");
            $("#box3").addClass("one");
            $("#qiuchang")[0].appendChild(div.div(time, nextTime, cell));
            init.init.jsonarray.arr_ground_site.push({
                "id": Number(that.id),
                "start_time": init.init.start_time[row],
                "end_time": init.init.endTime[row]
            });
            for (var i = 0; i < init.init.position.length - 1; i++) {
                if (JSON.stringify(init.init.position[i]) === JSON.stringify({
                        row, cell
                    })) {
                    init.init.position.splice(i, 1);
                    init.init.position.splice(init.init.position.length - 1, 1);
                    init.init.jsonarray.arr_ground_site.splice(i, 1);
                    init.init.jsonarray.arr_ground_site.splice(init.init.position.length, 1);
                    $(".col-xs-3.box").eq(i).remove();
                    $(".col-xs-3.box").eq(init.init.position.length).remove();
                }
            }
            if ($(".col-xs-3.box").length === 0) {
                $("#biaozhi").removeClass("one");
            }
        }
    }
});
