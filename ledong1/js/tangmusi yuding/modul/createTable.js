define(["init"], function (init) {
    return {
        createTable: function (r, c, data) {
            //            var table = document.createElement("table");//            var tbody = document.createElement("tbody");
            //            var thead = document.createElement("thead");
            document.getElementById("content").innerHTML = "<table class='table table-bordered'></table";
            var html = template("table", data)
            $("#content table").html(html);
            //            var theadth = document.createElement("th");
            //            thead.appendChild(theadth);
            //            for (var k = 0; k < c; k++) {
            //                var theadtd = document.createElement("td");
            //                theadtd.innerText = data.data[0].data[k].id + "号场"
            //                thead.appendChild(theadtd);
            //            }
            for (var i = 0; i < r; i++) {
                //                var tr = document.createElement("tr");
                //                var th = document.createElement("th");
                init.init.arr[i] = data.data[i].time
                init.init.start_time[i] = data.data[i].start_time
                init.init.endTime[i] = data.data[i].end_time
                    //                th.innerText = init.init.arr[i]
                    //                tr.appendChild(th);
                    //                for (var j = 0; j < c; j++) {
                    //                    var td = document.createElement("td");
                    //                    if (data.data[i].data[j].can_booking == 0) {
                    //                        td.innerHTML = "<div></div>"
                    //                    } else {
                    //                        td.innerHTML = "<input type='button' class='btn btn-default btn-block' value = '" + data.data[i].data[j].price + "'id='" + data.data[i].data[j].id + "'>"
                    //                    }
                    //                    tr.appendChild(td);
                    //                }
                    //                tbody.appendChild(tr);
            }
            var end_onlytime = data.data[r - 1].end_time.substr(11, 8)
            init.init.arr.push(end_onlytime)
                //            $("#content table")[0].appendChild(thead);
                //            $("#content table")[0].appendChild(tbody);
        }
    }
});
