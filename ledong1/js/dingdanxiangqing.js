$(document).ready(function(){
    $("#fanhui").on("touchend",function(){
        window.history.back(-1)
    })
    var a = sessionStorage["a"]
    var access_token = localStorage["access_token"]
    var page =sessionStorage["page"]
if(page==2){    
    $.ajax({
        type:"get",
        url:"http://112.74.18.193/api/pay/status/access_token/"+access_token+"/page/1/format/json",
        dataType:"JSON",
        success:function(data){
            $("#text3")[0].innerText=data.data[a].validateCode
            $("#changguan")[0].innerText=data.data[a].ground.title
            $("#riqi")[0].innerText=data.data[a].display_date+"(周"+data.data[a].display_day+")"
            $("#groundsInfo")[0].innerText=data.data[a].groundsInfo.replace(/,/g,"\r\n")
            $("#text5")[0].innerText="¥"+data.data[a].totalPrice
            $("#time")[0].innerText=data.data[a].addTime
            $("#orderid")[0].innerText=data.data[a].orderId
            var arr=new Array("","未支付","已支付","订单取消")
            $("#type")[0].innerText=arr[Number(data.data[a].status)]
            if(data.data[a].status=="1"){
                $("#box1").css("display","none")
            }else if(data.data[a].status=="2"){
                $("#box6").css("display","none")
            }else{
                $("#box1").css("display","none")
                $("#box6").css("display","none")
                $("#box7").css("display","none")
            }
        }
    })
}else{
    $("#changguan")[0].innerText=localStorage["title"]
    $("#groundsInfo")[0].innerText=localStorage["groundsInfo"].replace(/,/g,"\r\n")
    $("#riqi")[0].innerText=localStorage["date"]+"("+localStorage["xingqi"]+")"
    $("#time")[0].innerText=localStorage["addTime"]
    $("#orderid")[0].innerText=localStorage["orderId"]
    $("#text5")[0].innerText=localStorage["totalPaidPrice"]
    $("#box7").css("display","none")
    $("#box1").css("display","none")
    $("#box1").before("<text id='page1'>请在<text class='miao'></text>内完成，否则场地不予保留</text>")
    daojishi()
    function daojishi(){
        var shijian1 = localStorage["addTime"].replace(/-/,"/")
        var shijian2 = new Date(shijian1).getTime()+867*1000
        var shijian3 = shijian2 - new Date().getTime()
        if(shijian3>0){
        var time = parseFloat(shijian3)/1000
        time = parseInt(time / 60.0) + "分钟" + parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60) + "秒";
            }else{
                time="00分0秒"
                localStorage["status"]=3
            }   
        $(".miao")[0].innerHTML=time
        setTimeout(function(){
             daojishi()
         },1000)
    }
}
})