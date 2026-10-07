/**
 * LilQuin Kitchen — Shared JavaScript (all pages)
 * Hamburger menu toggle
 * Guarded against double-execution (duplicate <script> tags must not
 * double-bind the toggle, which would open+close on a single tap).
 */
(function(){
  if (window.__lilquinSharedInit) return;
  window.__lilquinSharedInit = true;
  var h=document.querySelector('.hamburger'),hdr=document.querySelector('header');
  if(!h||!hdr)return;
  h.addEventListener('click',function(e){
    e.stopPropagation();
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
