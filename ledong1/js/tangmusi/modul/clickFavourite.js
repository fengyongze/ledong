define(function () {
    return {
        clickFavourite: function (data) {
            $("#xihuan1box")[0].innerHTML = "<span class='two'><img src='img/收藏按钮实心@2x.png'id=xihuan1></span>";
            $("#modal-body")[0].innerText = "收藏成功";
            $("#one").modal("show");
        },
        fail: function (data) {
            $("#modal-body")[0].innerText = "请重试";
            $("#one").modal("show");
        },
        delete: function (data) {
            $("#xihuan1box")[0].innerHTML = "<span class='one'><img src='img/收藏按钮@2x.png'id=xihuan1></span>";
            $("#modal-body")[0].innerText = "取消成功";
            $("#one").modal("show");
        }
    };
});
