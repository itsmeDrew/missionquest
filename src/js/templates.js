define(['angular'], function(angular) { 'use strict'; return angular.module("App.Templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("category.tpl.html","<ul>\n  <li ng-repeat=\"post in category.posts\"> Title: {{ post.title }}</li>\n</ul>\n<button ng-show=\"category.page !== category.totalPosts\" ng-click=\"category.nextPage()\">Next Page</button>\n<button ng-show=\"category.page > 1\" ng-click=\"category.prevPage()\">Prev Page</button>\n<div ng-show=\"category.totalPosts === 0\">\n  <h2>no results to show</h2>\n</div>");
$templateCache.put("home.tpl.html","<div ng-repeat=\"post in blog.posts.posts\">\n  {{post.title}}\n</div>\n\n<button ng-show=\"blog.page !== blog.posts.totalPages\" ng-click=\"blog.nextPage()\">Next</button>\n<button ng-show=\"blog.page > 1\" ng-click=\"blog.prevPage()\">Previous</button>\n<button ng-click=\"blog.updateLimit()\">Update</button>");
$templateCache.put("products.tpl.html","<p>products template</p>");
$templateCache.put("results.tpm.html","<h2>we found {{search.totalResults}} result[s] for {{ search.term }}</h2>\n<ul>\n  <li ng-repeat=\"result in search.results\">\n    Post Title: {{ result.title }}\n  </li>\n</ul>\n<div ng-show=\"!search.totalResults\">no results were found. try searching again.</div>");
$templateCache.put("partials/_footer.html","<p>footer</p>");
$templateCache.put("partials/_header.html","<header class=\"header-main\">\n  <section class=\"header-main__top\">\n    <div class=\"container\">\n      <img class=\"header-main__logo\" src=\"../assets/img/logo.jpg\" alt=\"\">\n    </div>\n  </section>\n  <section class=\"search-main\">\n    <input type=\"text\" ng-model=\"search.term\">\n    <button ng-click=\"header.submit(search.term)\">search\n  </section>\n  <section ui-view=\"nav\"></section>\n\n</header>");
$templateCache.put("partials/_nav-main.html","<section class=\"header-main__bottom\">\n  <div class=\"container\">\n    <nav class=\"nav-main\">\n      <ul>\n        <li ng-repeat=\"category in nav.categories\">\n          <a\n          ng-init=\"nav.getChildren(category.ID)\"\n          ng-click=\"category.updatePosts()\"\n          ui-sref=\".category({ catId: {{ category.ID }} })\">\n              {{category.name}}\n          </a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</section>");
$templateCache.put("partials/_sidebar-browse.html","<div>sidebar-browse</div>");}]);});