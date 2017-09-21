window.onload = function(){
      let lun = document.querySelectorAll('.lun-top');
      let lunbo = document.querySelector('.lunbo');
      let six = document.querySelector('.six');
      console.log(six);
      console.log(lunbo);
      let width = lun[0].offsetWidth;
      let point = document.querySelectorAll('.point');
      // console.log(point);

      let now = 0;
      let next = 0;
      let t = setInterval(fn,1000);

    six.onmouseenter = function(){
        clearInterval(t)
    }
    six.onmouseleave = function(){
        t = setInterval(fn,1000);
    }

      function fn(){
          next++;
          if(next == lun.length){
              next=0;
          }
          lun[next].style.left = `${width}px`;
          animate(lun[now],{left:-width});
          point[now].classList.remove('bts');
          animate(lun[next],{left:0});
          point[next].classList.add('bts');
          now = next;
      }

     for(let i=0;i<point.length;i++){
          point[i].onclick = function(){
              if(i==now){
                  return;
              }
            if(i>now){
                lun[i].style.left=`${width}px`;
                animate(lun[now],{left:-width});
                point[i].classList.add('bts');
                animate(lun[i],{left:0});
                point[now].classList.remove('bts');
                now = next = i;
            }

              if(i<now){
                  lun[i].style.left=`${-width}px`;
                  animate(lun[now],{left:width});
                  point[i].classList.add('bts');
                  animate(lun[i],{left:0});
                  point[now].classList.remove('bts');
                  now = next =i;
              }
          }
     }



}