// 首先想一下怎么实现这个弹幕
//1.点击enter 在screen-container里面插入一个div，并且随机化div的位置
//2.接下来就是然弹幕开始移动  通过控制left值（添加一个定时器）
//3.当弹幕出去左边的时候直接销毁掉

var timers = [];
var isShow = true;
$(".send").on("click",function(){
    var jqueryDom =createScreenbullet($("#screenBulletText").val());
    $("input").val("");
    addInterval(jqueryDom);
     
})
$("#screenBulletText").on("keydown",function(e){
    console.log(e.keyCode);
    if(e.keyCode == 13) {
        var jqueryDom = createScreenbullet($("#screenBulletText").val());
        $("input").val("");
        addInterval(jqueryDom);
    }
})
$(".clear").on("click",function(){
    if(isShow) {
        $(".bullet").css("opacity", 0);
        isShow = false;
    }else{
        $(".bullet").css("opacity",1);
        isShow = true;
        }
    })
//先实现一下弹幕生成

function createScreenbullet(text){
    var jqueryDom = $("<div class='bullet'>" + text + "</div>");
    var fontColor = "rgb("+Math.floor(Math.random()*256) +"," + Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
    var fontSize = Math.floor(Math.random()*24)+"px";
    var left = $(".screen-container").width() +"px";  //获取到的是屏幕宽度
    var top = Math.floor(Math.random()*400) + "px";
    top = parseInt(top)>352 ? "352px" : top;  //不让弹幕的位置显示不出来，所以设置一个最大值
    jqueryDom.css({
        "position":'absolute',
        "color":fontColor,
        "font-size":fontSize,
        "left":left,
        "top":top
    });
    $(".screen-container").append(jqueryDom);
    return jqueryDom;
}

//写一个定时任务，让自己的弹幕动起来
function addInterval(jqueryDom){
    var left = jqueryDom.offset().left - $(".screen-container").offset().left;
    //距离左屏幕的宽度
    var timer =setInterval(function(){
        left--;
        jqueryDom.css("left",left + "px");
        if(jqueryDom.offset().left+jqueryDom.width()<$(".screen-container").offset().left) {
            jqueryDom.remove();
            clearInterval(timer);
        }
    },10)
    timers.push(timer);
}