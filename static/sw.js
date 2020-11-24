// importScripts('https://unpkg.com/workbox-sw@0.0.2/build/importScripts/workbox-sw.dev.v0.0.2.js');
// importScripts('https://unpkg.com/workbox-runtime-caching@1.3.0/build/importScripts/workbox-runtime-caching.prod.v1.3.0.js');
// importScripts('https://unpkg.com/workbox-routing@1.3.0/build/importScripts/workbox-routing.prod.v1.3.0.js');

// const assetRoute = new workbox.routing.RegExpRoute({
//     regExp: new RegExp('^http://localhost:8081/jobs/static/*'),
//     handler: new workbox.runtimeCaching.CacheFirst()
// });

// const router = new workbox.routing.Router();
// //router.addFetchListener();
// router.registerRoutes({routes: [assetRoute]});
// router.setDefaultHandler({
//     handler: new workbox.runtimeCaching.CacheFirst()
// });



// // Cache on install
// // self.addEventListener('install', function(e) {
// //     e.waitUntil(
// //       caches.open('embrapa').then(function(cache) {
// //         return cache.addAll([
// //           '/',
// //           '/index.html',
// //           '/index.html?homescreen=1',
// //           '/?homescreen=1',
// //           '/styles/main.css',
// //           '/scripts/main.min.js',
// //           '/sounds/airhorn.mp3'
// //         ]);
// //       })
// //     );
// // });