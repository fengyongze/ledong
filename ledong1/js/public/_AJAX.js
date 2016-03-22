define(function () {
    return {
        _AJAX: function (url, type, dataType, data, fun, fail_fun) {
            $.ajax({
                url: url,
                type: type,
                dataType: dataType,
                data: data,
                success: function (data) {
                    if (fun) {
                        if (typeof (data.errcode) !== undefined) {
                            if (data.errcode === 0) {
                                fun(data);
                            } else {
                                console.log(data.errcode);
                                if (fail_fun) {
                                    fail_fun(data);
                                }
                            }
                        } else {
                            alert("请求错误，请稍后再试");
                        }
                    }
                },
                error: function () {
                    alert("网络请求失败，请稍后再试");
                }
            });
        }
    };
});
