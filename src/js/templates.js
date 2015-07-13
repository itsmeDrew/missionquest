define(['angular'], function(angular) { 'use strict'; return angular.module("App.Templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("partials/_footer.html","<footer class=\"footer-main__wrapper col--sm-12 row\">\n  <div class=\"container\">\n    <div class=\"col--md-4\">\n      <ul>\n        <li><a href=\"#\">Specials</a></li>\n        <li><a href=\"#\">Our Mission</a></li>\n        <li><a href=\"#\">Contact Us</a></li>\n      </ul>\n    </div>\n    <div class=\"col--md-4\">\n      <h2>products</h2>\n      <ul>\n        <li ng-repeat=\"category in nav.categories\"><a ui-sref=\".category({ catId: {{ category.ID }} })\">{{ category.name }}</a></li>\n      </ul>\n    </div>\n    <div class=\"col--md-4\">\n\n    </div>\n  </div>\n</footer>");
$templateCache.put("partials/_header.html","<header class=\"header-main\">\n  <section class=\"header-main__top row clearfix\">\n    <div class=\"container header-main__container row\">\n      <div class=\"header-main__wrapper--left col--sm-4\">\n        <a ui-sref=\"home\" href=\"#\"><img class=\"header-main__logo--large hidden--sm\" src=\"../assets/img/logo.jpg\" alt=\"\"></a>\n        <a ui-sref=\"home\" href=\"\"><img class=\"header-main__logo--small hidden--lg\" src=\"../assets/img/logo-small.png\" alt=\"\"></a>\n      </div>\n      <!-- ** end left-->\n      <div class=\"header-main__wrapper--right col--sm-4 col--sm-push-4 col--md-7 col--md-push-1 col--lg-6 col--lg-push-2\">\n        <div class=\"header-main__contact-section col--sm-5 hidden--sm\">\n          <span class=\"header-main__phone\">{{ mq.phone }}</span>\n          <a class=\"header-main__mail--link\" href=\"mailto:{{ mq.email }}\"><i class=\"fa fa-envelope-o\"></i></a>\n        </div>\n        <div class=\"js-search-bar header-main__search--wrapper col--sm-6 col--sm-push-1 hidden--sm\">\n          <form ng-submit=\"header.submit(search.term)\">\n            <input class=\"header-main__search--input\" type=\"text\" placeholder=\"find a product...\" ng-model=\"search.term\">\n          </form>\n        </div>\n      </div>\n      <section class=\"header-mobile__wrapper hidden--lg\">\n          <div class=\"header-mobile__wrapper--icon\">\n            <a href=\"#\" class=\"header-mobile__icon--link\" ng-click=\"header.toggleSearch()\">\n              <i class=\"header-mobile__icon--search fa fa-search\"></i>\n            </a>\n          </div>\n          <div class=\"header-mobile__wrapper--icon\">\n            <a href=\"#\" class=\"header-mobile__icon--link\" ng-click=\"header.toggleMenu()\">\n              <i class=\"js-mobile-menu header-mobile__icon--bars fa fa-bars\"></i>\n            </a>\n          </div>\n        </section>\n      <!-- ** end right-->\n    </div>\n    <div class=\"header-mobile__wrapper--search hidden--lg\">\n      <form ng-submit=\"header.submit(search.term)\">\n        <input class=\"header-mobile__search--input\" type=\"text\" placeholder=\"find a product...\" ng-model=\"search.term\">\n      </form>\n    </div>\n  </section>\n  <section ui-view=\"nav\"></section>\n</header>");
$templateCache.put("partials/_loading.html","<div class=\"loading-container\" ng-hide=\"search.loaded || category.loaded\">\n  <div class=\"loading-container__wrapper--icon\">\n    <i class=\"loading-container__icon fa fa-cog fa-spin\"></i>\n  </div>\n</div>");
$templateCache.put("partials/_sidebar-browse.html","<div>sidebar-browse</div>");
$templateCache.put("templates/category.tpl.html","<div>\n  <ul>\n    <li ng-repeat=\"post in category.posts\"> Title: {{ post.title }}</li>\n  </ul>\n  <button ng-show=\"category.page !== category.totalPosts\" ng-click=\"category.nextPage()\">Next Page</button>\n  <button ng-show=\"category.page > 1\" ng-click=\"category.prevPage()\">Prev Page</button>\n  <div ng-show=\"category.totalPosts === 0\">\n    <h2>no results to show</h2>\n  </div>\n</div>\n\n<loading></loading>");
$templateCache.put("templates/home.tpl.html","<home-slider></home-slider>\n<div class=\"home__wrapper--content\">\n  <div class=\"container\">\n    <div class=\"home__wrapper--heading col--md-6\">\n      <h2 class=\"heading--rule\">new products</h2>\n    </div>\n    <div class=\"home__wrapper--button col--md-4 col--md-push-2\">\n      <a class=\"button-primary--lines\">view all categories</a>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("templates/nav.tpl.html","<section class=\"js-mobile-nav nav-main__wrapper\">\n  <div class=\"container\">\n    <nav class=\"nav-main\">\n      <ul class=\"nav-main__list\">\n        <li class=\"nav-main__list-item\" ng-repeat=\"category in nav.categories\">\n          <a class=\"nav-main__list-item--link\"\n            ng-init=\"nav.getChildren(category.ID)\"\n            ng-click=\"nav.toggleMenu()\"\n            ui-sref=\".category({ catId: {{ category.ID }} })\">\n              {{category.name}}\n          </a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</section>");
$templateCache.put("templates/products.tpl.html","<p>products template</p>");
$templateCache.put("templates/results.tpl.html","<div ng-show=\"search.loaded\">\n  <h2>we found {{search.totalResults}} result[s] for {{ search.term }}</h2>\n  <ul>\n    <li ng-repeat=\"result in search.results\">\n      Post Title: {{ result.title }}\n    </li>\n  </ul>\n  <div ng-show=\"! search.totalResults\">no results were found. try searching again.</div>\n</div>\n\n<loading></loading>");
$templateCache.put("partials/sliders/_slider-home.html","<div class=\"js-home-slider home-slider__wrapper\">\n  <div class=\"home-slider__slide\" ng-repeat=\"slide in home.sliderImages\">\n    <div class=\"container\">\n      <div class=\"home-slider__wrapper--heading\">\n        <h2 class=\"home-slider__heading\" style=\"color: {{ slide.slide_text_color }}\">{{ slide.slide_text }}</h2>\n      </div>\n    </div>\n    <img class=\"home-slider__image\" src=\"{{ slide.slide_image.url }}\" alt=\"{{ slide.slide_image.alt }}\">\n  </div>\n</div>");}]);});