define(function () {
    return {
        random: function () {
            var sum = "";
            var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
            for (var i = 0; i < 4; i++) {
                var j = Math.floor(Math.random() * 10)
                sum += arr[j]
            }
            return sum
        }
    }
})
