这段时间做的项目其实并不少，下来我通过文档的形式展现一下

个人需求

​    首先为什么我要拿天猫和小米来作为模板练习呢，因为他们当中有很多的 经典布局，那他们来练习布局，能使我更好的理解什么是盒模型，使我们对标签的使用变得更加的熟练。并且只要涉及到商业网站，通过轮播图中的大图使一些商品变得更加显眼和炙手可热。当然还可以使页面的信息量大大的增加。

​	印象深刻的应该是在写小米下面的那四个轮播图，因为每次写的时候都会获取大量的元素，诸如此类，这是我刚开始写那四个轮播图的时候，因为写重复的代码，真的有点麻烦，就去尝试去封装，下面是那时候写的一个雏形，到后来讲到jquery的时候，哦，原来还有这东西，当老师讲到那个，如果写一个获取元素，你写了好几年。你自然而然就会想到封装起来。自己就会写一个这种东西出来。

```js
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
```

​		再然后，到了我们学习到懒加载和利用jquery把以前实现的效果都重新写一遍的时候，内心是崩溃的，为什么这么说呢，因为这时候我明白了一个道理，那就是，不写注释，随意编造一些词汇，让你找东西的时候就好像大海捞针一样，不是不想写，而是就好像你在看别人的代码一样，虽然jquery简化了获取 元素的步骤，可你总得知道操作谁把，这不，我又把这些轮播图拉出来，重新布局，重新写了一遍。

​		于是我就又把轮播图布局重新拉出来写了一遍，后期学习的过程中，我能清楚的认识到布局的重要性，我的标签要有利于seo搜索引擎，我要让标签完成他们该完成的事情。	

​		后来看到有那么几道面试题，比如说谈谈你对盒模型的理解，谈谈你对boxsize的理解 谈谈你对h5中一些新标签的理解。等等这些面试题考的也确实是你对标签的理解程度。

​        链接

蓝色情调小画板    表格的增删改查    打字游戏   弹幕效果  电话黄页   仿淘宝放大镜效果   运动类别的网站

张强天猫国际    张强小米商场   2017面试题联系.md     