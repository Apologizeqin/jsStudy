/*
* @Author: Apologizeqin
* @Date:   2017-08-14 17:34:28
* @Last Modified by:   Apologizeqin
* @Last Modified time: 2017-08-15 10:34:17
*/
// now   (0,0)  next(width 0)
// 动画 now(-width 0) next (0,0)
// now = next  
'use strict';
$(function(){
	let banner = $('.banner')[0];
	let imgbox = $('.imgbox')[0];
	let lis = $('li',imgbox);
	let width = lis[0].offsetWidth;
	let btns = $('.btn')[0];
	let liss = $('li',btns);
	let btnL =$('.btn-left')[0];
	let btnR = $('.btn-right')[0];
	let flag = true;
	console.log(btnL);
	console.log(btnR);
	// console.log(liss);

	let now=0;
	let next=0;

	btnL.onclick = function(){
			if(flag){
			flag=false;
			move();
		}
	}

	btnR.onclick = function(){
			if(flag){
			flag=false;
			move1();
		}
	}


	banner.onmouseenter = function(){
		clearInterval(t);
	}
	banner.onmouseleave = function(){
		t =setInterval(move1, 3000);
	}

	for(let i=0;i<liss.length;i++){
		liss[i].onclick=function(){
			if(i==now){
				return;
			}
		if(i>now){
			lis[i].style.left = `${width}px`;  //右侧随时待命的图片 i相等于是next
			animate(lis[now],{left:-width});		//now和next都是全局变量
			liss[i].classList.add('hot');
			animate(lis[i],{left:0});
			liss[now].classList.remove('hot');   
			now = next = i;
		}
		if(i<now){
			lis[i].style.left = `${-width}px`;  //右侧随时待命的图片 i相等于是next
			animate(lis[now],{left:width});		//now和next都是全局变量
			liss[i].classList.add('hot');
			animate(lis[i],{left:0});
			liss[now].classList.remove('hot');   
			now = next = i;

		}							//这里赋值的原因
											   //是next总是比在now的左边
	}
}
	


	let t =setInterval(move1, 3000);
	function move(){
		next--;
		console.log(now);
		console.log(next);

		if(next == -1){
			next=lis.length-1;
		}
		lis[next].style.left = `${-width}px`;   //把下一张图片的位置放好
		animate(lis[now],{left:width});	  //动画开始 now下标为0；
		liss[now].classList.remove('hot');  
		animate(lis[next],{left:0},function(){   //next下标变化为1;
			flag=true;
		});
		// liss[next].classList.add('hot');
		now = next;    // 0 1    1 2     2 3    3 4   4 5 
	}

	
	function move1(){
		next++;
		console.log(now);
		console.log(next);

		if(next == lis.length){
			next=0;
		}
		lis[next].style.left = `${width}px`;   
		animate(lis[now],{left:-width});	  
		liss[now].classList.remove('hot');  
		animate(lis[next],{left:0},function(){ flag=true;});
		liss[next].classList.add('hot');
		now = next;  
	}

});
