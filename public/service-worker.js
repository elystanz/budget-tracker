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

self.addEventListener('fetch', event => {
    if (
        event.request.method != 'GET' || !event.request.url.startsWith(self.location.origin)
    ) {
        event.respondWith(fetch(event.request));
        return;
    } if (event.request.url.includes('/api/transaction')) {
        event.respondWith(
            caches.open(RUNTIME_CACHE).then(cache => 
                fetch(event.request)
                .then(response => {
                    cache.put(event.request, response.clone());
                    return response;
                })
                .cache(() => caches.match(event.request)))
        );
        return;
    }

    event.respondWith(
        caches.match(event.request)
        .then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }

            return caches
                .open(RUNTIME_CACHE)
                .then(cache =>
                    fetch(event.request).then(response =>
                        cache.put(event.request, response.clone()).then(() => response)
                    )
                );
        })
    );
});