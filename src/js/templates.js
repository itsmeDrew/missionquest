define(['angular'], function(angular) { 'use strict'; return angular.module("App.Templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("home.tpl.html","<div ng-controller=\"MqController as mq\">\n  <div ng-repeat=\"post in mq.postData\">\n    {{post.title}}\n  </div>\n</div>");
$templateCache.put("products.tpl.html","<p>products template</p>");
$templateCache.put("partials/_footer.html","<p>footer</p>");
$templateCache.put("partials/_header.html","<header class=\"mq_header--primary\">\n  <div class=\"container\">\n    <div class=\"hidden-lg\">Desktop</div>\n  </div>\n</header>");
$templateCache.put("partials/_nav-main.html","<div class=\"ul\">\n    <li ui-sref-active=\"active\"><a ui-sref=\".home\">home</a></li>\n    <li ui-sref-active=\"active\"><a ui-sref=\".products\">products</a></li>\n</div>");
$templateCache.put("partials/_sidebar-browse.html","<div>sidebar-browse</div>");}]);});