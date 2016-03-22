define(function () {
    return {
        groundsInfo: function (data) {
            $("#beijingtu")[0].src = "http://112.74.18.193/uploadimages/" + data.data.pic;
            $("#tupian")[0].src = "http://112.74.18.193/uploadimages/" + data.data.pic;
            $("#qiuchangname")[0].innerText = data.data.title;
            $("#jiage")[0].innerText = "价格：" + data.data.displayPrice + "元起"
            $(".col-xs-12.text7")[0].innerText = "Add:" + data.data.address;
            $(".col-xs-12.text6")[0].innerText = "Tel:" + data.data.telephone;
            $(".modal-body")[0].innerText = data.data.telephone;
            if (data.data.isRecommend == "0") {
                $(".tuijian").addClass("one");
            }
            var xingxing = data.data.star;
            switch (xingxing) {
                case "0":
                    $("#xingxing")[0].innerHTML = "<img src='img/星星状态2@2x.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing>";
                    break;
                case "1":
                    $("#xingxing")[0].innerHTML = "<img src='img/星星状态1.png'class='xingxing'><img src='img/星星状态2@2x.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing>";
                    break;
                case "2":
                    $("#xingxing")[0].innerHTML = "<img src='img/星星状态1.png'class='xingxing'><img src='img/星星状态1.png'class='xingxing'><img src='img/星星状态2@2x.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing>";
                    break;
                case "3":
                    $("#xingxing")[0].innerHTML = "<img src='img/星星状态1.png'class='xingxing'><img src='img/星星状态1.png' class=xingxing><img src='img/星星状态1.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing>";
                    break;
                case "4":
                    $("#xingxing")[0].innerHTML = "<img src='img/星星状态1.png' class=xingxing><img src='img/星星状态1.png' class=xingxing><img src='img/星星状态1.png' class=xingxing><img src='img/星星状态1.png' class=xingxing><img src='img/星星状态2@2x.png' class=xingxing> ";
                    break;
                case "5":
                    $("#xingxing")[0].innerHTML = "<img src='img/星星状态1.png' class=xingxing><img src='img/星星状态1.png' class=xingxing><img src='img/星星状态1.png' class=xingxing><img src='img/星星状态1.png' class=xingxing><img src='img/星星状态1.png' class=xingxing>";
                    break;
            }
        }
    }
})
