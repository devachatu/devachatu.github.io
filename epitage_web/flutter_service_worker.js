'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d6e30cc860dea911cc824f83cf837eea",
"assets/AssetManifest.json": "3dd6d94858434a0cae129f98acc11c0a",
"assets/assets/about_img.png": "e59094986c97b82e3ab5f70fb7db6267",
"assets/assets/career_email_image.png": "8cba456d598fd519a866b9433ea0dba6",
"assets/assets/career_intro.png": "cd3224757ede0ef685e2fd4fd1bd7455",
"assets/assets/compas.png": "bc946f5f6304468afc6c948a8137e278",
"assets/assets/compas_s.png": "b48a868b83cfc0dac77a50dc4036f8a6",
"assets/assets/consulting_intro.png": "14decb250e75b9f21f0b297c7861317f",
"assets/assets/contact_img.png": "fe2bed7afa2351e093ef0927ab424df5",
"assets/assets/data_img_2.png": "b40458b68565f511c35d3b736a6c37d3",
"assets/assets/data_img_3.png": "ba646a53dd0805bc5122c70d8c68bbba",
"assets/assets/employee_testimonials.png": "e010b3f7ba44ed2ea5f19659486f62ac",
"assets/assets/energizer.png": "c8d670d0e91828710b25d7c2ffbcc9aa",
"assets/assets/energizer_s.png": "45fc6acfa85026028eb1579d400b076f",
"assets/assets/epitage_logo.png": "d67d62e03b182de1cd419d9154198f06",
"assets/assets/ethos_logo.png": "99f2f1f3a0c71efd09065f96179a4083",
"assets/assets/feature_1.png": "979455c0955787209efd7eb106e52728",
"assets/assets/feature_2.png": "ef7284b3a85f5a8c6333ac6a9fb8f198",
"assets/assets/feature_3.png": "949b9bb7c3e03b0d53a035424dcb09e4",
"assets/assets/feature_4.png": "99327292592da6da66486179a50b9ba3",
"assets/assets/feature_5.png": "19f5a03f663e3c339f6e16debadeaf98",
"assets/assets/feature_6.png": "02228385451e75f3349545ced1254e51",
"assets/assets/ford.png": "465ac744a876791775c9c6f245e55298",
"assets/assets/ford_s.png": "b765844cd40a53da96607dec5dc76f14",
"assets/assets/headphone.png": "735df904931dfdafaa198dbbd541e308",
"assets/assets/heart.png": "87fa17851b3bb2e834ef7dd798f926e5",
"assets/assets/india_gate.png": "81567b472518b8ff0c07c831cc710395",
"assets/assets/info_img_1.png": "e9a9b3ada15d1e62946e986ccd7f5dc5",
"assets/assets/intro_img.png": "42e8bc0b8a5c75b9b6241e178be0f48f",
"assets/assets/invensys.png": "e01eac8de307fc58873e0be7d991f606",
"assets/assets/invensys_s.png": "095e3bf997adf3c7dbbbd89cf7027b89",
"assets/assets/kafko.png": "9841456e7af28c55dabee4a88453ab02",
"assets/assets/konegranes.png": "028dc7d7afdcd174ab34746fb210b5cd",
"assets/assets/konegranes_s.png": "06fddc4d3bca2f63888ca0e008393e2e",
"assets/assets/linkedin_icon.png": "86eeb201b7b9a9380c9f7ec64691bbcf",
"assets/assets/mahle.png": "1a3e8b820b741cf4f58d7ee7da2ca2ab",
"assets/assets/mahle_s.png": "30d5be4b36f9046f4f8eae2954f5db62",
"assets/assets/map.png": "540b6bf887ac94e2a7b1efcbf69cf0e2",
"assets/assets/moniter.png": "06acbd68dad02da3b19959e5a405d8e0",
"assets/assets/new_file.riv": "cc6aa18bc76fcdcceb63db5cdfb8e0e4",
"assets/assets/product.png": "29fb7b5dce21ed21d5735b78e81ecfe7",
"assets/assets/product_intro.png": "6da18011acf025a3c81295eab26daac4",
"assets/assets/profile_1.png": "cfa1c70a1535c8dcb53cbbaaf049e631",
"assets/assets/profile_2.png": "a1a96baf97e10dfcdbbdede2f3ce0096",
"assets/assets/profile_3.png": "be27f32aa8603bc8f30d42aedeb2fea9",
"assets/assets/rocket.png": "635632cb774d04105e39f150c88a7c55",
"assets/assets/services_data_1.png": "054edf1fbae0251c5c18724efd3de903",
"assets/assets/services_intro.png": "f6af97eb7fc13c40bc735b038bd9682d",
"assets/assets/tumblr_icon.png": "926fb03cf807c6ff25e38ef07985f418",
"assets/assets/twitter_icon.png": "c95fcbba06ceb21959cc45de7d279662",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b3c155d06c556d8e98497cb21740bbbf",
"assets/NOTICES": "9882e9c527f5b250f15e66fc2399a15e",
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
"index.html": "3a2a7c98994059d50b51997f3db1191b",
"/": "3a2a7c98994059d50b51997f3db1191b",
"main.dart.js": "8ea19b4970fe7290a436b5558717c51d",
"manifest.json": "0ee6e771b36276a70983daa8628dcd58",
"version.json": "b7e75f8a404010120dda07185210d225"};
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
