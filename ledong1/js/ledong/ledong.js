/**
 * Created by acer on 2015-12-18.
 */
require.config({
        baseUrl: "js/ledong/modul",
        paths: {
            _AJAX: "/js/public/_AJAX",
            carousel: "carousel",
            indexMain: "indexMain"
        }
    })
    //轮播图交互
requirejs(["_AJAX", "carousel"], function (_AJAX, carousel) {
    _AJAX._AJAX("http://112.74.18.193/api/news/recommend/format/json", "get", "JSON", {}, carousel.carousel);
    $(".carousel").carousel({
        interval: 5000
    });
});
requirejs(["indexMain", "_AJAX"], function (indexMain, _AJAX) {
    //    indexMain.indexMain();
    $.ajax({
        url: "http://api.map.baidu.com/geosearch/v3/nearby?ak=4S2qL0OWqOTLqMfCO8gfKGwy&geotable_id=123235&location=113.1386170000,23.01931100000&radius=10000/format/json",
        type: "get",
        dataType: "JSONP",
        success: indexMain.indexMain
    })

});
/*index页面的JS*/
