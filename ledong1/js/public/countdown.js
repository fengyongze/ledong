define(function () {
    return {
        countdown: function () {
            var count = 60;
            daojishi();

            function daojishi() {
                var box1 = $("#box1");
                if (count === 0) {
                    box1.removeClass("one");
                    box1.text("获取");
                    clearTimeout();
                } else {
                    box1.addClass("one");
                    box1.text("(" + count + ")");
                    count--;
                }
                setTimeout(function () {
                    daojishi();
                }, 1000);
            }
        }
    };
});
