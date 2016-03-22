define(function () {
    return {
        onscroll: function () {
            var t = document.documentElement.scrollTop || document.body.scrollTop;
            if (t >= 200) {
                $(".navbar").addClass("one");
            } else {
                $(".navbar").removeClass("one");
            }
        }
    }
})
