// 属性                                            产生字符表
// 	下落的范围										往下落
// 	下落的速度
//  	下落的个数
//  	得分
//  	生命是多少

//  	方法
// 	消除
// 	产生

	class Game{
		constructor(){
			// this.charSheets = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
			this.charSheets = [
			['Q','img/Q.jpg'],
			['W','img/W.jpg'],
			['E','img/E.jpg'],
			['R','img/R.jpg'],
			['T','img/T.jpg'],
			['Y','img/Y.jpg'],
			['U','img/U.jpg'],
			['I','img/I.jpg'],
			['O','img/O.jpg'],
			['P','img/P.jpg'],
			['A','img/A.jpg'],
			['S','img/S.jpg'],
			['D','img/D.jpg'],
			['F','img/F.jpg'],
			['G','img/G.jpg'],
			['H','img/H.jpg'],
			['J','img/J.jpg'],
			['K','img/K.jpg'],
			['L','img/L.jpg'],
			['Z','img/Z.jpg'],
			['X','img/X.jpg'],
			['C','img/C.jpg'],
			['V','img/V.jpg'],
			['B','img/B.jpg'],
			['N','img/N.jpg'],
			['M','img/M.jpg']];
			this.length = 5;
			this.speed = 10;
			this.newarr =[];
			this.score = document.querySelector('span');
			this.life = document.querySelector('i');
			this.level = 10;
			this.position = [];
		}
		start(){
				
				this.getchars(this.length);         //获取字符
				console.log(this.newarr);
				console.log(this.position);
				
				this.drop(); 
				
				this.key();  
			}
		getchars(length){
			for(let i=0;i<length;i++){
				this.getchar();
			}
		}
		getchar(){
				let num;
				let divs = document.createElement('div');
				let lefts;
				let tops = Math.random()* 200;
				do{
					lefts = Math.random()*(innerWidth - 400)+200;
				}
				while(this.checkposition(lefts));

				//去重复
				do{
					num = Math.floor(Math.random()*this.charSheets.length);
				}
				while(this.checkrepeat(num));


				

				divs.classList.add('char');
				document.body.appendChild(divs);
				divs.innerText = this.charSheets[num][0];
				divs.style.cssText=`
					top:${tops}px;
					left:${lefts}px;
					background-image:url("./${this.charSheets[num][1]}");
					background-size:cover;

				`;
				this.newarr.push(divs);
				this.position.push(lefts);
				// console.log(this.position);
				
		}
		checkrepeat(num){
			return this.newarr.some(value => value.innerText == this.charSheets[num][0]);
		}
		checkposition(lefts){
			return this.position.some(value => (Math.abs(value-lefts)<120))
		}
		drop(){
			this.t = setInterval(()=>{
				for(let j=0;j<this.newarr.length;j++){
					let tops = this.newarr[j].offsetTop;
					// let i = document.querySelector('i');
					// console.log(i);
					let speeds = `${tops+10}`
					this.newarr[j].style.top = `
					${speeds}px
					`
					if(speeds>=500){
						this.life.innerText--;
						document.body.removeChild(this.newarr[j]);
						this.newarr.splice(j,1);
						this.position.splice(j,1);
						
						this.getchar()
						// console.log(this.newarr);
						// console.log(this.position);
					}
					// if(this.newarr.length<this.length){
					// 	this.getchar()
					// }
				}
				
			},300)
		}
		key(){
			document.onkeydown = (e)=>{
				// let span = document.querySelector('span');
				let char = String.fromCharCode(e.keyCode);
				for(let i=0;i<this.newarr.length;i++){
					if(char == this.newarr[i].innerText){
						this.score.innerText++;
						if(this.score.innerText == this.level){
							this.next();
						}
						document.body.removeChild(this.newarr[i]);
						this.newarr.splice(i,1);
						this.position.splice(i,1);
						this.getchar();
					}
					// if(this.newarr.length<this.length){
					// 	this.getchar()
					// }
				}
			}
		}
		next(){
			clearInterval(this.t);
			for(let i=0;i<this.newarr.length;i++){
				// console.log(this.newarr);
				document.body.removeChild(this.newarr[i]);
			}

			// this.position = [];
			let t = confirm('确定进入下一关？');
			if(t==false){
				window.close();
			}
			this.length++;
			this.level =20;
			this.start();

		}
	}

	

