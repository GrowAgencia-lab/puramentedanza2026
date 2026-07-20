// Service worker mínimo — su único propósito es cumplir el requisito
// técnico de Chrome/Android para poder ofrecer "Instalar app".
// No guarda nada en caché ni cambia el comportamiento normal del sitio.
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
