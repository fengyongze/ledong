define(function () {
    return {
        success: function (data) {
            //            for (var i = 0; i < data.data.length; i++) {
            //                var div1 = document.createElement("div");
            //                div1.setAttribute("class", "box");
            //                $("#content")[0].appendChild(div1);
            //                $(".box")[i].id = data.data[i].groundId;
            //                $(".box")[i].innerHTML = data.data[i].title + "<span><img src='img/%E6%89%93%E5%BC%80@2x.png' class='img2'></span>";
            //            }
            var html = template("main", data);
            $("#content").html(html);
            $(".box").on("touchend", function () {
                sessionStorage["ground_id"] = $(this).attr("id");
                window.location.href = "tangmusi.html";
            });
        },
        fail: function () {
            window.location.href = "denglu.html";
        }
    }
});
