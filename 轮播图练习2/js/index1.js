$(document).ready(function(){
  let num = 0;
  let zc = $('ul').children().length;
  let wid = $('li').innerWidth();  //width就是自身宽度，但是innerwidth包括padding
  //然后是outlinewidth 包括padding 和 border
  console.log(wid);
  $('button:first').on('click',function(){
      num++;
      $('ul').css({"marginLeft":-1240*num + 'px'})
  })
  $('button:last').on('click',function(){
    num--;
    $('ul').css({"marginLeft":-1240 * num+'px'})
  })
})
