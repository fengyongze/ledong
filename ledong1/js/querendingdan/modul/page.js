define(function () {
    return {
        page: function () {
            $("#title")[0].innerText = localStorage["title"]
            $("#groundsInfo")[0].innerText = localStorage["groundsInfo"].replace(/,/g, "\r\n")
            $("#text5")[0].innerHTML = "¥" + localStorage["totalPaidPrice"]
            $("#riqi")[0].innerText = localStorage["date"] + "(" + localStorage["xingqi"] + ")"
            $("#text12")[0].innerHTML = "去支付¥" + localStorage["totalPaidPrice"]
        }
    }
})
