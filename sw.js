// Service worker minimal — nécessaire pour que le navigateur propose
// "Installer l'application" sur téléphone et PC.
// Ne met rien en cache pour l'instant : chaque visite recharge la dernière version.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
