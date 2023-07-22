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
    "revision": "d581fecc9ff52cdda0b3c6013040f976"
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
    "url": "assets/js/12.f25b8557.js",
    "revision": "a0afab7ef8afa273165a21082874c7bb"
  },
  {
    "url": "assets/js/13.22a5038a.js",
    "revision": "8972b7c72d314ad6b6d13f0ede93dd3c"
  },
  {
    "url": "assets/js/14.96fc3e0c.js",
    "revision": "3c838cc1de6d470b613fab78d27d8833"
  },
  {
    "url": "assets/js/15.ed07ff7c.js",
    "revision": "a9267e8b45fc33171454fc7a2266bae5"
  },
  {
    "url": "assets/js/16.60f506c7.js",
    "revision": "f1a5ceffe3cb9147f59f01c5658b2d5e"
  },
  {
    "url": "assets/js/17.4d1b88c1.js",
    "revision": "9e03087b3f532f65b42b9202be0e7af8"
  },
  {
    "url": "assets/js/18.285cfffd.js",
    "revision": "e5de0936c508067e90878438b7492fa1"
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
    "url": "assets/js/app.ecba2e47.js",
    "revision": "3a4c1ce34af5c3017ffe5ba0835bb487"
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
    "revision": "7b26388ee5ef89a1d8863e628c31a59b"
  },
  {
    "url": "categories/java/index.html",
    "revision": "3fe40c6e96054e3b7e0b50c467bc3935"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "545e9363589451da11dfa0882edf9b93"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "794a0ca93690f015563a057190506dc6"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "68230d3400641680970a69c7d880ee90"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "5f0d65efa081bcdc717b97b98f898205"
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
    "revision": "657f1a1f0303b448429131df1cff57da"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "f78b702f0955a6e224a558037d3c55c4"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "8b9d42cbff42c702b56bbbd851838768"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "19ec31ba85047c95a84239c1987e678b"
  },
  {
    "url": "tags/js/index.html",
    "revision": "3faf9c545581470c8e7fb2edca87f687"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "0070cdfcdbfe1093e5914d9c866d85d9"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "d0516e2815e45850af36aafdb93d978c"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d9e11c182a7e7b22e5afc06b3317997f"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "d58167b060a60f5ffe91bd1b4c0b26d4"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "45870a4183623fd64e94e73cf1a324fd"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "fb77b108d92273b06c45ca02d226c70a"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "de720bb3f28f3c3cb18d21daef19e3f2"
  },
  {
    "url": "timeline/index.html",
    "revision": "3d5b950c9bd67ef92c2f922779db80f3"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "8d00899d0a01d2db3a5d3d919d820ce8"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "7afe8a16f2e392ca071cd7243886a948"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "20ec0c8c0d951ec7f3bdfab9b69a7ef6"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "9e316c58cdb2910a9f8f793fa61da226"
  },
  {
    "url": "生活分享/life.html",
    "revision": "195d4a043d1714f4df95bdce81b431b0"
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
