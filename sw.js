// Service Worker
// Please do no edit this file.
self.addEventListener("fetch", (event) => {
  console.log("You fetched " + event);
});

// Install
const cacheName = "gcalc_cache_0.0.1";
const assets = ["/src/calc_style.css", "/calc.js", "icon.png"];

self.addEventListener("install", (event) => {
  self.skipWaiting(); // skip waiting
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});
