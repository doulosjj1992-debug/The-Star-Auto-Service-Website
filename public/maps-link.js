(function(){
  function pickAnchor(){
    return (
      document.querySelector('.hero-address a') ||
      document.getElementById('map-link') ||
      document.querySelector('[data-addr]') || null
    );
  }
  function setMapsHref(a){
    if(!a) return;
    var addr="900 E Belt Line Rd, Richardson, TX 75081";
    var isiOS=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;
    a.href=(isiOS?"https://maps.apple.com/?q=":"https://maps.google.com/?q=")+encodeURIComponent(addr);
  }
  function reveal(el){
    if(!el) return false;
    el.classList.remove('reveal'); void el.offsetWidth; el.classList.add('reveal');
    return true;
  }
  function start(){
    var a=pickAnchor(); if(!a) return false;
    setMapsHref(a);
    var wrap=a.closest('.hero-address')||a;
    // Reveal both so either element animates, depending on CSS
    setTimeout(function(){ reveal(wrap); reveal(a); }, 120);
    try{
      var io=new IntersectionObserver(function(es,o){
        es.forEach(function(e){ if(e.isIntersecting){ reveal(wrap); reveal(a); o.disconnect(); }});
      },{threshold:.15});
      io.observe(wrap);
    }catch(_){}
    return true;
  }
  if(!start()){
    document.addEventListener('DOMContentLoaded', start, {once:true});
    var mo=new MutationObserver(function(){ if(start()) mo.disconnect(); });
    mo.observe(document.documentElement,{childList:true,subtree:true});
  }
})();
