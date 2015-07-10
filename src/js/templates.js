define(['angular'], function(angular) { 'use strict'; return angular.module("App.Templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("category.tpl.html","<ul>\n  <li ng-repeat=\"post in category.posts\"> Title: {{ post.title }}</li>\n</ul>\n<button ng-show=\"category.page !== category.totalPosts\" ng-click=\"category.nextPage()\">Next Page</button>\n<button ng-show=\"category.page > 1\" ng-click=\"category.prevPage()\">Prev Page</button>\n<div ng-show=\"category.totalPosts === 0\">\n  <h2>no results to show</h2>\n</div>");
$templateCache.put("home.tpl.html","<div ng-repeat=\"post in blog.posts.posts\">\n  {{ post.title }}\n  <img ng-if=\"post.meta.product_images\" width=\"100px\" src=\"{{ post.meta.product_images.url }}\" alt=\"\">\n</div>\n\n<button ng-show=\"blog.page !== blog.posts.totalPages\" ng-click=\"blog.nextPage()\">Next</button>\n<button ng-show=\"blog.page > 1\" ng-click=\"blog.prevPage()\">Previous</button>\n<button ng-click=\"blog.updateLimit()\">Update</button>");
$templateCache.put("products.tpl.html","<p>products template</p>");
$templateCache.put("results.tpl.html","<div ng-show=\"search.loaded\">\n  <h2>we found {{search.totalResults}} result[s] for {{ search.term }}</h2>\n  <ul>\n    <li ng-repeat=\"result in search.results\">\n      Post Title: {{ result.title }}\n    </li>\n  </ul>\n  <div ng-show=\"! search.totalResults\">no results were found. try searching again.</div>\n</div>\n\n<loading></loading>");
$templateCache.put("partials/_footer.html","  <p>footer</p>\n  <link rel=\"stylesheet\" href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\">\n  </body>\n</html>");
$templateCache.put("partials/_header.html","<header class=\"header-main\">\n  <section class=\"header-main__top row clearfix\">\n    <div class=\"container header-main__container row\">\n      <div class=\"header-main__wrapper--left col--sm-4\">\n        <img class=\"header-main__logo--large hidden--sm\" src=\"../assets/img/logo.jpg\" alt=\"\">\n        <img class=\"header-main__logo--small hidden--lg\" src=\"../assets/img/logo-small.png\" alt=\"\">\n      </div>\n      <div class=\"header-main__wrapper--right col--sm-8 col--lg-6 col--lg-push-2 hidden--sm\">\n        <div class=\"header-main__contact-section col--sm-5 hidden--sm\">\n          <span class=\"header-main__phone\">{{ mq.phone }}</span>\n          <a class=\"header-main__mail--link\" href=\"mailto:{{mq.email}}\"><i class=\"fa fa-envelope-o\"></i></a>\n        </div>\n        <div class=\"header-main__search--wrapper col--sm-7\">\n          <form ng-submit=\"header.submit(search.term)\">\n            <input class=\"header-main__search--input\" type=\"text\" placeholder=\"find a product...\" ng-model=\"search.term\">\n          </form>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section ui-view=\"nav\"></section>\n\n</header>");
$templateCache.put("partials/_loading.html","<div class=\"loading-container\" ng-hide=\"search.loaded\">\n  <div class=\"loading-container__wrapper--icon\">\n    <i class=\"loading-container__icon fa fa-cog fa-spin\"></i>\n  </div>\n</div>");
$templateCache.put("partials/_nav-desktop.html","<section class=\"nav-main__wrapper\">\n  <div class=\"container\">\n    <nav class=\"nav-main\">\n      <ul class=\"nav-main__list\">\n        <li class=\"nav-main__list-item\" ng-repeat=\"category in nav.categories\">\n          <a\n          class=\"nav-main__list-item--link\"\n          ng-init=\"nav.getChildren(category.ID)\"\n          ng-click=\"category.updatePosts()\"\n          ui-sref=\".category({ catId: {{ category.ID }} })\">\n              {{category.name}}\n          </a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</section>");
$templateCache.put("partials/_nav-main.html","<nav-desktop class=\"hidden--sm\"></nav-desktop>\n<nav-mobile class=\"hidden--lg\"></nav-mobile>");
$templateCache.put("partials/_nav-mobile.html","<section class=\"nav-mobile__wrapper\">\n  <i class=\"fa fa-search\"></i>\n</section>");
$templateCache.put("partials/_sidebar-browse.html","<div>sidebar-browse</div>");}]);});