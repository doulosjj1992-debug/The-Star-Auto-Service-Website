(function () {
  function reveal() {
    var el = document.querySelector('.hero-address');
    if (!el) return;

    // Remove just in case, force reflow, then add so animation can fire
    el.classList.remove('reveal');
    // Force reflow to (re)start keyframes in all browsers
    void el.offsetWidth;
    // Next paint -> add class (guarantees "after styles")
    requestAnimationFrame(function(){ el.classList.add('reveal'); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', reveal, { once:true });
  } else {
    reveal();
  }
  // Extra nudge after first paint (covers late-loaded CSS)
  setTimeout(reveal, 0);

  // Smart Maps destination
  var addr = "900 E Belt Line Rd, Richardson, TX 75081";
  var g = "https://maps.google.com/?q=" + encodeURIComponent(addr);
  var a = "https://maps.apple.com/?q=" + encodeURIComponent(addr);
  var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var link = document.getElementById("map-link");
  if (link) link.href = isiOS ? a : g;
})();
