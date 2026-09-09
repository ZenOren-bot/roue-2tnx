const CACHE='roue2tnx-pro-v1';
const FILES=['./','./index.html','./manifest.webmanifest','./assets/icon-192.png','./assets/icon-512.png',
'./assets/avatar_1.png','./assets/avatar_2.png','./assets/avatar_3.png','./assets/avatar_4.png',
'./assets/avatar_5.png','./assets/avatar_6.png','./assets/avatar_7.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
