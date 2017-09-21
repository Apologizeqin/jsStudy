$(function(){
    calculateMaskWH();
    $('.left').on('mouseover',function(){
        $('.mask').css('display','block');
        $('.right').css('display','block');
    })
    $('.left').on('mouseout',function(){
        $('.mask').css('display','none');
        $('.right').css('display','none');
    })
    $('.left').on('mousemove',function(e){
        var left = e.pageX-$(this).offset().left-$('.mask').width()/2;
        var top = e.pageY-$(this).offset().top - $('.mask').height()/2;
        $('.mask').css({
            "left":left+'px',
            "top":top+'px'
        })
        var rate = $('.big').width()/$('.left').width();
        $('.big').css({
            "left":-rate *left +'px',
            "top":-rate * top + 'px'
        })
    })
})
function calculateMaskWH(){
    var width = $('.left').width()/$('.big').width()*$('.right').width();
    var height = $('.left').height()/$('.big').height()*$('.right').height();
    $('.mask').css({
        "width":width+'px',
        "height":height+'px'
    })
}