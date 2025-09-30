(function () {
  function setMapsHref() {
    var addr = "900 E Belt Line Rd, Richardson, TX 75081";
    var g = "https://maps.google.com/?q=" + encodeURIComponent(addr);
    var a = "https://maps.apple.com/?q=" + encodeURIComponent(addr);
    var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var link = document.getElementById("map-link");
    if (link) link.href = isiOS ? a : g;
  }

  function revealWhenReady() {
    var el = document.querySelector('.hero-address');
    if (el) {
      el.classList.remove('reveal');
      void el.offsetWidth;                // reflow to restart keyframes
      requestAnimationFrame(function(){ el.classList.add('reveal'); });
      return true;
    }
    return false;
  }

  // Run immediately if possible, otherwise observe until it exists
  if (!revealWhenReady()) {
    var mo = new MutationObserver(function(){
      if (revealWhenReady()) { mo.disconnect(); }
    });
    mo.observe(document.documentElement, {childList:true,subtree:true});
  }

  // Also run on DOM ready as a safety net
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function(){ revealWhenReady(); setMapsHref(); }, {once:true});
  } else {
    setMapsHref();
  }

  // One more tick (covers late CSS)
  setTimeout(revealWhenReady, 0);
})();
