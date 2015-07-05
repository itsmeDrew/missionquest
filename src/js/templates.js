define(['angular'], function(angular) { 'use strict'; return angular.module("App.Templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("home.tpl.html","<div ng-repeat=\"post in mq.postData\">\n  {{post.title}}\n</div>");
$templateCache.put("products.tpl.html","<p>products template</p>");
$templateCache.put("partials/_footer.html","<p>footer</p>");
$templateCache.put("partials/_header.html","<header class=\"header-main\">\n  <section class=\"header-main__top\">\n    <div class=\"container\">\n      <img class=\"header-main__logo\" src=\"../assets/img/logo.jpg\" alt=\"\">\n    </div>\n  </section>\n  <section ui-view=\"nav\"></section>\n</header>");
$templateCache.put("partials/_nav-main.html","<section class=\"header-main__bottom\">\n  <div class=\"container\">\n    <nav class=\"nav-main\">\n    </nav>\n  </div>\n</section>");
$templateCache.put("partials/_sidebar-browse.html","<div>sidebar-browse</div>");}]);});