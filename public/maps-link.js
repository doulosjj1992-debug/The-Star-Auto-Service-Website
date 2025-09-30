(function () {
  var addr = "900 E Belt Line Rd, Richardson, TX 75081";
  var g = "https://maps.google.com/?q=" + encodeURIComponent(addr);
  var a = "https://maps.apple.com/?q=" + encodeURIComponent(addr);
  var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var url = isiOS ? a : g;
  ["map-link","map-link-bottom"].forEach(function(id){
    var el = document.getElementById(id);
    if (el) el.href = url;
  });
})();
