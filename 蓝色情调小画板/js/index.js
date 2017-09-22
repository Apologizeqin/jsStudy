class drawing {
    constructor(canvas,masks) {

        // 创建属性
        this.canvas = canvas;
        this.cxt = canvas.getContext('2d');
        this.mask = masks;

        // 记录历史的数组
        this.history = [];
        //画布的宽高
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        //线宽 样式填充
        this.style = 'stroke';
        this.lineWidth = 1;
        this.fillStyle = '#000';
        this.strokeStyle = '#000';
        this.lineCap = 'butt';    //忘了什么意思

        // 角 边
        this.polyEdge = 5;
        this.polyAngle = 5;

        this.temp = null;
    }

    // 样式************************************8
    init(){
        this.cxt.fillStyle = this.fillStyle;
        this.cxt.strokestyle = this.strokeStyle;
        this.cxt.lineWidth = this.lineWidth;
        this.cxt.lineCap = this.lineCap;
    }
    //stroke  fill******************8
    fill(){
        this.cxt.fillStyle=this.fillStyle;
    }
    stroke(){
        this.cxt.strokeStyle=this.strokeStyle;
    }
    // 实线*************************************************************
    line(ox, oy, cx, cy) {
        this.cxt.beginPath();           //放在这里只让他开始一次。
        this.cxt.moveTo(ox, oy);
        this.cxt.lineTo(cx, cy);
        this.cxt.setLineDash([0, 0]);
        this.cxt.lineWidth = 1;
        this.cxt[this.style]();
    }

    // 虚线************************************************8
    xuline(ox, oy, cx, cy) {
        this.cxt.beginPath();           //放在这里只让他开始一次。
        this.cxt.moveTo(ox, oy);
        this.cxt.lineTo(cx, cy);
        this.cxt.setLineDash([10, 20]);    //设置一条虚线，里面是一个数组，线段长度，和线段之间的间隔
        this.cxt.lineWidth = 10;
        this.cxt.lineCap = 'round';      //设置线的圆形
        this.cxt[this.style]();
    }

    // 铅笔************************************************************
    qianbi() {
        this.mask.onmousedown = (e) => {
            let ox = e.offsetX
            let oy = e.offsetY;
            this.cxt.beginPath();           //放在这里只让他开始一次。
            this.cxt.moveTo(ox, oy);
            this.mask.onmousemove = (e) => {
                let cx = e.offsetX;
                let cy = e.offsetY;
                if (this.history.length > 0) {
                    this.cxt.putImageData(this.history[this.history.length - 1], 0, 0);           //放的图像,以及后面的位置
                }
                this.cxt.lineTo(cx, cy);
                this.cxt.setLineDash([0, 0]);    //设置一条虚线，里面是一个数组，线段长度，和线段之间的间隔
                this.fill();
                this.stroke();
                this.cxt.lineWidth = 1;
                this.cxt.lineCap = 'round';      //设置线的圆形
                this.cxt[this.style]();
            }
            this.mask.onmouseup = () => {
                this.history.push(this.cxt.getImageData(0, 0, this.width, this.height));
                this.mask.onmousemove = null;
                this.mask.onmouseup = null;
            }
        }
    }

    // 多变形状*****************************
    poly(ox, oy, cx, cy) {

        let r = Math.sqrt(Math.pow((ox - cx), 2) + Math.pow((oy - cy), 2));
        let rad = 360 / this.polyEdge / 180 * Math.PI;

        this.cxt.beginPath();
        this.cxt.moveTo(ox + r, oy);
        for (let i = 1; i < this.polyEdge; i++) {
            this.cxt.lineTo(ox + r * Math.cos(rad * i), oy + r * Math.sin(rad * i));
        }
        this.cxt.closePath();
        this.cxt[this.style]();
        this.cxt.fill();

    }

    // 多角形****************************************
    polyJ(ox, oy, cx, cy) {

        let r = Math.sqrt(Math.pow((ox - cx), 2) + Math.pow((oy - cy), 2));
        let r1 = r / 2;
        let rad = 360 / (this.polyAngle * 2) / 180 * Math.PI;

        this.cxt.beginPath();
        this.cxt.moveTo(ox + r, oy);
        for (let i = 1; i < this.polyAngle * 2; i++) {
            if (i % 2) {
                this.cxt.lineTo(ox + r1 * Math.cos(rad * i), oy + r1 * Math.sin(rad * i));
            } else {
                this.cxt.lineTo(ox + r * Math.cos(rad * i), oy + r * Math.sin(rad * i));
            }

        }
        this.cxt.closePath();
        // this.cxt[this.style]();
        this.cxt.fill();
    }

    // 矩形******************8
    rect(ox, oy, cx, cy) {
        this.cxt.beginPath();
        this.cxt.rect(ox, oy, (cx - ox), (cy - oy));
        this.cxt.closePath();
        // this.cxt[this.style]();
        this.cxt.fill();
    }

    //返回上一步 ***************************
    pre(cxt) {
        console.log(this.history);
        if (this.history.length > 0) {
            let qingkong = this.history.pop();
            this.cxt.putImageData(qingkong, 0, 0);
        } else {
            this.history = [];
            this.cxt.clearRect(0, 0, this.width, this.height);
        }
    }

    // 清空*************************************8
    clear(cxt) {
        this.history = [];
        this.cxt.clearRect(0, 0, this.width, this.height);

    }

    //画圆 *****************************************************8
    circle(ox,oy,cx,cy) {

                let r = Math.sqrt(Math.pow(cx - ox, 2) + Math.pow(cy - oy, 2));

                // n++;
                let end = Math.PI * 2;
                this.cxt.beginPath();
                this.cxt.arc(ox, oy, r, -Math.PI / 2, end - Math.PI / 2, false);
                this.cxt[this.style]();

            }

    // 函数封装*****************************
    draw(type) {
        this.mask.onmousedown = (e) => {
            let ox = e.offsetX;
            let oy = e.offsetY;
            this.mask.onmousemove = (e) => {
                let cx = e.offsetX;
                let cy = e.offsetY;
                this.cxt.clearRect(0, 0, this.width, this. height);
                if (this.history.length > 0) {
                    this.cxt.putImageData(this.history[this.history.length - 1], 0, 0);
                }
                this.cxt.lineWidth = 1;
                // this.fill();
                // this.stroke();
                this.cxt.strokeStyle = this.strokeStyle;
                this.cxt.fillStyle = this.fillStyle;
                this.cxt.setLineDash([]);  //虚线
                this[type](ox,oy,cx,cy);
                this.mask.onmouseup = () => {
                    this.history.push(this.cxt.getImageData(0, 0, this.width, this.height));
                    this.mask.onmousemove = null;
                    this.mask.onmouseup = null;
                }
            }
        }
    }


    //橡皮***************************************
    eraser(obj, w, h) {
        let that = this;
        this.mask.onmousedown = (e)=> {
            obj.style.display='block';
            that.mask.onmousemove =  (e)=> {
                let ox = e.offsetX;
                let oy = e.offsetY;
                let lefts = 440 + ox - w /2;
                let tops = 20 + oy - h /2;
                // if (lefts == 0) {
                //     lefts = 0;
                // } else if (lefts >= this.width - w) {
                //     lefts = this.width - w;
                // }
                //
                // if (tops == 0) {
                //     tops = 0;
                // } else if (tops >= this.height - h) {
                //     tops = this.height - h;
                // }

                obj.style.left = `${lefts}px`;
                obj.style.top = `${tops}px`;
                // ox = ox ;
                that.cxt.clearRect(ox, oy, w, h);

                that.mask.onmouseup =  function () {
                    console.log(1);
                    that.history.push(that.cxt.getImageData(0,0,that.width,that.height));
                    that.mask.onmousemove = null;
                    that.mask.onmouseup = null;
                    obj.style.display = 'none';
                }
            }

        }
    }

    //裁切 ****************************************************


    crop(cropobj) {
        this.mask.onmousedown = (e) => {
            let ox = e.offsetX;
            let oy = e.offsetY;
            let minX,minY,w,h;
            this.mask.onmousemove = (e) => {
                let cx = e.offsetX;
                let cy =  e.offsetY;
                w = Math.abs(cx - ox);
                h = Math.abs(cy - oy);
                minX = cx>ox?ox:cx;
                minY = cy>oy?oy:cy;
                cropobj.style.cssText = `
                    display:block;
                    left:${400+minX}px;
                    top:${minY}px;
                    width:${w}px;
                    height:${h}px;
                `;

                this.mask.onmouseup=()=>{
                    this.temp = this.cxt.getImageData(minX,minY,w,h);
                    this.cxt.clearRect(minX,minY,w,h);
                    // this.history.push(this.cxt.getImageData(0,0,this.width,this.height));
                    this.cxt.putImageData(this.temp,minX,minY);
                    this.mask.onmousemove = null;
                    this.mask.onmouseup = null;
                    this.drag(400+minX,400+minY,w,h,cropobj);
                }
            }
        }
    }


    drag(minX,minY,w,h,clip){
        this.clip.onmousemove = function(e){
            //移动的位置
            let ox = e.offsetX,oy = e.offsetY;
            if (ox>minX&&ox<minX+w&&oy>minY&&oy<minY+h) {
                this.clip.style.cursor='move';
            } else {
                this.clip.style.cursor='default';
            }
        }.bind(this);
        this.clip.onmousedown=function(e){
            let ox = e.offsetX,oy = e.offsetY;
            this.clip.onmousemove = (e)=>{
                let cx = e.offsetX,cy = e.offsetY;

                let lefts=cx-ox+minX,tops=cy-oy+minY;
                clip.style.left=`${lefts}px`;
                clip.style.top=`${tops}px`;
                //设置边界
                if (lefts<=0) {
                    lefts=0;
                }
                if (lefts>=this.width+w) {
                    lefts=this.height+w;
                }
                if (tops<=0) {
                    tops=0;
                }
                if (tops>=this.height+h) {
                    tops=this.height+h;
                }
                if (this.history.length>0) {
                    this.cxt.putImageData(this.history[that.history.length-1],0,0)
                }
                this.cxt.putImageData(this.temp,lefts,tops);
            }
            this.clip.onmouseup=()=>{

                this.history.push(this.ctx.getImageData(0,0,that.cw,that.ch));
                this.temp=null;

                this.clip.onmousemove=null;
                this.clip.onmouseup=null;
            }
        }
    }
}




// 在写一个写字板不熟悉的知识，列出如下
// 控制属性的方式    对对象的属性理解不透彻，比如说对this.stroke   还有fillstyle上面
// 的颜色填充颜色的修改，
//再有突然感觉一和老师的布局写的不一样了就不太会写了，知道要了解的是思路，但是就是不太会写
//对函数的封装，如果单独是函数的话，自己还能操作过来，但是一到类中就不太会了。
//那一块的id怎么就是this.id了。
//总结起来就是相对于与参数的传替不咋熟悉
//新内容

// contentEditable   表格可编辑   通过俩中方法去除默认样式，第一种:dblclick;
// 第二种: 让事件为null ;

//对文本的拖拽   和  对橡皮的拖拽
//save.href = canvas.toDataURl('img/png');
//save.onliad = 'a.png';