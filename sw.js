// Offline support: every page and the app shell are cached on first visit; images and
// audio are cached as they are played, so a lesson you have opened works offline.
var VERSION = "202610130143";
var SHELL = ["404.html","andamio.html","como-funciona.html","creditos.html","examen\\a1.html","examen\\a2.html","examen\\b1.html","examen\\unidad-1.html","examen\\unidad-10.html","examen\\unidad-12.html","examen\\unidad-13.html","examen\\unidad-14.html","examen\\unidad-2.html","examen\\unidad-3.html","examen\\unidad-4.html","examen\\unidad-6.html","examen\\unidad-7.html","examen\\unidad-8.html","examen\\unidad-9.html","index.html","leccion\\1-1.html","leccion\\1-2.html","leccion\\1-3.html","leccion\\10-1.html","leccion\\10-2.html","leccion\\10-3.html","leccion\\11-1.html","leccion\\12-1.html","leccion\\12-2.html","leccion\\12-3.html","leccion\\13-1.html","leccion\\13-2.html","leccion\\13-3.html","leccion\\14-1.html","leccion\\14-2.html","leccion\\14-3.html","leccion\\15-1.html","leccion\\2-1.html","leccion\\2-2.html","leccion\\2-3.html","leccion\\3-1.html","leccion\\3-2.html","leccion\\3-3.html","leccion\\4-1.html","leccion\\4-2.html","leccion\\4-3.html","leccion\\5-1.html","leccion\\6-1.html","leccion\\6-2.html","leccion\\6-3.html","leccion\\7-1.html","leccion\\7-2.html","leccion\\7-3.html","leccion\\8-1.html","leccion\\8-2.html","leccion\\8-3.html","leccion\\9-1.html","leccion\\9-2.html","leccion\\9-3.html","progreso.html","repaso.html","unidad\\1.html","unidad\\10.html","unidad\\11.html","unidad\\12.html","unidad\\13.html","unidad\\14.html","unidad\\15.html","unidad\\2.html","unidad\\3.html","unidad\\4.html","unidad\\5.html","unidad\\6.html","unidad\\7.html","unidad\\8.html","unidad\\9.html","assets/app.css?v=202610130143","assets/app.js?v=202610130143","assets/deck.js?v=202610130143","fonts/fraunces.woff2","fonts/source-sans-3.woff2","fonts/source-sans-3-italic.woff2","assets/icon.svg"];
var CACHE = "eva-" + VERSION;

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf("eva-") === 0 && k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  // audio uses range requests on some browsers: let those through untouched
  if (e.request.headers.get("range")) return;
  e.respondWith(caches.match(e.request, { ignoreSearch: e.request.mode === "navigate" }).then(function (hit) {
    var net = fetch(e.request).then(function (res) {
      if (res && res.ok && res.type === "basic") { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, copy); }); }
      return res;
    });
    return hit || net.catch(function () { return caches.match("404.html"); });
  }));
});
