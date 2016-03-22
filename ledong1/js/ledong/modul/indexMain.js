define(function () {
    return {
        indexMain: function (data) {
            var html = template("main", data);
            $("#quyu").html(html);
            $(".row").on("touchend", function () {
                    var a = $(this).index()
                    a = a / 2
                    sessionStorage["ground_id"] = data.contents[a].ground_id
                    window.location.href = "tangmusi.html"
                })
                //            $.ajax({
                //                url: "http://api.map.baidu.com/geosearch/v3/nearby?ak=4S2qL0OWqOTLqMfCO8gfKGwy&geotable_id=123235&location=113.1386170000,23.01931100000&radius=10000/format/json",
                //                type: "get",
                //                dataType: "JSONP",
                //                success: function (data) {
                //                    for (var i = 0; i < data.contents.length; i++) {
                //                        var div1 = document.createElement("div");
                //                        var div2 = document.createElement("div");
                //                        var div3 = document.createElement("div");
                //                        var div4 = document.createElement("div");
                //                        var img1 = document.createElement("img");
                //                        var img2 = document.createElement("img");
                //                        var b = document.createElement("p");
                //                        var text1 = document.createElement("text");
                //                        var text2 = document.createElement("text");
                //                        var text3 = document.createElement("text");
                //                        var text4 = document.createElement("text");
                //                        var hr = document.createElement("hr");
                //                        div1.setAttribute("class", "row");
                //                        div2.setAttribute("class", "col-xs-4");
                //                        div3.setAttribute("class", "col-xs-5 middle");
                //                        div4.setAttribute("class", "col-xs-3 jiaqian");
                //                        img1.setAttribute("class", "pic");
                //                        img2.setAttribute("class", "tuijian");
                //                        b.setAttribute("class", "qiuguan");
                //                        text1.setAttribute("class", "text3 jvli");
                //                        text2.setAttribute("class", "text3 didian");
                //                        text3.setAttribute("class", "text4 shuzhi");
                //                        text4.setAttribute("class", "text5");
                //                        div1.appendChild(div2);
                //                        div1.appendChild(div3);
                //                        div1.appendChild(div4);
                //                        div2.appendChild(img1);
                //                        div2.appendChild(img2);
                //                        div3.appendChild(b);
                //                        div3.appendChild(text1);
                //                        div3.appendChild(text2);
                //                        div4.appendChild(text4);
                //                        div4.appendChild(text3);
                //                        $("#quyu")[0].appendChild(div1);
                //                        $("#quyu")[0].appendChild(hr);
                //                        $(".pic")[i].src = data.contents[i].pic.sml;
                //                        $(".qiuguan")[i].innerText = data.contents[i].title;
                //                        $(".jvli")[i].innerHTML = "<img src='img/距离图标@2x.png' class='img2'>" + data.contents[i].distance + "m";
                //                        $(".didian")[i].innerHTML = "<img src='img/地标@2x.png' class='img2'>" + data.contents[i].address;
                //                        $(".shuzhi")[i].innerText = data.contents[i].displayPrice;
                //                        $(".text5")[i].innerText = "元起";
                //                        if (data.contents[i].isRecommend == 1) {
                //                            $(".tuijian")[i].src = "img/推荐@2x.png"
                //                        } else {
                //                            $(".tuijian")[i].style.display = "none"
                //                        }
                //                    }
                //                    $(".row").on("touchend", function () {
                //                        var a = $(this).index()
                //                        a = a / 2
                //                        sessionStorage["ground_id"] = data.contents[a].ground_id
                //                        window.location.href = "tangmusi.html"
                //                    })
                //                }
                //            });
        }
    }
})
