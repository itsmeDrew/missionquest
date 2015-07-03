define(['angular'], function(angular) { 'use strict'; return angular.module("App.Templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("default.tpl.html","<p>def template</p>");
$templateCache.put("home.html","<p>home template</p>");
$templateCache.put("products.html","<p>products template</p>");
$templateCache.put("test.tpl.html","<div>\n  Hello Worlds\n</div>");
$templateCache.put("partials/_footer.html","<p>footer</p>");
$templateCache.put("partials/_header.html","<div class=\"ul\">\n    <li ui-sref-active=\"active\"><a ui-sref=\".default\">home</a></li>\n    <li ui-sref-active=\"active\"><a ui-sref=\".products\">products</a></li>\n</div>");
$templateCache.put("partials/content.html","<p>this is content</p>");}]);});