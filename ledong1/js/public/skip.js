define(function () {
    return {
        skip: (function (dom, href) {
            $(dom).on("touchend", function () {
                window.location.href = href;
            });
        })
    };
});
