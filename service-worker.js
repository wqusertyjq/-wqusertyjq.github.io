/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bd5de97acabb6754bccf1eea352ffab9"
  },
  {
    "url": "assets/css/0.styles.af910ead.css",
    "revision": "eb2887f2be661b62ef8115f48d369fc4"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.fef0ee14.js",
    "revision": "27ff1c0942065413d61eea98a0d04ae0"
  },
  {
    "url": "assets/js/10.536d4cff.js",
    "revision": "a67b5b890cae646e172dc8e5140f67dd"
  },
  {
    "url": "assets/js/11.e3e77ef4.js",
    "revision": "d05318d9a3c3a34c4406d9f7108c1e74"
  },
  {
    "url": "assets/js/12.c7169123.js",
    "revision": "b63690f3c1b00b7fdde76cd07b2ccdbe"
  },
  {
    "url": "assets/js/13.2788b439.js",
    "revision": "19fac4ae71a59ad8fcf576ef66d30eeb"
  },
  {
    "url": "assets/js/14.ea616527.js",
    "revision": "84c18ada04d7f96157697988af640b74"
  },
  {
    "url": "assets/js/15.ed07ff7c.js",
    "revision": "a9267e8b45fc33171454fc7a2266bae5"
  },
  {
    "url": "assets/js/16.1f0e2f0a.js",
    "revision": "77980ee985e85bc7ef25e57e082625c7"
  },
  {
    "url": "assets/js/17.85e574f5.js",
    "revision": "679e09d1bee7f18523c034f6c3e7dbed"
  },
  {
    "url": "assets/js/18.0aef85ba.js",
    "revision": "fc84691c0892cc60b633e6bd7852e7fa"
  },
  {
    "url": "assets/js/4.1ace6332.js",
    "revision": "ef6ed30fe655c1f2e83d42c6dcfbb735"
  },
  {
    "url": "assets/js/5.a3f14b16.js",
    "revision": "74edda22319e7e930102cff48d8a0a0f"
  },
  {
    "url": "assets/js/6.7c911a6f.js",
    "revision": "84577c89ced861633ba67cbdd2cda3d6"
  },
  {
    "url": "assets/js/7.63b4df15.js",
    "revision": "0c4cab82dd1bdf72eae35a07fdc99b91"
  },
  {
    "url": "assets/js/8.85ae13b9.js",
    "revision": "0fdbe356535365944e0ae86af746a958"
  },
  {
    "url": "assets/js/9.75ef85fd.js",
    "revision": "8753dff7e23be266fe0527623142a3cd"
  },
  {
    "url": "assets/js/app.f5e32ae5.js",
    "revision": "70671079960aca6a60a0e51236de2873"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.c5897f7a.js",
    "revision": "87a31bc352aa9f4ce4290b2dc3b78390"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "9282f4a422dcd6194b98ca9270d6a900"
  },
  {
    "url": "categories/java/index.html",
    "revision": "6f2b52a3683e6f4a8425061a764265e6"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "07dbe5243d358bba100f182f964bdeda"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "cfc5322a9a24dfdd184fb129194626f9"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "196440bf03f41c71140d56ed8c4ff5c8"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "705da54b0c7b9c5a2228bfe8a9d53a3e"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "a4b6b7c37cbf1d5116896344ec12aeb2"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "9b556e9020379857fbbe336c1dc79932"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "1cf36e76c6c1a8da1c87e64efc90f03e"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "64288e24eb5e6bf0e9327256587766df"
  },
  {
    "url": "tags/js/index.html",
    "revision": "85458a73c299dac6b2d4480af57fcb53"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "5059409e0cf54552aaa6b00dd5ba207b"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "0256143daf6f4b2adef698e367da1d39"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "342fa7d06a927648814e5ab0bf711a78"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "21346b5b9c65efdfab7698fb10e4be33"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "f4b35c56c99ea56f09951bc8a569dfb2"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "51faa1392db65111e32efc9af5cf8488"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "cb8f691b94bcee06ac1b760ba040c2be"
  },
  {
    "url": "timeline/index.html",
    "revision": "bd1e9587c9ca03c31d84a381d05ce032"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "c148c887223ca543c43380461880542b"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "f13fa67e17c9f16f34a89f6a93c05041"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "adb48f6cdd36d417f5d85b378566c54b"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "0689b090207822ed8d69c7e8d8777c40"
  },
  {
    "url": "生活分享/life.html",
    "revision": "35cca91f87de17e8a94393ba3e7479b1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
