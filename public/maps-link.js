(function(){
  function pickNode(){
    return (
      document.querySelector('.hero-address a') ||
      document.getElementById('map-link') ||
      document.querySelector('[data-addr]') ||
      null
    );
  }
  function setMapsHref(a){
    if(!a) return;
    var addr="900 E Belt Line Rd, Richardson, TX 75081";
    var isiOS=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;
    a.href=(isiOS?"https://maps.apple.com/?q=":"https://maps.google.com/?q=")+encodeURIComponent(addr);
  }
  function revealNow(el){
    if(!el) return false;
    el.classList.remove('reveal');
    void el.offsetWidth;            // restart keyframes
    el.classList.add('reveal');
    return true;
  }
  function start(){
    var a=pickNode(); if(!a) return false;
    setMapsHref(a);
    var wrap=a.closest('.hero-address')||a;

    // Fire once on load no matter what
    setTimeout(function(){ revealNow(wrap); }, 120);

    // Also reveal when scrolled into view (covers above-the-fold & late paints)
    try{
      var io=new IntersectionObserver(function(es,o){
        es.forEach(function(e){ if(e.isIntersecting){ revealNow(wrap); o.disconnect(); }});
      },{threshold:.15});
      io.observe(wrap);
    }catch(e){/* older browsers: load timer above is enough */}
    return true;
  }

  if(!start()){
    document.addEventListener('DOMContentLoaded', start, {once:true});
    var mo=new MutationObserver(function(){ if(start()) mo.disconnect(); });
    mo.observe(document.documentElement,{childList:true,subtree:true});
  }
})();
