define(function () {
    return {
        allPay: function (data) {
            var html = template("dingdan", data);
            $("#thelist").append(html);
        }
    };
});
