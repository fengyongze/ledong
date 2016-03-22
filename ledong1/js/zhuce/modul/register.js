define(function () {
    return {
        register: function (data) {
            $(".modal-body")[0].innerText = "恭喜您，注册成功";
            $("#one").modal("show");
            $('#one').on('hidden.bs.modal', function () {
                window.location.href = "denglu.html";
            });
        }
    };
});
