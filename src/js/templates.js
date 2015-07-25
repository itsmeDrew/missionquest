define(['angular'], function(angular) { 'use strict'; return angular.module("App.Templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("partials/_footer.html","<footer class=\"footer-main col--sm-12 row\">\n  <section class=\"footer-cta row\">\n    <div class=\"container\">\n      <div class=\"footer-cta__heading--wrapper col--sm-12 col--md-6\">\n        <span class=\"footer-cta__heading text--white text--uppercase\">call us at</span>\n        <span class=\"footer-cta__heading text--grey text--uppercase\">{{ mq.phone }}</span>\n      </div>\n      <div class=\"footer-cta__quote--wrapper col--sm-12 col--md-6\">\n        <form action=\"#\" id=\"quote\">\n          <input class=\"footer-cta__quote--input\" type=\"text\" placeholder=\"email address\">\n          <input class=\"footer-cta__quote--submit btn btn-primary\" type=\"submit\">\n        </form>\n      </div>\n    </div>\n  </section>\n  <section class=\"footer-main__content--wrapper clearfix\">\n    <div class=\"container\">\n      <div class=\"col--md-4\">\n        <ul>\n          <li ng-repeat=\"page in footer.pages\">\n            <a class=\"footer-main__heading text--uppercase\" href=\"#\">{{ page.title }}</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col--md-4\">\n        <h3 class=\"footer-main__heading text--uppercase\">products</h3>\n        <ul>\n          <li ng-repeat=\"category in footer.categories\">\n            <a class=\"footer-main__link\" ui-sref=\"home.category({ catSlug: category.slug })\">{{ category.name }}</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col--md-4\">\n\n      </div>\n    </div>\n  </section>\n</footer>");
$templateCache.put("partials/_header.html","<header class=\"header-main\" ng-class=\"{ \'hero\': header.hero }\">\n  <section class=\"header-main__top row clearfix\">\n    <div class=\"container header-main__container row\">\n      <div class=\"header-main__wrapper--left col--sm-4\">\n        <a ui-sref=\"home\" href=\"#\"><img class=\"header-main__logo--large hidden--sm\" src=\"../assets/img/logo.jpg\" alt=\"\"></a>\n        <a ui-sref=\"home\" href=\"\"><img class=\"header-main__logo--small hidden--lg\" src=\"../assets/img/logo-small.png\" alt=\"\"></a>\n      </div>\n      <!-- ** end left-->\n      <div class=\"header-main__wrapper--right col--sm-4 col--sm-push-4 col--md-7 col--md-push-1 col--lg-6 col--lg-push-2\">\n        <div class=\"header-main__contact-section col--sm-5 hidden--sm\">\n          <span class=\"header-main__phone\">{{ mq.phone }}</span>\n          <a class=\"header-main__mail--link\" href=\"mailto:{{ mq.email }}\"><i class=\"fa fa-envelope-o\"></i></a>\n        </div>\n        <div class=\"js-search-bar header-main__search--wrapper col--sm-6 col--sm-push-1 hidden--sm\">\n          <form ng-submit=\"header.submit(search.term)\">\n            <input class=\"header-main__search--input\" type=\"text\" placeholder=\"find a product...\" ng-model=\"search.term\">\n          </form>\n        </div>\n      </div>\n      <section class=\"header-mobile__wrapper hidden--lg\">\n          <div class=\"header-mobile__wrapper--icon\">\n            <a href=\"#\" class=\"header-mobile__icon--link\" ng-click=\"header.toggleSearch()\">\n              <i class=\"header-mobile__icon--search fa fa-search\"></i>\n            </a>\n          </div>\n          <div class=\"header-mobile__wrapper--icon\">\n            <a href=\"#\" class=\"header-mobile__icon--link\" ng-click=\"header.toggleMenu()\">\n              <i class=\"js-mobile-menu header-mobile__icon--bars fa fa-bars\"></i>\n            </a>\n          </div>\n        </section>\n      <!-- ** end right-->\n    </div>\n    <div class=\"header-mobile__wrapper--search hidden--lg\">\n      <form ng-submit=\"header.submit(search.term)\">\n        <input class=\"header-mobile__search--input\" type=\"text\" placeholder=\"find a product...\" ng-model=\"search.term\">\n      </form>\n    </div>\n  </section>\n  <section ui-view=\"nav\"></section>\n</header>");
$templateCache.put("partials/_loading.html","<div class=\"loading-container\" ng-hide=\"search.loaded || category.loaded\">\n  <div class=\"loading-container__wrapper--icon\">\n    <i class=\"loading-container__icon fa fa-cog fa-spin\"></i>\n  </div>\n</div>");
$templateCache.put("partials/_product-block.html","<div class=\"product-display__wrapper--image\">\n  <a ui-sref=\".category.product({ postID: product.ID, postSlug: product.slug })\">\n    <img\n      class=\"product-display__image\"\n      ng-if=\"product.custom_fields.product_images\"\n      src=\"{{ product.custom_fields.product_images[0].product_image.sizes.large }}\"\n      alt=\"{{ product.custom_fields.product_images.alt }}\"\n      >\n  </a>\n</div>\n<div class=\"product-display__details--wrapper\">\n  <div class=\"product-display__link--wrapper\">\n    <a class=\"product-display__link\" ui-sref=\"home.category.product({ postID: product.ID, postSlug: product.slug })\">\n      {{ product.title }}\n    </a>\n  </div>\n  <div class=\"product-display__category--wrapper\">\n    <a class=\"product-display__category--link\" ui-sref=\"home.category({ catSlug: product.terms.product_category[0].slug })\">{{ product.terms.product_category[0].name }}</a>\n  </div>\n  <div class=\"made-in-usa--wrapper\">\n    <img ng-if=\"product.custom_fields.made_in_usa\" class=\"made-in-usa--image\" src=\"../assets/img/ico-made-in-usa.jpg\" alt=\"Made In USA\">\n  </div>\n  <div class=\"product-display__wrapper--features\">\n    <div ng-if=\"product.custom_fields.featured_product\" class=\"product-display__featured--wrapper text--capitalize\">\n      featured\n    </div>\n  </div>\n</div>");
$templateCache.put("partials/_sidebar-category.html","<div class=\"category-sidebar--wrapper\" ng-init=\"sidebar.getCategories()\">\n  <div class=\"category-sidebar__list-group\">\n    <h4 class=\"category-sidebar__heading text--uppercase\">product categories</h4>\n    <ul class=\"category-sidebar__list\">\n      <li ng-repeat=\"cat in sidebar.categories\" class=\"category-sidebar__list-item\">\n        <a href=\"#\" ng-click=\"sidebar.switchState(cat.slug)\" class=\"category-sidebar__link text--capitalize\">{{ cat.name }}</a>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"category-sidebar--wrapper\">\n  <div class=\"category-sidebar__list-group\">\n    <h4 class=\"category-sidebar__heading text--uppercase\">{{sidebar.catSlug}} categories</h4>\n    <ul class=\"category-sidebar__list\">\n      <li ng-repeat=\"cat in sidebar.childCategories\" class=\"category-sidebar__list-item\">\n        <a href=\"#\" ng-click=\"sidebar.switchState(cat.slug)\" class=\"category-sidebar__link text--capitalize\">{{ cat.name }}</a>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"category-sidebar--wrapper\" ng-show=\"sidebar.isCategoryState\">\n  <div class=\"category-sidebar__list-group\">\n    <h4 class=\"category-sidebar__heading text--uppercase\">Filter By Gender</h4>\n    <ul class=\"category-sidebar__list\">\n      <li class=\"category-sidebar__list-item\">\n        <a href=\"#\" class=\"category-sidebar__link text--capitalize\" ng-click=\"category.setFacet(\'male\')\">male</a>\n      </li>\n      <li class=\"category-sidebar__list-item\">\n        <a href=\"#\" class=\"category-sidebar__link text--capitalize\" ng-click=\"category.setFacet(\'female\')\">female</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"category-sidebar__list-group\">\n    <h4 class=\"category-sidebar__heading text--uppercase\">Filter By Gender</h4>\n    <ul class=\"category-sidebar__list\">\n      <li class=\"category-sidebar__list-item\">\n        <a href=\"#\" class=\"category-sidebar__link text--capitalize\" ng-click=\"category.setFacet(\'made_in_usa\')\">made in usa</a>\n      </li>\n    </ul>\n  </div>\n</div>");
$templateCache.put("templates/category.tpl.html","<div class=\"container row\">\n  <category-sidebar class=\"col--md-3\"></category-sidebar>\n  <div class=\"category__results--wrapper col--md-9\">\n    <header class=\"category__header clearfix\">\n      <div class=\"category__heading--wrapper\">\n        <h2 class=\"category__heading text--capitalize\">{{category.name}}</h2>\n        <h2 ng-if=\"category.facet\" class=\"category__heading text--capitalize\">Filter: {{category.facet}}</h2>\n      </div>\n      <div class=\"category__filter\">\n        <label class=\"category__label\">products per page</label>\n        <select\n          class=\"category__input--select\"\n          ng-options=\"option.id as option.value for option in category.perPageOptions\"\n          ng-model=\"category.perPage\"\n          ng-change=\"category.updatePostsPerPage()\"\n          ng-init=\"category.perPage=category.perPage\">\n        </select>\n      </div>\n    </header>\n    <div class=\"product-display__wrapper\">\n      <ul class=\"product-display__list\">\n        <li class=\"product-display__item\" ng-repeat=\"product in category.products | limitTo:category.perPage:category.page*category.perPage\">\n          <product-block></product-block>\n        </li>\n      </ul>\n    </div>\n    <div class=\"pagination--wrapper clearfix\">\n      <div class=\"pagination__buttons--wrapper\">\n        <button class=\"btn-prev\" ng-show=\"category.page > 0\" ng-click=\"category.prevPage()\">\n          <i class=\"fa fa-arrow-left\"></i>\n        </button>\n        <button class=\"btn-next\" ng-show=\"category.page + 1 !== category.totalPages\" ng-click=\"category.nextPage()\">\n          <i class=\"fa fa-arrow-right\"></i>\n        </button>\n      </div>\n      <span class=\"pagination__current-page text--capitalize\">page {{ category.page + 1 }} out of {{ category.totalPages }}</span>\n    </div>\n\n\n    <div ng-show=\"category.totalPosts === 0\">\n      <h2>no results to show</h2>\n    </div>\n  </div>\n</div>\n\n<loading></loading>\n\n\n");
$templateCache.put("templates/home.tpl.html","<home-slider></home-slider>\n<div class=\"home-content__wrapper\">\n  <div class=\"container\">\n    <header class=\"home-content__header row\">\n      <div class=\"home-content__heading col--md-6\">\n        <h2 class=\"heading--rule\">new products</h2>\n      </div>\n      <div class=\"home-content__btn--wrapper col--md-4 col--md-push-2\">\n        <a class=\"home-content__btn btn-primary--lines\">view all categories</a>\n      </div>\n    </header>\n    <div class=\"product-display__wrapper row\">\n      <ul class=\"product-display__list\">\n        <li class=\"product-dipslay__item col--md-3\" ng-repeat=\"product in home.recentProducts\">\n          <product-block></product-block>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("templates/nav.tpl.html","<section class=\"js-mobile-nav nav-main__wrapper\">\n  <div class=\"container\">\n    <nav class=\"nav-main\">\n      <ul class=\"nav-main__list\">\n        <li class=\"nav-main__list-item\" ng-repeat=\"category in nav.categories\">\n          <a class=\"nav-main__list-item--link\"\n            ng-click=\"nav.toggleMenu()\"\n            ui-sref=\".category({ catSlug: category.slug })\">\n              {{category.name}}\n          </a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</section>");
$templateCache.put("templates/post.tpl.html","Post ID: {{ post.post.ID }}\nPost Title: {{ post.post.title }}");
$templateCache.put("templates/products.tpl.html","<!-- product.item -->\n<div class=\"container row\">\n  <section class=\"product-slider col--sm-12 col--md-5 \">\n    <product-slider></product-slider>\n  </section>\n  <section class=\"product-overview col--sm-12 col--md-6 col--md-push-1\">\n    <header>\n      <h2 class=\"product-title\">{{product.item.title}}</h2>\n      <span ng-if=\"product.productDetails.sku\" class=\"product-sku\">SKU: {{product.productDetails.sku}}</span>\n      <div class=\"made-in-usa--wrapper\">\n        <img ng-if=\"product.madeInUsa\" class=\"made-in-usa--image\" src=\"../assets/img/ico-made-in-usa.jpg\" alt=\"Made In USA\">\n      </div>\n    </header>\n    <div class=\"product-share\">\n      <h4 class=\"product-share__heading text--capitalize\">share this product!</h4>\n      <a href=\"#\" class=\"btn-social--wrapper\">\n        <i class=\"btn-social fa fa-facebook\"></i>\n      </a>\n      <a href=\"#\" class=\"btn-social--wrapper\">\n        <i class=\"btn-social fa fa-twitter\"></i>\n      </a>\n      <a href=\"#\" class=\"btn-social--wrapper\">\n        <i class=\"btn-social fa fa-envelope-o\"></i>\n      </a>\n    </div>\n    <a href=\"#\" class=\"btn-quote\">get a quote</a>\n  </section>\n</div>\n<div class=\"product-details container row\">\n  <header>\n    <h2 class=\"text--capitalize\">{{product.item.title}} details</h2>\n  </header>\n  <div class=\"col--sm-12 col--md-5\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem reiciendis nobis, natus, voluptatem ullam quaerat. Possimus, ducimus, quasi. Dignissimos iste voluptatibus obcaecati laudantium saepe fugiat suscipit unde perspiciatis eius quo.</p>\n  </div>\n  <div class=\"col--sm-12 col--md-7\">\n    <ul class=\"product-details__list\">\n      <li ng-if=\"product.productDetails.manufacturer\" class=\"product-details__list-item\">\n        <span class=\"product-detail__heading text--capitalize\">manufacturer</span>\n        <span class=\"product-detail__detail text--capitalize\">{{product.productDetails.manufacturer}}</span>\n      </li>\n      <li ng-if=\"product.productDetails.sku\" class=\"product-details__list-item\">\n        <span class=\"product-detail__heading text--capitalize\">sku #</span>\n        <span class=\"product-detail__detail text--capitalize\">{{product.productDetails.sku}}</span>\n      </li>\n      <li ng-if=\"product.productDetails.colors_available\" class=\"product-details__list-item\">\n        <span class=\"product-detail__heading text--capitalize\">colors available</span>\n        <span class=\"product-detail__detail text--capitalize\">{{product.productDetails.colors_available}}</span>\n      </li>\n    </ul>\n  </div>\n</div>");
$templateCache.put("templates/results.tpl.html","<div ng-show=\"search.loaded\">\n  <h2>we found {{search.totalResults}} result[s] for {{ search.term }}</h2>\n  <ul>\n    <li ng-repeat=\"result in search.results\">\n      Post Title: {{ result.title }}\n    </li>\n  </ul>\n  <div ng-show=\"! search.totalResults\">no results were found. try searching again.</div>\n</div>\n\n<loading></loading>");
$templateCache.put("partials/sliders/_slider-home.html","<div class=\"js-home-slider home-slider--wrapper\" ng-init=\"home.setHero()\">\n  <div class=\"home-slider__slide\" ng-repeat=\"slide in home.sliderImages\">\n    <div class=\"container\">\n      <div class=\"home-slider__heading--wrapper\">\n        <h2 class=\"home-slider__heading\" style=\"color: {{ slide.slide_text_color }}\">{{ slide.slide_text }}</h2>\n        <a\n          class=\"home-slider__cta\"\n          style=\"background-color: {{ slide.slide_button_color }}\">\n          {{ slide.slide_button_text }}\n        </a>\n      </div>\n    </div>\n    <img class=\"home-slider__image\" src=\"{{ slide.slide_image.url }}\" alt=\"{{ slide.slide_image.alt }}\">\n  </div>\n</div>");
$templateCache.put("partials/sliders/_slider-products.html","<!-- product.item.custom_fields.product_images[0].product_image.url -->\n<div class=\"js-product-slider--display\">\n  <div class=\"product-slider__slide\" ng-repeat=\"image in product.sliderImages\">\n    <div class=\"product-slider__slide-content\">\n      <img class=\"product-slider__image\" src=\"{{ image.product_image.url }}\" alt=\"{{ image.product_image.alt }}\">\n    </div>\n  </div>\n</div>\n<div class=\"js-product-slider--nav product-slider--wrapper\">\n  <div class=\"product-slider__slide\" ng-repeat=\"image in product.sliderImages\">\n    <div class=\"product-slider__slide-content\">\n      <img class=\"product-slider__image\" src=\"{{ image.product_image.url }}\" alt=\"{{ image.product_image.alt }}\">\n    </div>\n  </div>\n</div>");}]);});