(function () {
  function addReveal() {
    var el = document.querySelector('.hero-address');
    if (el && !el.classList.contains('reveal')) el.classList.add('reveal');
  }

  // On first parse
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addReveal);
  } else {
    addReveal();
  }
  // And again after a tick (helps if the markup is injected late)
  setTimeout(addReveal, 0);

  // Smart Maps link
  var addr = "900 E Belt Line Rd, Richardson, TX 75081";
  var g = "https://maps.google.com/?q=" + encodeURIComponent(addr);
  var a = "https://maps.apple.com/?q=" + encodeURIComponent(addr);
  var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var link = document.getElementById("map-link");
  if (link) link.href = isiOS ? a : g;
})();
