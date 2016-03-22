requirejs.config({
    baseUrl: "js/gengduopinglun/modul",
    paths: {
        _AJAX: "/js/public/_AJAX",
        back: "/js/public/back",
        get_page: "get_page",
        post_comment: "post_comment"
    }
});
requirejs(["back"], function (back) {
    back.back();
});
requirejs(["_AJAX", "get_page"], function (_AJAX, get_page) {
    var m = sessionStorage["ground_id"];
    var access_token = localStorage["access_token"];
    var generatedCount = 1;

    function one() {
        _AJAX._AJAX("http://112.74.18.193/api/place/comment/format/json", "get", "JSON", {
            groundId: m,
            page: generatedCount
        }, get_page.page);
    }
    //页面拉到底时generatedCount加1重新获取评论页面
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(document).height();
        var windowHeight = $(this).height();
        if (scrollTop + windowHeight === scrollHeight) {
            generatedCount++;
            one();
        }
    });
    one();
});
requirejs(["_AJAX", "post_comment"], function (_AJAX, comment) {
    var m = sessionStorage["ground_id"];
    var access_token = localStorage["access_token"];
    $("#text6").on("touchend", function () {
        _AJAX._AJAX("http://112.74.18.193/api/place/comment/format/json", "post", "JSON", {
            groundId: m,
            access_token: access_token,
            contents: $("#text5").val()
        }, comment.comment);
    });
});
