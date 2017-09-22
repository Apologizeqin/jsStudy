window.onload = function(){
    let canvas = document.querySelector('canvas');
    let xian = document.querySelector('.xian');
    let shi = xian.querySelectorAll('li');
    let shixian = shi[0].querySelector('.icon');
    let xuxian = shi[1].querySelector('.icon');
    let mask = document.querySelector('.mask');


    let drw = new drawing(canvas,mask);

    // 画实线
    shixian.onclick = function(){
        drw.draw('line');
    }

    // 画虚线
    xuxian.onclick = function(){
        drw.draw('xuline');
    }

    // 上一步
    let bi = document.querySelectorAll('.bi');
    let pre = bi[3].querySelectorAll('li')[1];
    pre.onclick = function(){
        drw.pre();
    }

    // 铅笔
    let qianbi = bi[0].querySelectorAll('li')[0];
    qianbi.onclick = function(){
        drw.qianbi();
    }

    // 画圆
    let huayuan = bi[0].querySelectorAll('li')[1];
    huayuan.onclick = function() {
        drw.draw('circle');
    }

    //清空***********************
    let clear = bi[3].querySelectorAll('li')[0];
    clear.onclick = function() {
        drw.clear();
    }

    //矩形****************************8
    let juxiang = bi[1].querySelectorAll('li')[0];
    juxiang.onclick = function(){
        drw.draw('rect');
    }

    // 五角星*****************************
    let wujiao = bi[1].querySelectorAll('li')[1];
    console.log(wujiao);
    wujiao.onclick = function(){
        drw.draw('polyJ');
    }

    //多边形*****************************
    let duo = bi[1].querySelectorAll('li')[2];
    console.log(duo);
    duo.onclick = function(){
        drw.draw('poly');
    }
    //橡皮********************************
    let era = bi[0].querySelectorAll('li')[2];
    let eraser = document.querySelector('.eraser');

    let w = parseInt(window.getComputedStyle(eraser,null).width);
    let h = parseInt(window.getComputedStyle(eraser,null).height);

    console.log(w);
    era.onclick = function(){
        drw.eraser(eraser,w,h);
    }

    //滚动栏
    let right = document.querySelectorAll('.right');
    let xiushi =document.querySelectorAll('.xiushi');
    let lunbo =document.querySelector('.lunbo');
    let width = right[0].offsetWidth;
    let now = 0;
    let next = 0;

    //鼠标移动上去的事件*********************************
    lunbo.onmouseenter = function(){
        clearInterval(t);
    }
    lunbo.onmouseleave = function(){
        t =setInterval(fn, 3000);
    }

    // 轮播************************************
    let t =setInterval(fn,3000);
    function fn(){
        next++;
        if(next == right.length){
            next=0;
        }
        right[next].style.left = `${width}px`;
        animate(right[now],{left:-width});
        xiushi[now].classList.remove('hot');
        animate(right[next],{left:0});
        xiushi[next].classList.add('hot');
        now = next;
    }

    // 按钮点击事件**************************************
    for(let i=0;i<xiushi.length;i++){
        xiushi[i].onclick=function(){
            if(i==now){
                return;
            }
            if(i>now){
                right[i].style.left = `${width}px`;  //右侧随时待命的图片 i相等于是next
                animate(right[now],{left:-width});		//now和next都是全局变量
                xiushi[i].classList.add('hot');
                animate(right[i],{left:0});
                xiushi[now].classList.remove('hot');
                now = next = i;
            }
            if(i<now){
                right[i].style.left = `${-width}px`;  //右侧随时待命的图片 i相等于是next
                animate(right[now],{left:width});		//now和next都是全局变量
                xiushi[i].classList.add('hot');
                animate(right[i],{left:0});
                xiushi[now].classList.remove('hot');
                now = next = i;

            }							//这里赋值的原因
            //是next总是比在now的左边
        }
    }

    // 保存记录*************************************
    let jilu = document.querySelector('.jilu');
    let lis = jilu.querySelectorAll('li');
    let save = lis[1].querySelector('a');
    console.log(lis);
    lis[1].onclick = function(){
        save.href = canvas.toDataURL('img/png');
        save.download = 'a.png';
    }

    //裁切
    let crop = shi[2].querySelector('.icon');
    let cropObj =document.querySelector('.crop');
    crop.onclick = function(){
        drw.crop(cropObj);
    }

    //换色
    let input = document.querySelectorAll('input');
    console.log(input[0]);
    input[0].onchange = function(){
        drw.strokeStyle = this.value;
    }
    input[1].onchange = function(){
        console.log(this.value);
        drw.fillStyle = this.value;
    }



}


