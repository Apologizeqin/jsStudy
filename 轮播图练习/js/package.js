	// $(seclect)  选择器  获取页面中的元素   第二个添加一个页面加载事件
	// 首先判断首字符 #  . 
	// 去空trim(); substr  substring splice 截取方法 
	// 选择下面的元素
	// 判断传进来的是函数还是字符串  
	// instanceof 判断是否是某一个对象的  typeof 判断数据类型 
	// 对 for in的理解不够    方法运用不熟悉
	// offsetwidth  offsetheight 获取元素所在屏幕的宽度

	// function $(select){
	// 	let selector = select.trim();
	// 	let firstchar = selector.charAt(0);
	// 	if(firstchar=='#'){
	// 		return document.getElementById(selector.substr(1));
	// 	}
	// 	else if(firstchar == '.'){
	// 		return document.getElementsByClassName(selector.substr(1));
	// 	} 
	// 	else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selector)){   //   / /声明一个正则对象^开头$结尾 
	// 		return document.getElementsByTagName(selector);
	// 	}
	// }
		
	function $(select,ranger=document){
		if(typeof select == 'string'){
			// ranger = ranger == undefined? document:ranger;
			// ranger = ranger||document;
			let selector = select.trim();
			let firstchar = selector.charAt(0);
				if(firstchar=='#'){
					return document.getElementById(selector.substr(1));
				}
				else if(firstchar == '.'){
					return ranger.getElementsByClassName(selector.substr(1));
				} 
				// li span h1-h6  
				else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selector)){   
				//   / /声明一个正则对象^开头$结尾 表示以a到z的大小写开头，以一个字母和数字结束
					return ranger.getElementsByTagName(selector);
				}
				}
			else if(typeof select =='function'){
				window.onload = function(){
				select();  //调用自身函数
			}
		}

	}

     // html(box,'qiang');
     // element dom元素
	function html(element,content){
		if(arguments.length == 2){
			element.innerText=content;
		}else if(arguments.length == 1){
			return element.innerHTML;
		}
	}

	function css(element,obj){
		for(let i in obj){
			console.log(i);
			console.log(obj[i]);
			element.style[i]=obj[i];   
		}
	}


	function turnon(collection,event,fn){
		for(let i=0;i<collection.length;i++){
			collection[i][event] = fn;
		}
	}
	function turnoff(collection,event){
		for(let i=0;i<collection.length;i++){
			collection[i][event] = null;
		}
	}

	function animate1(element,obj,speed){
		for(i in obj){
			console.log(i);
			console.log(obj[i]);
			let start = parseInt(getComputedStyle(element,null)[i]);
			element.style[i]=`${start+speed}px`;

		}
	}

	function animate2(element,obj,speed){
		for(let i in obj){
			// console.log(i);
			// console.log(obj[i]);
			let start = parseInt(getComputedStyle(element,null)[i]);
			// console.log(start);
			 let t = setInterval(function(){
				if(start==obj[i]){
					clearInterval(t);
				}
				element.style[i]=`${start = start+speed}px`;
			
			}, 1000);
		}
	}