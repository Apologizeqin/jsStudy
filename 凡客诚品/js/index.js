window.onload = function(){

  let pl = document.querySelectorAll('div.pl');
  let navR = document.getElementsByClassName('nav-right')[0];
  let lis = navR.getElementsByTagName('li');
  let count = pl[0].childElementCount;
  let lip = pl[0].getElementsByTagName('a');
  let lih = parseInt(lip[0].offsetHeight);
  console.log(lih);
  let heights = count * lih;
  console.log(heights);
  // console.log(count);
  // let a = Array.from(pl);
  // console.log(a);
  // Array.prototype.forEach.call(pl,function(element,index,obj){
  //   console.log(pl);
  //   element[index].onmouseenter = function(){
  //     element[index].style.display = 'block';
  //   }
  // })
  // a.forEach(function(element,index,obj){
  //     element[index].onmouseenter = function(){
  //       console.log(element);
  //       element[index].style.display = 'block';
  //     }
  // })
    for(let i=0;i<lis.length;i++){
      lis[i].onmouseenter = function(){
        pl[i].style.height = `${heights}px`;
      }
    }

    for(let i=0;i<lis.length;i++){
      lis[i].onmouseleave = function(){
        pl[i].style.height = '0';
      }
    }


    //轮播图走一波


}
