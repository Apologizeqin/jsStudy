window.onload = function() {
    let imgboxs = document.getElementsByClassName('big');
    let dian = document.getElementsByClassName('dian')[0];
    let lis = dian.getElementsByTagName('li');
    let banner = document.getElementsByClassName('banner')[0];






    banner.onmouseenter=function () {
        clearInterval(t);
    }
    banner.onmouseleave=function () {
        t = setInterval(fn, 3000);
    }
    let num = 0;

    let t = setInterval(fn, 3000);



    function fn() {
        num++;
        if (num === imgboxs.length) {
            num = 0;
        }
        for (let i = 0; i < imgboxs.length; i++) {
            imgboxs[i].style.display = 'none';
            lis[i].classList.remove('hot');


        }
        imgboxs[num].style.display = 'block';
        lis[num].classList.add('hot');


    }

    for (let i = 0; i < lis.length; i++) {

        lis[i].onclick = function () {
            for (let j = 0; j < lis.length; j++) {
                lis[j].classList.remove('hot');
                imgboxs[j].style.display = 'none';

            }
            lis[i].classList.add('hot');
            imgboxs[i].style.display = 'block';
            // console.log(i);

        }
    }


    let aside = document.getElementsByTagName('aside')[0];
    let liss = aside.getElementsByTagName('li');
    // console.log(liss);
    let asis = document.getElementsByClassName('asi-right');
    // console.log(asis);

   // for(let i=0;i<liss.length;i++){
   //     liss[i].onmouseenter=function(){
   //         asis[i].style.display = 'block';
   //     }
   //
   //     liss[i].onmouseleave=function(){
   //         asis[i].style.display = 'none';
   //     }
   // }

   for(let i=0;i<liss.length;i++){
       liss[i].onmouseenter = (function(){
           return function(){
               asis[i].style.display = 'block';
           }
       })(i);

       liss[i].onmouseleave = (function(){
           return function(){
               asis[i].style.display = 'none';
           }
       })(i);
   }

    let flag = true;
    window.onscroll = function(){
        let topw = document.body.scrollTop;
        let toph = document.getElementsByClassName('top1')[0];

        // console.log(topw);
        if(topw>500){
            if(flag) {
                flag = false;
                animate(toph, {'top': 0})
            }
        }else{
            if(!flag){
                flag = true;
                animate(toph,{'top':-50});
            }
        }
    }

    let newarr = [];
    let sec = document.querySelectorAll('section');
    let daohang = document.getElementById('daohang');
    let lic = daohang.getElementsByTagName('li');
    let c=1;
    console.log(lic);
    console.log(daohang);
    for(let i=3;i<sec.length;i++){
        newarr.push(sec[i].offsetTop);
    }
    for(let i=1;i<lic.length;i++){

        lic[i].onclick = function(){

            animate(document.body,{scrollTop:newarr[i]});
            lic[c].classList.remove('color');
            lic[i].classList.add('color');
            c = i;
        }

    }







}

