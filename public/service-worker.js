const STATIC_CACHE = 'static-cache-v1';
const RUNTIME_CACHE = 'runtime-cache';

const FILES_TO_CACHE = [
    '/idb.js',
    '/index.html',
    '/index.js',
    '/manifest.webmanifest',
    '/publix/icons/money.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches
            .open(STATIC_CACHE)
            .then(cache => cache.addAll(FILES_TO_CACHE))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    const currentCaches = [STATIC_CACHE, RUNTIME_CACHE]
    event.waitUntil(
        caches
        .keys()
        .then((cacheNames) =>
        cacheNames.filter((cacheName) => caches.delete(cacheToDelete)))
    )
    .then(() => self.clients.claim());
});