window.onload = function(){
let qipan = document.querySelector('ul');
console.log(qipan);
	document.onclick = function(){
		for(let i=0;i<400;i++){
			// let lis = qipan.creatElement('li');
			// console.log(lis);
			qipan.innerHTML +=`<li></li>`;

		}
	}

	ul.onclick = function(e){   //e 指的是事件对象
		let ele = e.target;
		console.log(ele);
		ele.style.background 'red';	
	}
// console.log(qipan);
// 事件委托指的是仅仅指定一个事件处理程序，就可以管理某一类型的所有事件，
// 事件委托利用的是事件冒泡。
}
