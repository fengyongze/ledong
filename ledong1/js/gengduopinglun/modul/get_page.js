define(function () {
    return {
        page: function (data) {
            var html = template("main", data);
            $("#thelist").append(html);
        }
    };
});
