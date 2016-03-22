define(function () {
    return {
        carousel: function (data) {
            var html = template("carousel", data);
            $(".carousel-inner").html(html);
            $(".item")[0].setAttribute("class", "item active")
        }
    }
});
