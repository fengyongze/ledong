define(function () {
    return {
        yonghutop: function (data) {
            $("#username")[0].innerText = data.data[0].username;
            $("#touxiang")[0].src = "http://112.74.18.193/uploadimages/" + data.data[0].user_pic;
            if (data.data[0].user_pic === "") {
                $("#touxiang")[0].src = "img/添加会员卡@2x.png";
            } else {
                $("#touxiang")[0].src = "http://112.74.18.193/uploadimages/" + data.data[0].user_pic;
            }
        },
        fail_fun: function (data) {
            $("#box1").removeClass("one");
            $("#box2").addClass("one");
            $(".glyphicon").addClass("one");
        }
    };
});
