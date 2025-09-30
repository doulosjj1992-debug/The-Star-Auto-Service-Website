(function () {
  function setMapsHref(linkEl) {
    var addr = "900 E Belt Line Rd, Richardson, TX 75081";
    var g = "https://maps.google.com/?q=" + encodeURIComponent(addr);
    var a = "https://maps.apple.com/?q=" + encodeURIComponent(addr);
    var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (linkEl) linkEl.href = isiOS ? a : g;
  }
  function revealOnce(el) {
    if (!el) return;
    el.classList.remove('reveal'); void el.offsetWidth; el.classList.add('reveal');
  }
  function init() {
    var wrap = document.querySelector('.hero-address');
    if (!wrap) return false;
    setMapsHref(wrap.querySelector('a'));
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function(ents, obs){
        ents.forEach(function(e){ if (e.isIntersecting){ revealOnce(wrap); obs.disconnect(); } });
      }, {threshold: 0.2});
      io.observe(wrap);
    } else {
      revealOnce(wrap);
    }
    return true;
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, {once:true});
  } else {
    init();
  }
})();
