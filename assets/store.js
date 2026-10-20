/* Folklore Skies — device-aware store links. Progressive enhancement only:
   without JS the page shows the App Store badge for everyone.
   ┌──────────────────────────────────────────────────────────────────────┐
   │ To launch on Google Play later, set PLAY_STORE_URL below (one line). │
   │ The App Store ID also lives in index.html (search for 6824357386).  │
   └──────────────────────────────────────────────────────────────────────┘ */
(function () {
  var PLAY_STORE_URL = ""; // e.g. "https://play.google.com/store/apps/details?id=cool.caveman.folkloreweather"

  var ua = navigator.userAgent || "";
  var root = document.documentElement;
  var platform = "desktop";
  if (/android/i.test(ua)) platform = "android";
  else if (/iPhone|iPod|iPad/.test(ua)) platform = "ios";
  // iPadOS 13+ reports itself as a Mac; a touch screen gives it away.
  else if (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) platform = "ios";
  else if (/Macintosh/.test(ua)) platform = "mac";
  root.setAttribute("data-platform", platform);

  if (PLAY_STORE_URL) {
    root.setAttribute("data-play", "1");
    document.addEventListener("DOMContentLoaded", function () {
      var links = document.querySelectorAll("a.play");
      for (var i = 0; i < links.length; i++) links[i].href = PLAY_STORE_URL;
    });
  }
})();
