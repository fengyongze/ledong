require.config({
    baseUrl: "js/wodeshoucang/modul",
    paths: {
        _AJAX: "/js/public/_AJAX",
        back: "/js/public/back",
        sun_fun: "sun_fun",
        demo: "demo"
    }
});
requirejs(["back"], function (back) {
    back.back();
});
requirejs(["_AJAX", "sun_fun", "demo"], function (_AJAX, fun, demo) {
    var access_token = localStorage["access_token"];
    if (access_token === undefined) {
        window.localStorage.href = "denglu.html"
    } else {
                _AJAX._AJAX("http://112.74.18.193/api/place/grounds_favourite/format/json", "get", "JSON", {
                    access_token: access_token
                }, fun.success, fun.fail);
    }
});
