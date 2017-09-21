$($(document).ready(function(){
    let now = 0;
    let next = 0;
    let flag = true;
    let lis = $(".imgbox").children();
    let btns = $(".btn").children();
    let width = $(lis[0]).width();
    let t = setInterval(function(){
        move("L")
    },3000);
    //向左移动
    $(".banner").on("mouseenter",function(){
        clearInterval(t)
    })
    $(".banner").on("mouseleave",function(){
        t=setInterval(function(){              //这一块注意一下
            move("L");
        },3000)
    })
    function move(dir){
        if(dir = "L") {
            next++;
            if (next == lis.length) {
                next = 0;
            }
        }else if(dir = "R"){
            next--;
            if(next== -1){
                next = lis.length-1;
            }
        }
        $(lis[next]).css({"left":width+"px"});
        $(lis[next]).animate({"z-index":2,"left": 0},1000);
        $(btns).removeClass("hot");
        $(lis[now]).animate({"z-index":1,"left": -width + "px"},1000,function(){
            flag = true;
        });
        $(btns[next]).addClass("hot");
        now = next;
    }
    $(".btn-left").on("click",function(){
        if(flag) {
            alert(2);
            move("L");
            flag=false;
        }
    })
    $(".btn-right").on("click",function(){
        if(flag) {
            move("R");

            flag=false;
        }
    })
    $(btns).on("click",function(){
        let nu = this.innerHTML;    //这里的nu指的是当前
        if(nu == now){
            return;
        }
        if(nu>now){
            $(lis[nu]).css({"width":width+'px'})
            $(lis[now]).animate({"left":-width+'px'},1000)
            $(btns[nu]).addClass('hot');
            $(lis[nu]).animate({"left":0},1000)
            $(btns[now]).removeClass('hot');
            now = next = nu;
        }
        if(nu<now){
            $(lis[nu]).css({"width":-width+'px'})
            // console.log(-width);
            $(lis[now]).animate({"left":width+'px'},1000)
            // console.log(width);
            $(btns[nu]).addClass('hot');
            $(lis[nu]).animate({"left":0},1000)
            $(btns[now]).removeClass('hot');
            now = next = nu;
        }
    })
}));



// for(let i=0;i<liss.length;i++){
//     liss[i].onclick=function(){
//         if(i==now){
//             return;
//         }
//         if(i>now){
//             lis[i].style.left = `${width}px`;  //右侧随时待命的图片 i相等于是next
//             animate(lis[now],{left:-width});		//now和next都是全局变量
//             liss[i].classList.add('hot');
//             animate(lis[i],{left:0});
//             liss[now].classList.remove('hot');
//             now = next = i;
//         }
//         if(i<now){
//             lis[i].style.left = `${-width}px`;  //右侧随时待命的图片 i相等于是next
//             animate(lis[now],{left:width});		//now和next都是全局变量
//             liss[i].classList.add('hot');
//             animate(lis[i],{left:0});
//             liss[now].classList.remove('hot');
//             now = next = i;
//
//         }							//这里赋值的原因
//         //是next总是比在now的左边
//     }