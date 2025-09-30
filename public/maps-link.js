(function () {
  function setMapsHref() {
    var addr = "900 E Belt Line Rd, Richardson, TX 75081";
    var g = "https://maps.google.com/?q=" + encodeURIComponent(addr);
    var a = "https://maps.apple.com/?q=" + encodeURIComponent(addr);
    var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var link = document.getElementById("map-link");
    if (link) link.href = isiOS ? a : g;
  }

  function targetNode() {
    var link = document.getElementById("map-link");
    if (!link) return null;
    return link.closest(".hero-address") || link; // prefer wrapper, fallback to link
  }

  function reveal() {
    var node = targetNode();
    if (!node) return false;
    node.classList.remove("reveal");
    void node.offsetWidth; // restart keyframes
    requestAnimationFrame(function () { node.classList.add("reveal"); });
    return true;
  }

  // Try now; if missing, observe until it appears
  if (!reveal()) {
    var mo = new MutationObserver(function () { if (reveal()) mo.disconnect(); });
    mo.observe(document.documentElement, { childList: true, subtree: true });
  }

  // Ensure href + another tick for late CSS
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { setMapsHref(); reveal(); }, { once: true });
  } else {
    setMapsHref();
    setTimeout(reveal, 0);
  }
})();
