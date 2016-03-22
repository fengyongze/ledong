define(function () {
    return {
        comment: function (data) {
            $("#touxiang")[0].src = "http://112.74.18.193/uploadimages/" + data.data[0].user_pic;
            $(".text11")[0].innerHTML = data.data[0].contents
            $(".text12")[0].innerText = data.data[0].addTime
            $(".text13")[0].innerText = "更多评论(" + data.data.length + ")"
        }
    }
})
