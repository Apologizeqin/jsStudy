/*
* @Author: Apologizeqin
* @Date:   2017-08-10 16:32:55
* @Last Modified by:   Apologizeqin
* @Last Modified time: 2017-08-13 18:07:23
*/
//也可以提前写好none 和 block;   轮播图 干掉所有在添加在js里面   利用一个num赋值给i来实现    
//让当前窗口中的图片小时掉，然后让第二张显示。
window.onload = function(){
	let aside = document.getElementsByTagName('aside')[0];
	let lis = aside.getElementsByTagName('li');
	let buy = aside.getElementsByClassName('buy');

	let item = document.getElementsByClassName('item');
	// for(let i=0;i<lis.length;i++){
		   // getElementsByClassName('item')[0];
	// 		item.style.display = 'block';
	// 		}
	// 		lis[i].onmouseleave = function(){
	// 		let item =this.getElementsByClassName('item')[0];
	// 		item.style.display = 'none';
	// 		}

	// }

	// let nav = getElementsByTagName('nav');
	


	for(let i=0;i<buy.length;i++){
		buy[i].onmouseenter = (function(){
				return function(){
				item[i].style.height = 'block';
				// console.log(i);
			}
		})(i);
	}

	for(let i=0;i<buy.length;i++){
		buy[i].onmouseleave = (function(){
				return function(){
				item[i].style.display = 'none';
				// console.log(i);
			}
		})(i);
	}



	let banner = document.getElementsByClassName('banner');
	let kuai = document.getElementsByClassName('kuai');
	let kuai1 = document.getElementsByClassName('kuai1');
	let you = document.getElementsByClassName('you');
	let btn = document.getElementById('btn');
	let liss = btn.getElementsByTagName('li');
	// console.log(btn);
	
	let t =setInterval(fn, 1000);
	let num = 0;

	kuai[0].onclick = fn; 
	kuai1[0].onclick=fn1;

	//自动轮播时间定时器
	function fn(){
		num++;
		if(num == liss.length){
			num=0;
		}
		
		for(let i=0;i<you.length;i++){
		you[i].style.display = 'none';
		liss[i].classList.remove('hot');
		}
		
		you[num].style.display = 'block';
		liss[num].classList.add('hot');
		
	}

		function fn1(){
		num--;
		if(num == -1){
		num=you.length-1;
		}
		

		for(let i=0;i<you.length;i++){
			you[i].style.display = 'none';
			liss[i].classList.remove('hot');
		}
		
		you[num].style.display = 'block';
		liss[num].classList.add('hot');
		
	}

		banner[0].onmouseenter = function(){
			clearInterval(t);
		}
		banner[0].onmouseleave = function(){
			t=setInterval(fn,1000);
		}

	
			//按钮点击事件
			for(let i=0;i<liss.length;i++){
				liss[i].onclick = function(){
					for(let j=0;j<liss.length;j++){
						you[j].style.display = 'none';
						liss[j].classList.remove('hot');
					}
						you[i].style.display = 'block';
						liss[i].classList.add('hot');
				}
			}





			let nave = document.getElementsByClassName('nave')[0];
			let lig = nave.getElementsByTagName('li');
			let shouji = document.getElementsByClassName('shouji');
			// console.log(shouji);

			for(let i=0;i<lig.length;i++){
				// console.log(i);
				lig[i].onmouseenter = function(){
					for(let j=0;j<lig.length;j++){
						shouji[j].style.display= 'none';
					}
					shouji[i].style.display= 'block';
				}
			}
			for(let i=0;i<lig.length;i++){
				lig[i].onmouseleave = function(){
					for(let j=0;j<lig.length;j++){
						shouji[j].style.display='none';
					}
					// shouji[i].style.display = 'none';
				}
			}



			
			// let btne = document.getElementsByClassName('btne');

			let book = document.getElementsByClassName('book-iner')[0];
			let lisss1 = book.getElementsByTagName('li')[0];
			let booko1 =lisss1.getElementsByClassName('book-one');
			let xiaoyu =document.getElementsByClassName('xiaoyu');
			let dayu = document.getElementsByClassName('dayu');
			// console.log(dayu);
			// console.log(booko);

			let iner1 =document.getElementsByClassName('iner')[0];
			let lige1 = iner1.getElementsByClassName('btne');
			// console.log(lige);
			//iner  第一个按钮总体    lige第一个按钮总体中的每一个按钮
			//lisss 第一个li   booko第一个li中的每一块

			let lisss2 = book.getElementsByTagName('li')[1];
			let booko2 =lisss2.getElementsByClassName('book-one');
			// console.log(booko);

			let iner2 =document.getElementsByClassName('iner')[1];
			let lige2 = iner2.getElementsByClassName('btne');
			//第二个
		
			let lisss3 = book.getElementsByTagName('li')[2];
			let booko3 =lisss3.getElementsByClassName('book-one');
			// console.log(booko);

			let iner3 =document.getElementsByClassName('iner')[2];
			let lige3 = iner3.getElementsByClassName('btne');
			//第三个
			let lisss4 = book.getElementsByTagName('li')[3];
			let booko4 =lisss4.getElementsByClassName('book-one');
			// console.log(booko);

			let iner4 =document.getElementsByClassName('iner')[3];
			let lige4 = iner4.getElementsByClassName('btne');



			dianji(lige1,booko1);
			dianji(lige2,booko2);
			dianji(lige3,booko3);
			dianji(lige4,booko4);
			function dianji(lige,booko){
			for(let i=0;i<lige.length;i++){
				lige[i].onclick = function(){
				for(let j=0;j<booko.length;j++){
					booko[j].style.display='none';
					lige[j].classList.remove('btnf');
					}
				    booko[i].style.display = 'block';
				    lige[i].classList.add('btnf');

				}
			}

		}
		
		let num1 = 0;
		dianji1(booko1,lige1,0);
		dianji1(booko2,lige2,1);
		dianji1(booko3,lige3,2);
		dianji1(booko4,lige4,3);
		
		

		function dianji1(booko,lige,j){
			xiaoyu[j].onclick = function(){
				num1++;
				if(num1 === booko.length){
					num1 = 0;
				}
				
				for(let i=0;i<booko.length;i++){
					booko[i].style.display = 'none';
					lige[i].classList.remove('btnf');

				}
				booko[num1].style.display = 'block';
				lige[num1].classList.add('btnf');
				// console.log(num1);

			}

			dayu[j].onclick = function(){
				num1--;
				if(num1 === -1){
					num1 = booko.length-1;
				}
				
				for(let i=0;i<booko.length;i++){
					booko[i].style.display = 'none';
					lige[i].classList.remove('btnf');

				}
				booko[num1].style.display = 'block';
				lige[num1].classList.add('btnf');
				// console.log(num1);

			}
	}


}