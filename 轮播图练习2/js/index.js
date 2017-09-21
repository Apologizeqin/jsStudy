	$(document).ready(function(){
		let box = $('.box');
		let Lbtn = $('button')[1];
		let Rbtn = $('button')[0];
		let ul = $('ul')[0];
		let lis = ul.children[0];
		let c = ul.childElementCount;
		let childw = lis.offsetWidth + parseInt(window.getComputedStyle(lis,null).marginRight);
		let cw = c*childw;
		let num=0;
		// console.log(cw);
		ul.style.width = `${cw}px`;

		Rbtn.onclick = function(){
			if(num == 3){
				Rbtn.classList.add('button');
				return;
			}
			num++;
			Lbtn.classList.remove('button');
			ul.style.marginLeft = `${-1240*num}px`;

		}
		Lbtn.onclick = function(){
			if(num == 0){
				Lbtn.classList.add('button');
				return;
			}
			num--;
			Rbtn.classList.remove('button');
			ul.style.marginLeft=`${-1240*num}px`;
		}

	})
