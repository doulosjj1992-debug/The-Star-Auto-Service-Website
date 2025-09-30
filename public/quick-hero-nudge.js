(function () {
  var ADDRESS = "900 E Belt Line Rd, Richardson, TX 75081";
  var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  var mapHref = isIOS
    ? "maps://?q=" + encodeURIComponent(ADDRESS)
    : "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ADDRESS);

  function findContains(tagList, needle){
    needle = needle.toLowerCase();
    var nodes = document.querySelectorAll(tagList);
    for (var i=0;i<nodes.length;i++){
      var t = nodes[i].textContent.replace(/\s+/g," ").trim().toLowerCase();
      if (t.includes(needle)) return nodes[i];
    }
    return null;
  }

  function nudgeHero(){
    var h1 = findContains("h1, h2, .hero-title, [data-hero-title]", "the star auto service");
    if (h1){ h1.style.transform = "translateY(-2.5vh)"; h1.style.transition = "transform .2s ease"; }

    var sub = findContains("h2, h3, p, .subhead, [data-subhead]", "your neighborhood mechanic shop");
    if (sub && !document.getElementById("top-directions-link")){
      sub.style.marginTop = "0.25rem";
      var wrap = document.createElement("div");
      wrap.id = "top-directions-link";
      wrap.style.marginTop = "12px";
      wrap.style.textAlign = "center";
      var a = document.createElement("a");
      a.href = mapHref;
      a.textContent = "Serving You At: " + ADDRESS + " →";
      a.style.display="inline-block"; a.style.padding="10px 14px";
      a.style.borderRadius="999px"; a.style.background="linear-gradient(90deg,#ffb340,#ff8a00)";
      a.style.color="#111"; a.style.fontWeight="700"; a.style.textDecoration="none";
      a.style.boxShadow="0 6px 24px rgba(0,0,0,.25)";
      wrap.appendChild(a);
      sub.parentNode.insertBefore(wrap, sub.nextSibling);
    }
  }

  function wireBottomMap(){
    var link = document.querySelector('[data-map-link], a[href*="google.com/maps"]');
    if (link){ link.addEventListener("click", function(){ link.href = mapHref; }, {once:true}); }
  }

  window.addEventListener("DOMContentLoaded", function(){ nudgeHero(); wireBottomMap(); });
})();
