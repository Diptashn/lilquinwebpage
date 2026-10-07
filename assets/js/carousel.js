/**
 * LilQuin Kitchen — Carousel (birthday, bespoke)
 * Generic: any element with [data-carousel] works.
 * Markup: .carousel[data-carousel] > .slides > .slide + .prev/.next + .dots
 */
(function(){
  document.querySelectorAll('[data-carousel]').forEach(function(root){
    var slides=root.querySelectorAll('.slide');
    var dotsWrap=root.querySelector('.dots');
    if(!slides.length||!dotsWrap)return;
    var i=0, timer;
    slides.forEach(function(_,n){
      var d=document.createElement('button');
      d.className='dot2'+(n===0?' active':'');
      d.setAttribute('aria-label','Go to slide '+(n+1));
      d.onclick=function(){go(n);restart();};
      dotsWrap.appendChild(d);
    });
    var dots=dotsWrap.querySelectorAll('.dot2');
    function go(n){
      slides[i].classList.remove('active');dots[i].classList.remove('active');
      i=(n+slides.length)%slides.length;
      slides[i].classList.add('active');dots[i].classList.add('active');
    }
    var prev=root.querySelector('.prev'), next=root.querySelector('.next');
    if(prev) prev.onclick=function(){go(i-1);restart();};
    if(next) next.onclick=function(){go(i+1);restart();};
    function restart(){clearInterval(timer);timer=setInterval(function(){go(i+1);},6000);}
    restart();
  });
})();