require.config({
    baseUrl: "js/tangmusi/modul",
    paths: {
        _AJAX: "/js/public/_AJAX",
        back: "/js/public/back",
        skip: "/js/public/skip",
        groundDate: "/js/public/groundDate",
        initfavourite: "initfavourite",
        clickFavourite: "clickFavourite",
        groundsInfo: "groundsInfo",
        comment: "comment",
        onscroll: "onscroll"
    }
});
requirejs(["back", "skip"], function (back, skip) {
    back.back();
    skip.skip("#pinglun", "gengduopinglun.html");
    $("#mytable th").on("click", function () {
        window.location.href = "tangmusi yuding.html";
        sessionStorage["index"] = $(this).index();
    });
});
requirejs(["groundDate"], function (date) {
    date.groundDate();
});
requirejs(["_AJAX", "initfavourite", "clickFavourite"], function (_AJAX, initfavourite, clickFavourite) {
    var access_token = localStorage["access_token"];
    var m = sessionStorage["ground_id"];
    var url = "http://112.74.18.193/api/place/grounds_favourite/format/json";
    _AJAX._AJAX(url, "get", "JSON", {
        access_token: access_token,
        groundId: m
    }, initfavourite.initfavourite);
    $("#xihuan1box").on("touchend", function () {
        if (access_token === undefined) {
            $("#modal-body")[0].innerText = "请先登录";
            $("#one").modal("show");
        } else {
            if ($("#xihuan1box span").hasClass("one")) {
                _AJAX._AJAX(url, "post", "JSON", {
                    access_token: access_token,
                    groundId: m
                }, clickFavourite.clickFavourite, clickFavourite.fail);
            } else {
                _AJAX._AJAX(url, "DELETE", "JSON", {
                    access_token: access_token,
                    groundId: m
                }, clickFavourite.delete, clickFavourite.fail);
            }
        }
    });
});
requirejs(["_AJAX", "groundsInfo"], function (_AJAX, groundsInfo) {
    var m = sessionStorage["ground_id"];
    _AJAX._AJAX("http://112.74.18.193/api_v2/place/grounds_info", "get", "JSON", {
        id: m
    }, groundsInfo.groundsInfo);
});
requirejs(["_AJAX", "comment"], function (_AJAX, comment) {
    var m = sessionStorage["ground_id"];
    _AJAX._AJAX("http://112.74.18.193/api/place/comment/groundId/format/json", "get", "JSON", {
        groundId: m,
        page: 1
    }, comment.comment);
});
requirejs(["onscroll"], function (onscroll) {
    window.onscroll = function () {
        onscroll.onscroll();
    }
});
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
//        $(".text2")[0].innerText = month + "-" + new Date().getDate()
//        $(".text2")[i].innerText = month + "-" + day
//    }
//    $("#fanhui").on("touchend", function () {
//        window.history.back(-1);
//    })
//    var access_token = localStorage["access_token"]
//    var m = sessionStorage["ground_id"]
//            $.ajax({
//                url: "http://112.74.18.193/api/place/grounds_favourite/access_token/" + access_token + "/format/json",
//                type: "get",
//                dataType: "JSON",
//                success: function (love) {
//                    if (love.errcode == 0) {
//                        for (var i = 0; i < love.data.length; i++) {
//                            if (m == love.data[i].groundId) {
//                                $("#xihuan1box")[0].innerHTML = "<span class='two'><img src='img/收藏按钮实心@2x.png'id=xihuan1></span>"
//                            }
//                        }
//                    }
//                }
//            })
//    $("#xihuan1box").on("touchend", function () {
//        if (access_token == undefined) {
//            $("#modal-body")[0].innerText = "请先登录"
//            $("#one").modal("show")
//        } else {
//            if ($("#xihuan1box span").hasClass("one")) {
//                $("#xihuan1box")[0].innerHTML = "<span class='two'><img src='img/收藏按钮实心@2x.png'id=xihuan1></span>"
//                $.ajax({
//                    url: "http://112.74.18.193/api/place/grounds_favourite/format/json",
//                    type: "post",
//                    data: {
//                        access_token: access_token,
//                        groundId: m
//                    },
//                    dataType: "JSON",
//                    success: function (shoucang) {
//                        if (shoucang.errcode !== 0) {
//                            console.log(shoucang.errcode);
//                            $("#modal-body")[0].innerText = "请先登录"
//                            $("#one").modal("show")
//                        } else {
//                            $("#modal-body")[0].innerText = "收藏成功"
//                            $("#one").modal("show")
//                        }
//                    }
//                })
//            } else if ($("#xihuan1box span").hasClass("two")) {
//                $("#xihuan1box")[0].innerHTML = "<span class='one'><img src='img/收藏按钮@2x.png'id=xihuan1></span>"
//                $.ajax({
//                    url: "http://112.74.18.193/api/place/grounds_favourite/format/json",
//                    type: "DELETE",
//                    data: {
//                        access_token: access_token,
//                        groundId: m
//                    },
//                    dataType: "JSON",
//                    success: function (data) {
//                        if (data.errcode !== 0) {
//                            console.log(data.errcode);
//                        } else {
//                            $("#modal-body")[0].innerText = "取消成功"
//                            $("#one").modal("show")
//                        }
//
//                    }
//                })
//            }
//        }
//    })
//    $.ajax({
//        url: "http://112.74.18.193/api_v2/place/grounds_info/id/" + m + "/format/json",
//        type: "get",
//        dataType: "JSON",
//        success: function (data) {
//            $("#beijingtu")[0].src = "http://112.74.18.193/uploadimages/" + data.data.pic;
//            $("#tupian")[0].src = "http://112.74.18.193/uploadimages/" + data.data.pic;
//            $("#qiuchangname")[0].innerText = data.data.title;
//            $("#jiage")[0].innerText = "价格：" + data.data.displayPrice + "元起"
//            $(".col-xs-12.text7")[0].innerText = "Add:" + data.data.address;
//            $(".col-xs-12.text6")[0].innerText = "Tel:" + data.data.telephone;
//            $(".modal-body")[0].innerText = data.data.telephone;
//            if (data.data.isRecommend == "0") {
//                $(".tuijian").css("display", "none")
//            }
//            var xingxing = data.data.star;
//            switch (xingxing) {
//                case "0":
//                    $("#xingxing")[0].innerHTML = "<img src='img/星星状态2@2x.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing>";
//                    break;
//                case "1":
//                    $("#xingxing")[0].innerHTML = "<img src='img/星星状态1.png'class='xingxing'><img src='img/星星状态2@2x.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing>";
//                    break;
//                case "2":
//                    $("#xingxing")[0].innerHTML = "<img src='img/星星状态1.png'class='xingxing'><img src='img/星星状态1.png'class='xingxing'><img src='img/星星状态2@2x.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing>";
//                    break;
//                case "3":
//                    $("#xingxing")[0].innerHTML = "<img src='img/星星状态1.png'class='xingxing'><img src='img/星星状态1.png' class=xingxing><img src='img/星星状态1.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing>";
//                    break;
//                case "4":
//                    $("#xingxing")[0].innerHTML = "<img src='img/星星状态1.png' class=xingxing><img src='img/星星状态1.png' class=xingxing><img src='img/星星状态1.png' class=xingxing><img src='img/星星状态1.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing> ";
//                    break;
//                case "5":
//                    $("#xingxing")[0].innerHTML = "<img src='img/星星状态1.png' class=xingxing><img src='img/星星状态1.png' class=xingxing><img src='img/星星状态1.png' class=xingxing><img src='img/星星状态1.png' class=xingxing><img src='img/星星状态1.png' class=xingxing>";
//                    break;
//            }
//        }
//    })
//    $.ajax({
//        url: "http://112.74.18.193/api/place/comment/groundId/" + m + "/page/1/format/json",
//        type: "get",
//        dataType: "JSON",
//        success: function (comment) {
//    $("#touxiang")[0].src = "http://112.74.18.193/uploadimages/" + comment.data[0].user_pic;
//    $(".text11")[0].innerHTML = comment.data[0].contents
//    $(".text12")[0].innerText = comment.data[0].addTime
//    $(".text13")[0].innerText = "更多评论(" + comment.data.length + ")"
//}
//    })
//    $("#pinglun").on("touchend", function () {
//        window.location.href = "gengduopinglun.html"
//    })
//    $("#mytable th").on("touchend", function () {
//        window.location.href = "tangmusi yuding.html"
//        sessionStorage["index"] = $(this).index()
//    })
//})
//window.onscroll = function () {
//    var t = document.documentElement.scrollTop || document.body.scrollTop;
//    if (t >= 200) {
//        $(".navbar").css("background-color", "#ff4304")
//    } else {
//        $(".navbar").css("background-color", "transparent")
//    }
//}
