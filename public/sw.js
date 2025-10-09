// ! https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API

const CACHE_NAME = "simple-todo-list-cache-v1" // versioning forces cache refresh on deploy

/*
** INSTALLATION
*/

// browser will fire the 'install' event when the service worker was downloaded to the client and the browser is preparing to install it
self.addEventListener('install', e => {
  console.log('SW installed')
  self.skipWaiting() // immediately promote the new instance of the service worker to active, however if an old instance already controls the app, the .claim() method has to be used in conjunction with .skipWaiting() (see ACTIVATE block)
})

/*
** ACTIVATE
*/

// browser will fire the 'activate' event after all of the processes within the .waitUntil block are completed
self.addEventListener('activate', e => {
  console.log('SW activated')
  e.waitUntil( // ensures that the activation will wait until the caches deletion is completed
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )) // delete all of the caches which do not match the current CACHE_NAME to prevent stale files and respect the browser cache size limitation per origin
  )

  self.clients.claim() // the current service worker will take control of uncontrolled pages immediately
})

/*
** INTERCEPT FETCH REQUESTS
*/

// when the browser triggers 'fetch' event based on the network request made by the app, it will be intercepted by SW
self.addEventListener('fetch', e => {
  const req = e.request
  const url = new URL(req.url)

  if (req.method !== 'GET') return // allow only GET requests, this prevent caching mutable requests like PUT or POST which may result in issues)
  if (url.origin !== self.location.origin) return // prevent caching cross-origin requests (calls to zenquotes.io in QuoteGenerator.jsx)

  /*
  ** RESPOND TO INTERCEPTED FETCH REQUESTS
  */

  // if (req.mode === 'navigate') {
    e.respondWith( // method used to respond to intercepted request
      fetch(req) // attempt to fetch the request via network (online)
        // when the fetch is successful, clone the request and response to store it in the origin cache
        .then(networkRes => {
          if (networkRes && networkRes.ok) { // make sure that the request returned 'ok' status before storing it in the cache (do not store error responses like 404, 500)
            const resClone = networkRes.clone() // clone the response (responses are streams that are 'consumed on first use', therefore 2 copies of the request are needed; one for the app and the second for the service worker which has its own environment independent from the app)
            caches.open(CACHE_NAME).then(cache => cache.put(req, resClone)) // save the cloned response in the cache
          }
          return networkRes
        })
        // if fetch fails (offline/network error) service worker will proceed to return a cached response or a fallback
        .catch(() => caches
          .match(req) // find the matching cloned request
          .then(cachedRes => cachedRes || caches.match('/index.html')) // respond with the cached response or a fallback which is the cached app (index.html)
        )
      )
  // }
})
