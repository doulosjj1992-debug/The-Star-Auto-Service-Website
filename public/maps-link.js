(function(){
  var addr = "900 E Belt Line Rd, Richardson, TX 75081";
  var g = "https://maps.google.com/?q=" + encodeURIComponent(addr);
  var a = "https://maps.apple.com/?q=" + encodeURIComponent(addr);
  var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  // Find the pill wrapper + link in several safe ways
  var wrap = document.querySelector('.hero-address');
  var link = (wrap && wrap.querySelector('a'))
          || document.getElementById('map-link')
          || document.querySelector('a[href*="maps.google"], a[href*="maps.apple"]');

  if (link) link.href = isiOS ? a : g;

  // Entrance animation trigger: add .reveal once visible
  function reveal(){
    if (!wrap) wrap = document.querySelector('.hero-address');
    if (!wrap) return false;
    wrap.classList.remove('reveal');
    void wrap.offsetWidth;                          // restart keyframes
    wrap.classList.add('reveal');
    return true;
  }

  if (!reveal() && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(ents, obs){
      ents.forEach(function(e){ if (e.isIntersecting){ reveal(); obs.disconnect(); } });
    }, {threshold: 0.2});
    if (wrap) io.observe(wrap);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', reveal, {once:true});
  }
})();
