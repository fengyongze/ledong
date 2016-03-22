define(["modal"], function (modal) {
    return {
        order: function (data) {
            localStorage["orderId"] = data.data.orderId;
            localStorage["groundsInfo"] = data.data.groundsInfo;
            localStorage["totalPaidPrice"] = data.data.totalPaidPrice;
            localStorage["type"] = data.data.type;
            localStorage["status"] = data.data.status;
            localStorage["addTime"] = data.data.addTime;
            localStorage["title"] = data.data.ground.title;
            localStorage["display_date"] = data.data.display_date;
            localStorage["display_day"] = data.data.display_day;
            window.location.href = "querendingdan.html";
        },
        fail: function () {
            modal.modal("订单提交错误");
        }
    };
});
