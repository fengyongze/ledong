require.config({
    baseUrl: "js/tangmusi yuding/modul",
    paths: {
        _AJAX: "/js/public/_AJAX",
        back: "/js/public/back",
        groundDate: "/js/public/groundDate",
        modal: "/js/public/modal",
        skip: "/js/public/skip",
        main: "main",
        init: "init",
        table: "touchtable",
        createqiuchangdiv: "createqiuchangdiv",
        order: "order"
    }
})

requirejs(["back", "groundDate", "main", "_AJAX", "init"], function (back, groundDate, main, _AJAX, init) {
    back.back();
    if (localStorage["addTime"] != undefined) {
        var shijian1 = localStorage["addTime"].replace(/-/, "/")
        var shijian2 = new Date(shijian1).getTime() + 867 * 1000
        var shijian3 = shijian2 - new Date().getTime()
        if (shijian3 < 0) {
            localStorage["status"] = 3
        }
    }
    groundDate.groundDate();
    $("#mytable th").on("click", function () {
        main.changeBox(this);
        main.main(this);
        _AJAX._AJAX("http://112.74.18.193/api_v2/place/grounds_status/format/json", "get", "JSON", {
            id: init.init.id,
            select_date: init.init.select_date
        }, main.success);
    });
    $("#mytable th a").eq(init.init.index).trigger("click");
    $("#mytable th").eq(init.init.index).trigger("touchend");
});
requirejs(["_AJAX", "init", "modal", "order", "skip"], function (_AJAX, init, modal, order, skip) {
    var access_token = localStorage["access_token"];
    $("#dingdan").on("touchend", function () {
        console.log(JSON.stringify(init.init.jsonarray))
        if (access_token === undefined) {
            modal.modal("请先登录");
        } else if (init.init.jsonarray.arr_ground_site.length === 0) {
            modal.modal("您还没选择场地");
        } else if (localStorage["status"] === "1") {
            modal.modal("您还有未完成订单");
        } else {
            _AJAX._AJAX("http://112.74.18.193/api_v2/place/grounds_order/format/json", "post", "JSON", {
                access_token: access_token,
                arr_ground_site: JSON.stringify(init.init.jsonarray)
            }, order.order, order.fail)
        }
    });
    if (localStorage["status"] === "1") {
        $("#biaozhi").addClass("one");
        $("#box3").removeClass("one");
    }
    skip.skip("#box3", "querendingdan.html");
});
//$(document).ready(function () {
//    $("#fanhui").on("touchend", function () {
//        window.history.back(-1);
//    })
//})
//$(".box1").on("touchend", function () {
//    $(".box1").removeClass("current")
//    $(".text1").removeClass("current")
//    $(this).addClass("current")
//    $(this).children().addClass("current")
//})
//var arr = []
//var start_time = []
//var endTime = []
//var jsonstr = '{"arr_ground_site":[]}';
//var jsonarray = eval("(" + jsonstr + ")");
//$("#mytable th").on("touchend", function () {
//    var i = $(this).index()
//    var id = sessionStorage["ground_id"]
//    var now = new Date();
//    var date = new Date(now.getTime() + i * 24 * 3600 * 1000);
//    var year = date.getFullYear();
//    var month = date.getMonth() + 1;
//    var day = date.getDate();
//    if (month < 10) {
//        month = "0" + month
//    }
//    if (day < 10) {
//        day = "0" + day
//    }
//    var select_date = year + "-" + month + "-" + day
//    var xingqi = "周" + "日一二三四五六日一二三四五".charAt(new Date().getDay());
//    localStorage["xingqi"] = xingqi
//    localStorage["date"] = select_date
//    $.ajax({
//        type: "get",
//        url: "http://112.74.18.193/api_v2/place/grounds_status/id/" + id + "/select_date/" + select_date,
//        dataType: "JSON",
//        success: function (data) {
//            var zhong = data.data.length
//            var heng = data.data[0].data.length
//
//            function createTable(r, c) {
//                var table = document.createElement("table");
//                var tbody = document.createElement("tbody");
//                var thead = document.createElement("thead")
//                document.getElementById("content").innerHTML = "<table class='table table-bordered'></table";
//                var theadth = document.createElement("th");
//                thead.appendChild(theadth);
//                for (var k = 0; k < c; k++) {
//                    var theadtd = document.createElement("td");
//                    theadtd.innerText = data.data[0].data[k].id + "号场"
//                    thead.appendChild(theadtd);
//                }
//
//                for (var i = 0; i < r; i++) {
//                    var tr = document.createElement("tr");
//                    var th = document.createElement("th");
//                    arr[i] = data.data[i].time
//                    start_time[i] = data.data[i].start_time
//                    endTime[i] = data.data[i].end_time
//                    th.innerText = arr[i]
//                    tr.appendChild(th);
//                    for (var j = 0; j < c; j++) {
//                        var td = document.createElement("td");
//                        if (data.data[i].data[j].can_booking == 0) {
//                            td.innerHTML = "<div></div>"
//                        } else {
//                            td.innerHTML = "<input type='button' class='btn btn-default btn-block'onclick='show(this)' value = '" + data.data[i].data[j].price + "'id='" + data.data[i].data[j].id + "'>"
//                        }
//                        tr.appendChild(td);
//                    }
//                    tbody.appendChild(tr);
//                }
//                var end_time = data.data[zhong - 1].end_time
//                var end_onlytime = end_time.substr(11, 8)
//                arr.push(end_onlytime)
//                $("#content table")[0].appendChild(thead);
//                $("#content table")[0].appendChild(tbody);
//                if (localStorage["status"] == 1) {
//                    $("#qiuchang")[0].innerHTML = "<div id='box3' onclick='weiwancheng()'><img src='img/%E6%9C%AA%E6%94%AF%E4%BB%98%E8%AE%A2%E5%8D%95%E6%8F%90%E7%A4%BA%E6%A1%86@2x.png' class='img-responsive'id='weizhifubox'><text id='weizhifu'>您有一条未完成订单！</text></div>"
//                } else {
//                    $("#qiuchang")[0].innerHTML = "<div class='col-xs-3 col-xs-offset-2'><div id='yishou'></div><p>已售</p></div><div class='col-xs-3'><div id='zaishou'></div><p>在售</p></div><div class='col-xs-3'><div id='xuanzhong'></div><p>选中</p></div>"
//                }
//            }
//            createTable(zhong, heng)
//            jsonarray.arr_ground_site.splice(0, jsonarray.arr_ground_site.length)
//        }
//    })
//})

//function weiwancheng() {
//    window.location.href = "querendingdan.html"
//}
//$(document).ready(function () {
//    for (var i = 1; i < 7; i++) {
//        var str = "周" + "日一二三四五六日一二三四五".charAt(new Date().getDay() + i);
//        $(".text1")[0].innerText = "今日"
//        $(".text1")[i].innerText = str
//        var now = new Date();
//        var date = new Date(now.getTime() + i * 24 * 3600 * 1000);
//        var year = date.getFullYear();
//        var month = date.getMonth() + 1;
//        var day = date.getDate();
//        $(".text2")[0].innerText = (new Date().getMonth() + 1) + "-" + new Date().getDate()
//        $(".text2")[i].innerText = month + "-" + day
//    }
//    var index = sessionStorage["index"]
//    $("#mytable th:eq(" + index + ")").trigger("touchend")
//    $(".box1:eq(" + index + ")").trigger("touchend")
//    })
//var sum = 0
//
//function show(obj) {
//    var q = Number(obj.value)
//    var td = window.event.srcElement.parentNode;
//    var a = arr[td.parentNode.rowIndex]
//    var h = arr[td.parentNode.rowIndex + 1]
//    var startTime = start_time[td.parentNode.rowIndex]
//    var lastTime = endTime[td.parentNode.rowIndex]
//    var b = td.cellIndex
//    if ($(".col-xs-3").hasClass("four")) {
//        g = a + b
//        if (g == c) {
//            $(".col-xs-3.one").remove()
//            c = d
//            d = e
//            e = f
//            sum = sum - q
//            $(".col-xs-3.two").addClass("one")
//            $(".col-xs-3.two").removeClass("two")
//            $(".col-xs-3.three").addClass("two")
//            $(".col-xs-3.three").removeClass("three")
//            $(".col-xs-3.four").addClass("three")
//            $(".col-xs-3.four").removeClass("four")
//            obj.style.backgroundColor = "#80c269"
//            jsonarray.arr_ground_site.splice(0, 1)
//        } else if (g == d) {
//            $(".col-xs-3.two").remove()
//            d = e
//            e = f
//            sum = sum - q
//            $(".col-xs-3.three").addClass("two")
//            $(".col-xs-3.three").removeClass("three")
//            $(".col-xs-3.four").addClass("three")
//            $(".col-xs-3.four").removeClass("four")
//            obj.style.backgroundColor = "#80c269"
//            jsonarray.arr_ground_site.splice(1, 1)
//        } else if (g == e) {
//            $(".col-xs-3.three").remove()
//            e = f
//            sum = sum - q
//            $(".col-xs-3.four").addClass("three")
//            $(".col-xs-3.four").removeClass("four")
//            obj.style.backgroundColor = "#80c269"
//            jsonarray.arr_ground_site.splice(2, 1)
//        } else if (g == f) {
//            $(".col-xs-3.four").remove()
//            sum = sum - q
//            obj.style.backgroundColor = "#80c269"
//            jsonarray.arr_ground_site.splice(3, 1)
//        } else {
//            if ($(".col-xs-3").length == 4) {
//                $(".modal-body")[0].innerText = "不能订"
//                $("#one").modal("show")
//            }
//        }
//    } else {
//        if ($(".col-xs-3").hasClass("three")) {
//            f = a + b
//            if (f == c) {
//                $(".col-xs-3.one").remove()
//                c = d
//                d = e
//                sum = sum - q
//                $(".col-xs-3.two").addClass("one")
//                $(".col-xs-3.two").removeClass("two")
//                $(".col-xs-3.three").addClass("two")
//                $(".col-xs-3.three").removeClass("three")
//                obj.style.backgroundColor = "#80c269"
//                jsonarray.arr_ground_site.splice(0, 1)
//            } else if (f == d) {
//                $(".col-xs-3.two").remove()
//                d = e
//                sum = sum - q
//                $(".col-xs-3.three").addClass("two")
//                $(".col-xs-3.three").removeClass("three")
//                obj.style.backgroundColor = "#80c269"
//                jsonarray.arr_ground_site.splice(1, 1)
//            } else if (f == e) {
//                $(".col-xs-3.three").remove();
//                sum = sum - q
//                obj.style.backgroundColor = "#80c269"
//                jsonarray.arr_ground_site.splice(2, 1)
//            } else {
//                sum = sum + q
//                $(".col-xs-3.three").after("<div class='col-xs-3 four box'>" + "<div class='col-xs-12 one'>" + a + "~" + h + "</div>" + "<div class='col-xs-12 two'>" + b + "号场" + "</div>" + "</div>");
//                obj.style.backgroundColor = "orangered"
//                var arr4 = {
//                    "id": Number(obj.id),
//                    "start_time": startTime,
//                    "end_time": lastTime
//                }
//                jsonarray.arr_ground_site.push(arr4)
//            }
//        } else {
//            if ($(".col-xs-3").hasClass("two")) {
//                e = a + b
//                if (e == c) {
//                    $(".col-xs-3.one").remove()
//                    sum = sum - q
//                    c = d
//                    d = e
//                    $(".col-xs-3.two").addClass("one")
//                    $(".col-xs-3.two").removeClass("two")
//                    obj.style.backgroundColor = "#80c269"
//                    jsonarray.arr_ground_site.splice(0, 1)
//                } else if (e == d) {
//                    $(".col-xs-3.two").remove()
//                    sum = sum - q
//                    obj.style.backgroundColor = "#80c269"
//                    jsonarray.arr_ground_site.splice(1, 1)
//                } else {
//                    sum = sum + q
//                    $(".col-xs-3.two").after("<div class='col-xs-3 three box'>" + "<div class='col-xs-12 one'>" + a + "~" + h + "</div>" + "<div class='col-xs-12 two'>" + b + "号场" + "</div>" + "</div>")
//                    var arr3 = {
//                        "id": Number(obj.id),
//                        "start_time": startTime,
//                        "end_time": lastTime
//                    }
//                    jsonarray.arr_ground_site.push(arr3)
//                    obj.style.backgroundColor = "orangered"
//                }
//            } else {
//                if ($(".col-xs-3").hasClass("one")) {
//                    d = a + b;
//                    if (c == d) {
//                        $(".col-xs-3.one").remove()
//                        sum = sum - q
//                        d = c
//                        d = 0
//                        obj.style.backgroundColor = "#80c269"
//                        jsonarray.arr_ground_site.splice(0, 1)
//                    } else {
//                        $(".col-xs-3.one").after("<div class='col-xs-3 two box'>" + "<div class='col-xs-12 one'>" + a + "~" + h + "</div>" + "<div class='col-xs-12 two'>" + b + "号场" + "</div>" + "</div>")
//                        sum = sum + q
//                        var arr2 = {
//                            "id": Number(obj.id),
//                            "start_time": startTime,
//                            "end_time": lastTime
//                        }
//                        jsonarray.arr_ground_site.push(arr2)
//                        obj.style.backgroundColor = "orangered"
//                    }
//                } else {
//                    document.getElementById("qiuchang").innerHTML = "<div class='col-xs-3 one box'>" + "<div class='col-xs-12 one'>" + a + "~" + h + "</div>" + "<div class='col-xs-12 two'>" + b + "号场" + "</div>" + "</div>"
//                    c = a + b;
//                    sum = sum + q
//                    var arr1 = {
//                        "id": Number(obj.id),
//                        "start_time": startTime,
//                        "end_time": lastTime
//                    }
//                    jsonarray.arr_ground_site.push(arr1)
//                    obj.style.backgroundColor = "orangered"
//                }
//            }
//        }
//    }
//    document.getElementById("dingdan").innerText = "¥" + sum + "提交订单"
//    if ($(".col-xs-3.box").length == 0) {
//        document.getElementById("qiuchang").innerHTML = "<div class='col-xs-3 col-xs-offset-2'><div id='yishou'></div><p>已售</p></div> <div class='col-xs-3'><div id='zaishou'></div><p>在售</p></div> <div class='col-xs-3'><div id='xuanzhong'></div><p>选中</p></div>"
//    }
//}
//$("#dingdan").on("touchend", function () {
//    var access_token = localStorage["access_token"]
//    var JSONzufu = JSON.stringify(jsonarray)
//    if (access_token == undefined) {
//        $(".modal-body")[0].innerText = "请先登录"
//        $("#one").modal("show")
//    } else {
//        if (jsonarray.arr_ground_site.length == 0) {
//            $(".modal-body")[0].innerText = "您还没选择场地"
//            $("#one").modal("show")
//        } else {
//            if (localStorage["status"] == 1) {
//                $(".modal-body")[0].innerText = "您还有未完成订单"
//                $("#one").modal("show")
//            } else {
//                $.ajax({
//                    type: "POST",
//                    url: "http://112.74.18.193/api_v2/place/grounds_order/format/json",
//                    dataType: "JSON",
//                    data: {
//                        access_token: access_token,
//                        arr_ground_site: JSONzufu
//                    },
//                    success: function (data) {
//                        if (data.errcode == 603) {
//                            $("#qiuchang")[0].innerHTML = "<div id='box3'><img src='img/%E6%9C%AA%E6%94%AF%E4%BB%98%E8%AE%A2%E5%8D%95%E6%8F%90%E7%A4%BA%E6%A1%86@2x.png' class='img-responsive'id='weizhifubox'><text id='weizhifu'>您有一条未完成订单！</text></div>"
//                        } else if (data.errcode == 200) {
//                            $(".modal-body")[0].innerText = "请重新登录"
//                            $("#one").modal("show")
//                        } else if (data.errcode != 0) {
//                            $(".modal-body")[0].innerText = "订单提交错误"
//                            $("#one").modal("show")
//                        } else {
//                            localStorage["orderId"] = data.data.orderId
//                            localStorage["groundsInfo"] = data.data.groundsInfo
//                            localStorage["totalPaidPrice"] = data.data.totalPaidPrice
//                            localStorage["type"] = data.data.type
//                            localStorage["status"] = data.data.status
//                            localStorage["addTime"] = data.data.addTime
//                            localStorage["title"] = data.data.ground.title
//                            localStorage["display_date"] = data.data.display_date
//                            localStorage["display_day"] = data.data.display_day
//                            window.location.href = "querendingdan.html"
//                        }
//                    }
//
//                })
//            }
//        }
//    }
//})
