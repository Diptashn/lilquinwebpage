/**
 * LilQuin Kitchen — Shared JavaScript (all pages)
 * Hamburger menu toggle
 */
(function(){
  var h=document.querySelector('.hamburger'),hdr=document.querySelector('header');
  if(!h||!hdr)return;
  h.addEventListener('click',function(){
    var o=hdr.classList.toggle('nav-open');
    h.setAttribute('aria-expanded',o?'true':'false');
  });
  hdr.querySelectorAll('.links a').forEach(function(a){
    a.addEventListener('click',function(){
      hdr.classList.remove('nav-open');
      h.setAttribute('aria-expanded','false');
    });
  });
  document.addEventListener('click',function(e){
    if(!hdr.contains(e.target)){
      hdr.classList.remove('nav-open');
      h.setAttribute('aria-expanded','false');
    }
  });
})();