/*
* @Author: Apologizeqin
* @Date:   2017-08-11 20:34:21
* @Last Modified by:   Apologizeqin
* @Last Modified time: 2017-08-14 17:00:15
*/

'use strict';
window.onload = function(){
	let banner = document.getElementsByClassName('banner')[0];
	let imgboxs = document.getElementsByClassName('imgbox')[0];
	let lio = imgboxs.getElementsByTagName('li');
	let btn = document.getElementsByClassName('btn')[0];
	let lit = btn.getElementsByTagName('li');
	let left = document.getElementsByClassName('btn-left')[0];
	let right = document.getElementsByClassName('btn-right')[0];
	
	let num=0;
	
	
   let t = setInterval(fn,3000);

   banner.onmouseenter = function(){
   		clearInterval(t);
   }
   banner.onmouseleave = function(){
   		t=setInterval(fn,3000);
   }

   left.onclick =fn1;
   right.onclick=fn;

   
   function fn(){
   		num++;
   		if(num == lio.length){
   			num = 0;
   		}
   		for(let i=0;i<lio.length;i++){
   			lio[i].style.display = 'none';
   			lit[i].classList.remove('hot');
   		}
   			lio[num].style.display = 'block';
   			lit[num].classList.add('hot');
   }
   function fn1(){
   		num--;
   		if(num == -1){
   			num = lio.length-1;
   		}
   		for(let i=0;i<lio.length;i++){
   			lio[i].style.display = 'none';
   			lit[i].classList.remove('hot');
   		}
   			lio[num].style.display = 'block';
   			lit[num].classList.add('hot');
   }


   
   for(let i=0;i<lit.length;i++){
   			lit[i].onclick = function(){
   				for(let j=0;j<lit.length;j++){
   					lit[j].classList.remove('hot');
   					lio[j].style.display = 'none';
   					 
   				}
   				lit[i].classList.add('hot');
   				lio[i].style.display = 'block';
   			}
   		}



}

