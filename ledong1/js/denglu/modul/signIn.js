define(function () {
    return {
        signIn: function (data) {
            localStorage["id"] = data.data.id;
            localStorage["access_token"] = data.data.access_token;
            window.location.href = "yonghu.html";
        },
        signInfail: function (data) {
            $(".modal-body")[0].innerText = "账号密码错误";
            $("#one").modal("show");
        }
    };
});
