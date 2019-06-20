const CACHE_NAME = "hilal-detection-v1";
var urlsToCache = [
  "/",
  "/index.html",
  "/icon.png",
  "/shortcut.png",
  "/manifest.json",
  "/css/bootstrap/css/bootstrap.css",
  "/css/font-awesome/css/fontawesome-all.css",
  "/css/micons/micons.css",
  "/css/fonts.css",
  "/css/base.css",
  "/css/vendor.css",
  "/css/main.css",
  "/fonts/metropolis/metropolis-semibold-webfont.woff2",
  "/fonts/metropolis/metropolis-regular-webfont.woff2",
  "/fonts/domine/domine-bold-webfont.woff2",
  "/fonts/metropolis/metropolis-light-webfont.woff2",
  "/css/font-awesome/webfonts/fa-brands-400.woff2",
  "/css/font-awesome/webfonts/fa-solid-900.woff2",
  "/css/micons/fonts/icomoon.ttf",
  "/fonts/metropolis/metropolis-semibold-webfont.woff",
  "/fonts/metropolis/metropolis-regular-webfont.woff",
  "/fonts/domine/domine-bold-webfont.woff",
  "/fonts/metropolis/metropolis-light-webfont.woff",
  "/css/font-awesome/webfonts/fa-brands-400.woff",
  "/css/font-awesome/webfonts/fa-solid-900.woff",
  "/css/micons/fonts/icomoon.woff",
  "/css/micons/fonts/icomoon.eot",
  "/css/micons/fonts/icomoon.ttf?jo2z5t",
  "/css/micons/fonts/icomoon.woff?jo2z5t",
  "/css/font-awesome/webfonts/fa-brands-400.ttf",
  "/css/font-awesome/webfonts/fa-solid-900.ttf",
  "/js/modernizr.js",
  "/js/pace.min.js",
  "js/jquery-3.2.1.min.js",
  "js/plugins.js",
  "js/main.js",
  "js/count.js",
  "/images/moon.jpg",
  "/images/icons/icon-arrow-down.svg",
  "/images/logo.png"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
      caches
        .match(event.request, { cacheName: CACHE_NAME })
        .then(function(response) {
          if (response) {
            console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
            return response;
          }
   
          console.log(
            "ServiceWorker: Memuat aset dari server: ",
            event.request.url
          );
          return fetch(event.request);
        })
    );
});

self.addEventListener("activate", function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName != CACHE_NAME) {
              console.log("ServiceWorker: cache " + cacheName + " dihapus");
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
});