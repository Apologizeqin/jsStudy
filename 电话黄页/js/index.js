window.onload = function(){
    let contact = [{"name":"张强","phone":"12345678","pinyin":"zhangqiang"},
        {"name":"毕浩南","phone":"2345689","pinyin":"bihaonan"},
        {"name":"冰冰","phone":"96546654","pinyin":"bingbing"},
        {"name":"高佳琪","phone":"7983253","pinyin":"gaojiaqi"},
        {"name":"柴劲松","phone":"7847262","pinyin":"caijinsong"},
        {"name":"彭丽俊","phone":"64724628","pinyin":"penglijun"},
        {"name":"张燕","phone":"789523","pinyin":"zhangyan"},
        {"name":"风震宇","phone":"893742","pinyin":"fengzhenyu"},
        {"name":"陈凯","phone":"7583738","pinyin":"chenkai"},
        {"name":"徐文华","phone":"7983253","pinyin":"xuwenhua"},
        {"name":"董佳璐","phone":"7847262","pinyin":"dongjialu"},
        {"name":"徐颖","phone":"64724628","pinyin":"xuying"},
        {"name":"周伟","phone":"789523","pinyin":"zhaowei"},
        {"name":"王康","phone":"893742","pinyin":"wangkang"},
        {"name":"王义儒","phone":"7583738","pinyin":"wangyiru"},
        {"name":"王凯强","phone":"64724628","pinyin":"wangkaiqiang"},
        {"name":"郝静","phone":"64724628","pinyin":"haojing"},]
    // console.log(contact);
    // localStorage.contact = JSON.stringify(contact,null,4);  //转换成为字符串
    // console.log(localStorage.contact);
    // let arr  = JSON.parse(localStorage.contact);
    // console.log(arr);



    let data = getdata();
    let dl =document.querySelector('dl');
    let aside = document.getElementById('zimu');
    console.log(ele);
    console.log(zimu);  //为什么这里是true;
    function getdata(){
        let date = localStorage.getItem('contact')?JSON.parse(localStorage.contact):false;
        if(!date){
            localStorage.setItem('contact',JSON.stringify(contact));
        }
        return date;
    }

    let list = fuc(data);
    function  fuc(arre){
    let contactObj = {};   //每次都让创建对象为空。
    arre.forEach(element=>{
        let first = element.pinyin.charAt(0).toLocaleUpperCase();
        // console.log(first);
        if(contactObj[first]==undefined){
            contactObj[first]=[];
        }
        contactObj[first].push(element);
    })

       //获取到所有的键 ， 然后进行排序
    let list = Object.keys(contactObj).sort();

    // alert(1);

    list.forEach(element=>{
      dl.innerHTML += `
      <dt>${element}</dt>
      `;
      aside.innerHTML +=`
        <li>${element}</li>
         `;
        contactObj[element].forEach(value=>{
            dl.innerHTML +=`
            <dd><a href="phone">${value.name}</a></dd>
            `
        });
    });
        console.log(dl.innerHTML);
    return list;
}

//filter 的方法不了解  对数组中的每一项运行给定函数，返回该函数会返回true的项组组成的数组
//JSON  stringfy 将javascript对象序列化为json字符串
//JSON   parse  将 JSON对象转换成为原生javascript值  
   let arr = [];
   let dts = document.querySelectorAll('dt');
   let tip =document.querySelector(".tip");
   dts.forEach(element=>{
        arr.push(element.offsetTop)
   })

   window.onscroll = function(){
     let sc = document.body.scrollTop;
     tip.innerText = list[0];
         arr.forEach((element,index)=>{
         if(element<sc+90){
            tip.innerText = list[index];
         }
        });
   }


   let inputs = document.querySelector('input');
   inputs.onkeyup = function(){
     let val = this.value.trim();
     console.log(val);
     let zhenzhi = data.filter((element)=>{
        return element.name.includes(val)||element.phone.includes(val);
        })
     console.log(zhenzhi);
       dl.innerHTML=``;
       aside.innerHTML='';
     fuc(zhenzhi);
    
    };
}