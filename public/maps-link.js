(function () {
  function onReady() {
    var pill = document.querySelector('.hero-address');
    if (pill) pill.classList.add('reveal');      // <-- triggers CSS entrance animation
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }

  // Smart Maps link (Apple for iOS, Google otherwise)
  var addr = "900 E Belt Line Rd, Richardson, TX 75081";
  var g = "https://maps.google.com/?q=" + encodeURIComponent(addr);
  var a = "https://maps.apple.com/?q=" + encodeURIComponent(addr);
  var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var link = document.getElementById("map-link");
  if (link) link.href = isiOS ? a : g;
})();
