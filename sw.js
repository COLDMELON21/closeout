const CACHE_NAME = 'closeout-cache-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Solo intercepta peticiones GET
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).catch(() => new Response('Página no disponible offline.'))
  );
});
