$("#xiugaimima").on("touchend",function(){
    window.location.href="xiugaimima.html"
})
$("#fanhui").on("touchend",function(){
    window.history.back(-1)
})
$("#loginout").on("touchend",function(){
    $.ajax({
        type:"POST",
        url:"http://112.74.18.193/api/user/loginout/format/json",
        dataType:"JSON",
        data:{access_token:localStorage["access_token"]},
        success:function(){
            $("#one").modal("show")
            $('#one').on('hidden.bs.modal', function () {
                window.location.href="yonghu.html"
            })
        }
        
    })
})