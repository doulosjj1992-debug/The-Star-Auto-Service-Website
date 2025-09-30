(function () {
  function pickTarget() {
    return (
      document.getElementById('map-link') ||
      document.querySelector('.hero-address a') ||
      document.querySelector('[data-addr]') ||
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
  function reveal(el) {
    if (!el) return;
    el.classList.remove('reveal');
    void el.offsetWidth; // restart keyframes
    requestAnimationFrame(function(){ el.classList.add('reveal'); });
  }
  function init() {
    var elLink = pickTarget();
    if (!elLink) return false;

    // Swap href to the right maps app
    setMapsHref(elLink);

    // Reveal wrapper if present, else reveal the link
    var wrap = elLink.closest('.hero-address') || elLink;
    try {
      var io = new IntersectionObserver(function(ents, obs){
        ents.forEach(function(e){ if (e.isIntersecting){ reveal(wrap); obs.disconnect(); } });
      }, {threshold: 0.15});
      io.observe(wrap);
    } catch(e) {
      // Fallback: reveal shortly after DOM ready
      setTimeout(function(){ reveal(wrap); }, 50);
    }
    return true;
  }

  if (!init()) {
    // Try again on DOM ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function(){ init(); }, {once:true});
    }
    // And observe late DOM mutations
    var mo = new MutationObserver(function(){ if (init()) mo.disconnect(); });
    mo.observe(document.documentElement, {childList:true, subtree:true});
  }
})();
