let deferredPrompt
let btnAdd

window.addEventListener('beforeinstallprompt', e => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault()
  // Stash the event so it can be triggered later.
  deferredPrompt = e
})

window.addEventListener('beforeinstallprompt', e => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault()
  // Stash the event so it can be triggered later.
  deferredPrompt = e
  // Update UI notify the user they can add to home screen
  btnAdd.style.display = 'block'
})

btnAdd.addEventListener('click', e => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault()
  // Stash the event so it can be triggered later.
  deferredPrompt = e
  // hide our user interface that shows our A2HS button
  btnAdd.style.display = 'none'
  // Show the prompt
  deferredPrompt.prompt()
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then(choiceResult => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt')
    } else {
      console.log('User dismissed the A2HS prompt')
    }
    deferredPrompt = null
  })
})

// // Update version iterations as chnges are made
// const cacheName = 'SwissArmyApp-version-1-0'
// const dataCacheName = 'SwissArmyAppData-version-0-1'
// const filesToCache = ['/', '/index.html']

// // Event Handler

// self.addEventListener('install', function(event) {
//   console.log('[ServiceWorker] Install')
//   event.waitUntil(
//     caches.open(cacheName).then(function(cache) {
//       console.log('[ServiceWorker] Caching app shell')
//       return cache.addAll(filesToCache)
//     })
//   )
//   self.addEventListener('activate', function(event) {
//     console.log('[ServiceWorker] Activate')
//     event.waitUntil(
//       caches.keys().then(function(keyList) {
//         return Promise.all(
//           keyList.map(function(key) {
//             if (key !== cacheName && key !== dataCacheName) {
//               console.log('[ServiceWorker] Removing old cache', key)
//               return caches.delete(key)
//             }
//           })
//         )
//       })
//     )
//     return self.clients.claim()
//   })
// })

// // Serve the app shell from the cache
// /*
//  *The code intercepts the request and checks if
//  *the URL starts with the address of the weather API.
//  *If it does we'll use fetch to make the request.
//  *Once the response is returned, our code
//  *opens the cache, clones the response, stores it in the cache,
//  *and finally returns the response to the original requestor.
//  */

// self.addEventListener('fetch', function(event) {
//   console.log('[ServiceWorker] Fetch', event.request.url)
//   const dataUrl = 'https://query.yahooapis.com/v1/public/yql'
//   if (event.request.url.indexOf(dataUrl) > -1) {
//     /*
//      * When the request URL contains dataUrl, the app is asking for fresh
//      * weather data. In this case, the service worker always goes to the
//      * network and then caches the response. This is called the "Cache then
//      * network" strategy:
//      * https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
//      */
//     event.respondWith(
//       caches.open(dataCacheName).then(function(cache) {
//         return fetch(event.request).then(function(response) {
//           cache.put(event.request.url, response.clone())
//           return response
//         })
//       })
//     )
//   } else {
//     /*
//      * The app is asking for app shell files. In this scenario the app uses the
//      * "Cache, falling back to the network" offline strategy:
//      * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
//      */
//     event.respondWith(
//       caches.match(event.request).then(function(response) {
//         return response || fetch(event.request)
//       })
//     )
//   }
// })
