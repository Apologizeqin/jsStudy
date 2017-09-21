//提示当前字数  剩余字数 = 总数 - 输入字数   120   str.length
//最大字数   maxlength
//提交  shift  +  enter  e.keycode==17    e.keycode == 13
//提交  把当前文本保存，清空文字  提交
//保存到下面   创建一个元素节点，把上面的内容插入就好。
//    document.onkeydown = function(e){
//        e.preventDefault();
//        console.log(e.keyCode)
//    }
window.onload = function(){
    let text = document.querySelector('textarea');
    let max =  120;
    let num = document.querySelector('span');
    let con = document.querySelector('.content');
    console.log(con);
    console.log(num);


//     text.addEventListener('keyup',fn,false);
//     function fn(){
//         let str = text.value;
//         let len = str.length;
//         num.innerText = max - len;

//     }

//     text.addEventListener('keydown',function(e){
//         console.log(e.keyCode);
//         // e.preventDefault();
//         if( e.keyCode==16 && e.keyCode==13){
//             let lis =  document.createElement('li');
//             let val = text.value;
//             text.value = '';
//             lis.innerHTML = `
//             <img src="img/xingxing.gif" alt="">
//             <div class="item">
//             <h4>
//                 张山
//             </h4>
//             <p>${val}</p>
//             </div>
//             `
//             con.appendChild(lis);
//         }
//     },false);

//         let sum = document.querySelector('.submit');
//         console.dir(sum);
//     sum.addEventListener('click',function(e){
        
//         console.log(sum);
//         if( sum.innertext = `提交`){
//             let lis =  document.createElement('li');
//             let val = text.value;

//             text.value = '';
//             lis.innerHTML = `
//             <img src="img/xingxing.gif" alt="">
//             <div class="item">
//             <h4>
//                 张山
//             </h4>
//             <p>${val}</p>
//             </div>
//             `
//             con.appendChild(lis);
//         }
    
// },false)
// 
// text.addEventListener('keyup',fn,false);
    text.keyup = function(){
        let str = text.value;
        let len = str.length;
        num.innerText = max - len;

    }

    // text.addEventListener('keydown',function(e){
    //     console.log(e.keyCode);
        // e.preventDefault();
    text.onkeydown = function(e){
        console.log(e.keyCode);
        if( e.keyCode==13 && e.keyCode==16){
            // console.log(e);
            let lis =  document.createElement('li');
            let val = text.value;
            text.value = '';
            lis.innerHTML = `
            <img src="img/xingxing.gif" alt="">
            <div class="item">
            <h4>
                张山
            </h4>
            <p>${val}</p>
            </div>
            `
            con.appendChild(lis);
        }
    
    }

    let sum = document.querySelector('.submit');
    
    sum.onclick = function(){
        if( sum.innertext = `提交`){
            let lis =  document.createElement('li');
            let val = text.value;
            text.value = '';
            lis.innerHTML = `
            <img src="img/xingxing.gif" alt="">
            <div class="item">
            <h4>
                张山
            </h4>
            <p>${val}</p>
            </div>
            `
            con.appendChild(lis);
        }
    
    }


}