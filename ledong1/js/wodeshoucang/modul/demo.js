define(function () {
    return {

        demo: function (result) {
            var data = {
                title: [],
                groundID: []
            }
            for (var i = 0; i < result.data.length; i++) {
                data.title.push(result.data[i].title);
                data.groundID.push(result.data[i].ground_id);
            }
        }
    }
})
