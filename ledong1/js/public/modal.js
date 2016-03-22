define(function () {
    return {
        modal: function (text) {
            $(".modal-body")[0].innerText = text;
            $("#one").modal("show");
        }
    };
});
