// Service worker mínimo — su único propósito es cumplir el requisito
// técnico de Chrome/Android para poder ofrecer "Instalar app".
// No cachea nada ni cambia el comportamiento normal del sitio: cada
// pedido pasa directo a la red, tal cual lo haría sin este archivo.
//
// (Versión anterior tenía un bug: intentaba devolver una copia guardada
// en caché cuando fallaba un pedido de red, pero como nunca se guardaba
// nada en caché, terminaba rompiendo pedidos que deberían haber pasado
// bien — incluidas las llamadas al backend de Apps Script.)
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', () => {
  // No interceptamos nada — dejamos que el navegador maneje cada pedido normalmente.
});
