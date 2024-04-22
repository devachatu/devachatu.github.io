'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a47e8801a9c12f71c48d92ff95238211",
"assets/AssetManifest.json": "ce4649919a8e5d662330a7150b5aa829",
"assets/assets/banner_bg.png": "fdf9094ab451c0657f0ec98a9e70cb8e",
"assets/assets/booking1.png": "917059affb71b83c64fb14f454fc187e",
"assets/assets/booking2.png": "2fc05669b2832a823ed629ed466b6f73",
"assets/assets/booking3.png": "1984f03b072d534a1d2a55e810a869e4",
"assets/assets/comparison_image%2520(un).png": "6888667f8db9fd550211c0826aa1abbc",
"assets/assets/comparison_image.png": "f566056b09f225c45bd8823e7b106bee",
"assets/assets/discover_image.png": "ab92cd549afb845b3f53e43a29b282a6",
"assets/assets/dream.png": "04a21f375c3c39279b96ee5bf248b7be",
"assets/assets/events_bg.png": "d658d1a00ab3c329852ce1cf09884bdd",
"assets/assets/feature2.png": "dccfaf6a56d3217ae7248912eba9dcca",
"assets/assets/feature3.png": "59d97f9f373c47561901ab70f171d861",
"assets/assets/fonts/AcuminVariableConcept.ttf": "a60ffd44cc032fe3f02314182fdf8467",
"assets/assets/footer_logo.png": "0f6e0cc0697feb118d9159d1319f1146",
"assets/assets/grid_image1.png": "6103568f60126531b5df55bbb89cb2a6",
"assets/assets/grid_image2.png": "3aec119e3d0a49605ec3376dafd19315",
"assets/assets/grid_image3.png": "c50c114a0ffef2fb50f722cc95a5db58",
"assets/assets/HeroSection.png": "45df6ba12cf4330506a79baf0316f6b3",
"assets/assets/intro_aunty.png": "7b49c2a62f27e037e46d6758357fad41",
"assets/assets/intro_line.png": "8e9422b4d70c749f05088ebaaebca936",
"assets/assets/intro_profile%2520(un).png": "e4b5c4f80e1c01cd26084a0a342075b8",
"assets/assets/intro_profile.png": "8bf33f7951a80e67c2962157f8378ead",
"assets/assets/intro_title_photo.png": "e1e9f2b0d45c8b218e8b76a8a34dcb83",
"assets/assets/logo.png": "d98b0afc697b20ba13e629f73371f069",
"assets/assets/logos_forbes.png": "aa070f6a7e186a74f234d68cd1ec1a17",
"assets/assets/logos_medium.png": "dca5a3e21c0898daa21f52c05d9a80da",
"assets/assets/logos_quora.png": "9d1967f28a8569b41415970caf13073e",
"assets/assets/logos_yahoo.png": "f79eebc1339ec3329eb75213145b4030",
"assets/assets/session1.png": "48d05f1a8b2ee83331adbf658dd89c7d",
"assets/assets/session2.png": "4aba618118e5fec570936d3aadb73e30",
"assets/assets/session3.png": "159b738aca8e9353cd2c9818b0922c60",
"assets/assets/signature.png": "c1e99798eb757b04f932f8d8b2cb4a1f",
"assets/assets/Stepup_bg.png": "2a4d247fdadf6ab03d029991efb6d1a6",
"assets/assets/student.png": "8fce5956e45f71acb0c8f52d15e08e2c",
"assets/assets/why_image%2520(un).png": "7f8aa1d2f1787a5f4ca9750ef4721cc7",
"assets/assets/why_image.png": "d633c810ea972fd3e087b442bee76008",
"assets/FontManifest.json": "5e4499c93b6ff17a8765c545204e6c96",
"assets/fonts/MaterialIcons-Regular.otf": "349150d69985d8d43062e92225c7cfe6",
"assets/NOTICES": "bfe6034f05d31c251e75097b98d07764",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c4ba22dd63676f67852f681e94149c38",
"/": "c4ba22dd63676f67852f681e94149c38",
"main.dart.js": "d1c3566533d91008673fab3185fcf662",
"manifest.json": "86e151778c0ad0d76e2856edcf4c01af",
"version.json": "d2bef21812c224c36eff3643c6f166de"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
