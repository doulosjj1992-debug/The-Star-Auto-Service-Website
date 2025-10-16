(function () {
  var addr  = "900 E Belt Line Rd, Richardson, TX 75081";
  var gmaps = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(addr);
  var amaps = "https://maps.apple.com/?q=" + encodeURIComponent(addr);
  var link  = document.getElementById("map-link");
  if (!link) return;
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) link.href = amaps;
  else link.href = gmaps;
})();
