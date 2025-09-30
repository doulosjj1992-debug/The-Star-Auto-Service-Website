(function () {
  function pickTarget() {
    return (
      document.getElementById('map-link') ||
      document.querySelector('[data-addr]') ||
      document.querySelector('.hero-address a') ||
      document.querySelector('.hero a[href*="maps.google.com"], .hero a[href*="maps.apple.com"]') ||
      null
    );
  }
  function setMapsHref(a) {
    var addr = "900 E Belt Line Rd, Richardson, TX 75081";
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var url = (isIOS ? "https://maps.apple.com/?q=" : "https://maps.google.com/?q=") + encodeURIComponent(addr);
    if (a) a.href = url;
  }
  function revealOnce(el) {
    if (!el) return;
    el.classList.remove('reveal');
    void el.offsetWidth;
    requestAnimationFrame(function(){ el.classList.add('reveal'); });
  }
  function init() {
    var el = pickTarget();
    if (!el) return false;
    setMapsHref(el.tagName === 'A' ? el : el.querySelector('a'));
    var io = new IntersectionObserver(function(ents, obs){
      ents.forEach(function(e){ if (e.isIntersecting){ revealOnce(el); obs.disconnect(); } });
    }, {threshold: 0.2});
    io.observe(el);
    return true;
  }
  if (!init()) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
    var mo = new MutationObserver(function(){ if (init()) mo.disconnect(); });
    mo.observe(document.documentElement, {childList:true, subtree:true});
  }
})();
