require.config({
    baseUrl: "js/daijinjuan/modul",
    paths: {
        back: "/js/public/back",
        _AJAX: "/js/public/_AJAX",
        sun_fun: "sun_fun"
    }
});
requirejs(["back"], function (back) {
    back.back();
});
requirejs(["_AJAX", "sun_fun"], function (_AJAX, result) {
    var access_token = localStorage["access_token"]
    if (access_token === undefined) {
        window.location.href = "denglu.html";
    } else {
        _AJAX._AJAX("http://112.74.18.193/api_v2/pay/coupons/format/json", "get", "JSON", {
            access_token: access_token
        }, result.sun);
    }
});
//$("#fanhui").on("touchend", function () {
//    window.history.back(-1)
//})
//var access_token = localStorage["access_token"]//var quan = sessionStorage["daijinquan"]
//$(document).ready(function () {
//    if (access_token == undefined) {
//        window.location.href = "denglu.html"
//    } else {
//        if (quan == "2") {
//            $("#text2box").css("display", "none")
//            $("#anniubox").css("display", "none")
//            $.ajax({
//                type: "get",
//                url: "http://112.74.18.193/api_v2/pay/coupons/access_token/" + access_token,
//                dataType: "JSON",
//                success: function (juan) {
//                    if (juan.errcode == 0) {
//                        var j = 0
//                        for (var i = 0; i < juan.data.length; i++) {
//                            var time1 = juan.data[i].exp_time.replace(/-/, "/")
//                            var time2 = new Date(time1).getTime() - new Date().getTime()
//                            if (time2 >= 0) {
//                                var div1 = document.createElement("div")
//                                var div2 = document.createElement("div")
//                                var div3 = document.createElement("div")
//                                var div4 = document.createElement("div")
//                                var span1 = document.createElement("span")
//                                var img1 = document.createElement("img")
//                                var text1 = document.createElement("text")
//                                var text2 = document.createElement("text")
//                                var text3 = document.createElement("p")
//                                var text4 = document.createElement("p")
//                                div1.setAttribute("class", "daijinquanbox")
//                                div2.setAttribute("class", "row")
//                                div3.setAttribute("class", "col-xs-4")
//                                div4.setAttribute("class", "col-xs-8")
//                                img1.setAttribute("class", "img-responsive img")
//                                text3.setAttribute("class", "daijinquan")
//                                text4.setAttribute("class", "youxiaoqi")
//                                div1.appendChild(span1)
//                                span1.appendChild(img1)
//                                div1.appendChild(div2)
//                                div2.appendChild(div3)
//                                div2.appendChild(div4)
//                                div3.appendChild(text1)
//                                div3.appendChild(text2)
//                                div4.appendChild(text3)
//                                div4.appendChild(text4)
//                                $("#content")[0].appendChild(div1)
//                                $(".daijinquan")[j].innerHTML = "代金券"
//                                text1.setAttribute("class", "biaozhi1 renminbi")
//                                text2.setAttribute("class", "biaozhi2 jinqian")
//                                $(".biaozhi1")[j].innerHTML = "¥"
//                                $(".biaozhi2")[j].innerHTML = juan.data[i].coupons_amount.replace(".00", "")
//                                $(".img")[j].src = "img/代金券@3x.png"
//                                $(".youxiaoqi")[j].innerHTML = "有效期" + juan.data[i].exp_time.substr(0, 10)
//                                $(".daijinquanbox")[j].id = i
//                                j++
//                            }
//                        }
//                        $(".daijinquanbox").on("touchend", function () {
//                            var a = $(this).index()
//                            $(".img")[a].src = "img/代金券选中@2x.png"
//                            sessionStorage["coupons_id"] = $(this).attr("id")
//                            setTimeout(function () {
//                                window.history.back(-1)
//                            }, 300)
//                        })
//                    }
//                }
//            })
//        } else {
//            $.ajax({
//                type: "get",
//                url: "http://112.74.18.193/api_v2/pay/coupons/access_token/" + access_token,
//                dataType: "JSON",
//                success: function (data) {
//                    if (data.errcode == 0) {
//                        for (var i = 0; i < data.data.length; i++) {
//                            var div1 = document.createElement("div")
//                            var div2 = document.createElement("div")
//                            var div3 = document.createElement("div")
//                            var div4 = document.createElement("div")
//                            var span1 = document.createElement("span")
//                            var img1 = document.createElement("img")
//                            var text1 = document.createElement("text")
//                            var text2 = document.createElement("text")
//                            var text3 = document.createElement("p")
//                            var text4 = document.createElement("p")
//                            div1.setAttribute("class", "daijinquanbox")
//                            div2.setAttribute("class", "row")
//                            div3.setAttribute("class", "col-xs-4")
//                            div4.setAttribute("class", "col-xs-8")
//                            img1.setAttribute("class", "img-responsive img")
//                            text3.setAttribute("class", "daijinquan")
//                            text4.setAttribute("class", "youxiaoqi")
//                            div1.appendChild(span1)
//                            span1.appendChild(img1)
//                            div1.appendChild(div2)
//                            div2.appendChild(div3)
//                            div2.appendChild(div4)
//                            div3.appendChild(text1)
//                            div3.appendChild(text2)
//                            div4.appendChild(text3)
//                            div4.appendChild(text4)
//                            $("#content")[0].appendChild(div1)
//                            $(".daijinquan")[i].innerHTML = "代金券"
//                            var time1 = data.data[i].exp_time.replace(/-/, "/")
//                            var time2 = new Date(time1).getTime() - new Date().getTime()
//                            if (time2 < 0) {
//                                text1.setAttribute("class", "biaozhi1 guoqirenminbi")
//                                text2.setAttribute("class", "biaozhi2 guoqijinqian")
//                                $(".biaozhi1")[i].innerHTML = "¥"
//                                $(".biaozhi2")[i].innerHTML = data.data[i].coupons_amount.replace(".00", "")
//                                $(".img")[i].src = "img/代金券过期@3x.png"
//                                $(".youxiaoqi")[i].innerHTML = "有效期" + data.data[i].exp_time.substr(0, 10) + "(已过期)"
//                            } else {
//                                text1.setAttribute("class", "biaozhi1 renminbi")
//                                text2.setAttribute("class", "biaozhi2 jinqian")
//                                $(".biaozhi1")[i].innerHTML = "¥"
//                                $(".biaozhi2")[i].innerHTML = data.data[i].coupons_amount.replace(".00", "")
//                                $(".img")[i].src = "img/代金券@3x.png"
//                                $(".youxiaoqi")[i].innerHTML = "有效期" + data.data[i].exp_time.substr(0, 10)
//                            }
//                        }
//                    } else {
//                        window.location.href = "denglu.html"
//                    }
//                }
//            })
//}//}
//})
