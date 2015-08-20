define(['angular'], function(angular) { 'use strict'; return angular.module("App.Templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("partials/_footer.html","<footer class=\"footer-main col--sm-12 row\">\n  <section class=\"footer-cta row\">\n    <div class=\"container\">\n      <div class=\"footer-cta__heading--wrapper col--sm-12 col--md-6\">\n        <span class=\"footer-cta__heading text--white text--uppercase\">call us at</span>\n        <span class=\"footer-cta__heading text--grey text--uppercase\">{{ mq.phone }}</span>\n      </div>\n      <div class=\"footer-cta__quote--wrapper col--sm-12 col--md-6\">\n        <form-quote-email></form-quote-email>\n      </div>\n    </div>\n  </section>\n  <section class=\"footer-main__content--wrapper clearfix\">\n    <div class=\"container\">\n      <div class=\"col--md-4\">\n        <ul>\n          <li ng-repeat=\"page in footer.pages\">\n            <a class=\"footer-main__heading text--uppercase\" ng-click=\"footer.goToPage(page.slug)\" href=\"#\">{{ page.title }}</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col--md-4\">\n        <h3 class=\"footer-main__heading text--uppercase\">products</h3>\n        <ul>\n          <li ng-repeat=\"category in footer.categories\">\n            <a class=\"footer-main__link\" ui-sref=\"home.category({ catSlug: category.slug })\">{{ category.name }}</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col--md-4\">\n\n      </div>\n    </div>\n  </section>\n</footer>");
$templateCache.put("partials/_header.html","<header class=\"header-main\">\n  <section class=\"header-main__top row clearfix\">\n    <div class=\"container header-main__container row\">\n      <div class=\"header-main__wrapper--left col--sm-4\">\n        <a ui-sref=\"home\" href=\"#\"><img class=\"header-main__logo--large hidden--sm\" src=\"../assets/img/logo.jpg\" alt=\"\"></a>\n        <a ui-sref=\"home\" href=\"\"><img class=\"header-main__logo--small hidden--lg\" src=\"../assets/img/logo-small.png\" alt=\"\"></a>\n      </div>\n      <!-- ** end left-->\n      <div class=\"header-main__wrapper--right col--sm-4 col--sm-push-4 col--md-7 col--md-push-1 col--lg-6 col--lg-push-2\">\n        <div class=\"header-main__contact-section col--sm-5 hidden--sm\">\n          <span class=\"header-main__phone\">{{ mq.phone }}</span>\n          <a class=\"header-main__mail--link\" href=\"mailto:{{ mq.email }}\"><i class=\"fa fa-envelope-o\"></i></a>\n        </div>\n        <div class=\"js-search-bar header-main__search--wrapper col--sm-6 col--sm-push-1 hidden--sm\">\n          <form ng-submit=\"header.submit(search.term)\">\n            <i class=\"header-main__search--icon fa fa-search\"></i>\n            <input class=\"header-main__search--input\" type=\"text\" placeholder=\"find a product...\" ng-model=\"search.term\">\n          </form>\n        </div>\n      </div>\n      <section class=\"header-mobile__wrapper hidden--lg\">\n          <div class=\"header-mobile__wrapper--icon\">\n            <a href=\"#\" class=\"header-mobile__icon--link\" ng-click=\"header.toggleSearch()\">\n              <i class=\"header-mobile__icon--search fa fa-search\"></i>\n            </a>\n          </div>\n          <div class=\"header-mobile__wrapper--icon\">\n            <a href=\"#\" class=\"header-mobile__icon--link\" ng-click=\"header.toggleMenu()\">\n              <i class=\"js-mobile-menu header-mobile__icon--bars fa fa-bars\"></i>\n            </a>\n          </div>\n        </section>\n      <!-- ** end right-->\n    </div>\n    <div class=\"header-mobile__wrapper--search hidden--lg\">\n      <form ng-submit=\"header.submit(search.term)\">\n        <input class=\"header-mobile__search--input\" type=\"text\" placeholder=\"find a product...\" ng-model=\"search.term\">\n      </form>\n    </div>\n  </section>\n  <section ui-view=\"nav\"></section>\n</header>");
$templateCache.put("partials/_loading.html","<div class=\"loading-container\" ng-hide=\"mq.loaded\">\n  <div class=\"loading-container__wrapper--icon\">\n    <i class=\"loading-container__icon fa fa-cog fa-spin\"></i>\n  </div>\n</div>");
$templateCache.put("partials/_product-block.html","<div class=\"product-block--wrapper\">\n  <div class=\"product-display__wrapper--image\">\n    <a ui-sref=\"home.product({ slug: product.slug })\">\n      <img\n        class=\"product-display__image\"\n        ng-if=\"product.custom_fields.product_images\"\n        src=\"{{ product.custom_fields.product_images[0].product_image.sizes.large }}\"\n        alt=\"{{ product.custom_fields.product_images.alt }}\"\n        >\n    </a>\n  </div>\n  <div class=\"product-display__details--wrapper clearfix\">\n    <div class=\"product-display__link--wrapper\">\n      <a class=\"product-display__link\" ui-sref=\"home.product({ slug: product.slug })\">\n        {{ product.title }}\n      </a>\n    </div>\n    <div class=\"product-display__category--wrapper\">\n      <a class=\"product-display__category--link\" ui-sref=\"home.category({ catSlug: product.terms.product_category[0].slug })\">{{ product.terms.product_category[0].name }}</a>\n    </div>\n    <div class=\"made-in-usa--wrapper\">\n      <img ng-if=\"product.custom_fields.made_in_usa\" class=\"made-in-usa--image\" src=\"../assets/img/ico-made-in-usa.jpg\" alt=\"Made In USA\">\n    </div>\n    <div class=\"product-display__wrapper--features\">\n      <div ng-if=\"product.custom_fields.featured_product\" class=\"product-display__featured--wrapper text--capitalize\">\n        featured\n      </div>\n    </div>\n  </div>\n</div>");
$templateCache.put("partials/_sidebar-category.html","<div class=\"category-sidebar--wrapper\" ng-init=\"sidebar.categories\">\n  <div class=\"category-sidebar__list-group\">\n    <h4 class=\"category-sidebar__heading text--uppercase\">product categories</h4>\n    <ul class=\"category-sidebar__list\">\n      <li ng-repeat=\"cat in sidebar.categories | orderBy: \'name\'\" class=\"category-sidebar__list-item\">\n        <a href=\"#\" ng-click=\"sidebar.switchState(cat.slug)\" class=\"category-sidebar__link text--capitalize\">{{ cat.name }}</a>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"category-sidebar--wrapper\" ng-show=\"sidebar.children.length\">\n  <div class=\"category-sidebar__list-group\">\n    <h4 class=\"category-sidebar__heading text--uppercase\">{{sidebar.catSlug}} categories</h4>\n    <ul class=\"category-sidebar__list\">\n      <li ng-repeat=\"cat in sidebar.children\" class=\"category-sidebar__list-item\">\n        <a href=\"#\" ng-click=\"sidebar.switchState(cat.slug)\" class=\"category-sidebar__link text--capitalize\">{{ cat.name }}</a>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"category-sidebar--wrapper\" ng-show=\"sidebar.isCategoryState\">\n  <div class=\"category-sidebar__list-group\">\n    <h4 class=\"category-sidebar__heading text--uppercase\">Filter By Gender</h4>\n    <ul class=\"category-sidebar__list\">\n      <li class=\"category-sidebar__list-item\">\n        <a href=\"#\" class=\"category-sidebar__link text--capitalize\" ng-click=\"category.setFacet(\'male\')\">male</a>\n      </li>\n      <li class=\"category-sidebar__list-item\">\n        <a href=\"#\" class=\"category-sidebar__link text--capitalize\" ng-click=\"category.setFacet(\'female\')\">female</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"category-sidebar__list-group\">\n    <h4 class=\"category-sidebar__heading text--uppercase\">Filter By Type</h4>\n    <ul class=\"category-sidebar__list\">\n      <li class=\"category-sidebar__list-item\">\n        <a href=\"#\" class=\"category-sidebar__link text--capitalize\" ng-click=\"category.setFacet(\'made_in_usa\')\">made in usa</a>\n      </li>\n    </ul>\n  </div>\n</div>");
$templateCache.put("templates/category.tpl.html","<div class=\"container row\">\n  <category-sidebar class=\"col--md-3\"></category-sidebar>\n  <div class=\"category__results--wrapper col--md-9\">\n    <header class=\"category__header clearfix\">\n      <div class=\"category__heading--wrapper\">\n        <h2 class=\"category__heading text--capitalize\">{{category.name}}</h2>\n        <h2 ng-if=\"category.facet\" class=\"category__heading text--capitalize\">Filter: {{category.facet}}</h2>\n      </div>\n      <div class=\"category__filter\">\n        <label class=\"category__label\">products per page</label>\n        <select\n          class=\"category__input--select\"\n          ng-options=\"option.id as option.value for option in mq.perPageOptions\"\n          ng-model=\"category.perPage\"\n          ng-change=\"category.updatePostsPerPage(category.perPage)\"\n          ng-init=\"category.perPage=mq.perPage\">\n        </select>\n      </div>\n      <div class=\"category__filter\">\n        <label class=\"category__label\">order by</label>\n        <select\n          class=\"category__input--select\"\n          ng-options=\"orderOption.id as orderOption.value for orderOption in mq.orderByOptions\"\n          ng-model=\"orderOption.value\"\n          ng-change=\"category.updateOrderBy(orderOption.value)\"\n          ng-init=\"orderOption.value=\'ID\'\">\n        </select>\n        <i ng-click=\"category.updateOrder()\" ng-if=\"category.order === \'ASC\'\" class=\"category__filter--toggle fa fa-arrow-up\"></i>\n        <i ng-click=\"category.updateOrder()\" ng-if=\"category.order === \'DESC\' || category.order === \'\'\" class=\"category__filter--toggle fa fa-arrow-down\"></i>\n      </div>\n    </header>\n    <div class=\"product-display__wrapper\">\n      <ul class=\"product-display__list\">\n        <li class=\"product-display__item\" ng-repeat=\"product in category.products\">\n          <product-block></product-block>\n        </li>\n      </ul>\n    </div>\n    <div class=\"pagination--wrapper clearfix\">\n      <div class=\"pagination__buttons--wrapper\">\n        <button class=\"btn-prev\" ng-show=\"category.page > 1\" ng-click=\"category.prevPage()\">\n          <i class=\"fa fa-arrow-left\"></i>\n        </button>\n        <button class=\"btn-next\" ng-show=\"category.page !== category.totalPages\" ng-click=\"category.nextPage()\">\n          <i class=\"fa fa-arrow-right\"></i>\n        </button>\n      </div>\n      <span class=\"pagination__current-page text--capitalize\">page {{ category.page }} out of {{ category.totalPages }}</span>\n    </div>\n\n\n    <div ng-show=\"category.totalPosts === 0\">\n      <h2>no results to show</h2>\n    </div>\n  </div>\n</div>\n\n");
$templateCache.put("templates/home.tpl.html","<home-slider></home-slider>\n<div class=\"home-content__wrapper\">\n  <div class=\"container\">\n    <header class=\"home-content__header row\">\n      <div class=\"home-content__heading col--md-6\">\n        <h2 class=\"heading--rule\">new products</h2>\n      </div>\n      <div class=\"home-content__btn--wrapper col--md-4 col--md-push-2\">\n        <a class=\"home-content__btn btn-primary--lines\" ui-sref=\".category({ catSlug: apparel })\">browse products</a>\n      </div>\n    </header>\n    <div class=\"product-display__wrapper row\">\n      <ul class=\"product-display__list\">\n        <li class=\"col--md-2\" ng-repeat=\"product in home.recentProducts\">\n          <product-block></product-block>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("templates/nav.tpl.html","<section class=\"js-mobile-nav nav-main__wrapper\">\n  <div class=\"container\">\n    <nav class=\"nav-main\">\n      <ul class=\"nav-main__list\">\n        <li class=\"nav-main__list-item\" ng-repeat=\"category in nav.categories\">\n          <a class=\"nav-main__list-item--link\"\n            ng-click=\"nav.toggleMenu()\"\n            ui-sref=\".category({ catSlug: category.slug })\">\n              {{category.name}}\n          </a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</section>");
$templateCache.put("templates/page.tpl.html","<div class=\"hero-default\" style=\"background-image: url(\'{{page.heroImg.url}}\'); height: {{page.hero.hero_size}}px\" ng-init=\"mq.setHero()\">\n    <div class=\"hero-default__content text--center\">\n      <div class=\"container\">\n      <h2 class=\"hero-default__heading text--uppercase\" style=\"color: {{page.hero.hero_text_color}}\">{{page.heroText}}</h2>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <header class=\"page-header\">\n    <h2>{{page.page.title}}</h2>\n  </header>\n  <section class=\"page-content\">\n    <article class=\"article-content\">\n      <div ng-bind-html=\"page.contentHTML()\"></div>\n    </article>\n  </section>\n</div>");
$templateCache.put("templates/post.tpl.html","Post ID: {{ post.post.ID }}\nPost Title: {{ post.post.title }}");
$templateCache.put("templates/products.tpl.html","<!-- product.item -->\n<section class=\"product-details--wrapper\">\n  <div class=\"container row\">\n    <section class=\"product-slider col--sm-12 col--md-5 col--md-push-1\">\n      <div>\n        <div class=\"js-product-slider--display\">\n          <div class=\"product-slider__slide\" ng-repeat=\"image in product.sliderImages\" repeat-complete=\"product.onComplete()\">\n            <div class=\"product-slider__slide-content\">\n              <img class=\"product-slider__image\" src=\"{{ image.product_image.url }}\" alt=\"{{ image.product_image.alt }}\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"product-available--wrapper\" ng-show=\"product.customFields.also_available_in\">\n        <a\n          class=\"product-available__link btn-secondary\"\n          ui-sref=\"home.product({ slug: product.customFields.gender_page_link.post_name })\">\n          also available in {{product.customFields.also_available_in}}\n        </a>\n      </div>\n      <div class=\"product-share\">\n        <a href=\"https://www.facebook.com/sharer/sharer.php\" class=\"btn-social--wrapper\" target=\"_blank\">\n          <i class=\"btn-social fa fa-facebook\"></i>\n        </a>\n        <a href=\"#\" class=\"btn-social--wrapper\">\n          <i class=\"btn-social fa fa-twitter\"></i>\n        </a>\n        <a href=\"#\" class=\"btn-social--wrapper\">\n          <i class=\"btn-social fa fa-envelope-o\"></i>\n        </a>\n      </div>\n    </section>\n    <section class=\"product-overview col--sm-12 col--md-5 col--md-push-1\">\n      <header class=\"product-overview__header clearfix\">\n        <h2 class=\"product-title__product text--uppercase\">{{product.item.title}}</h2>\n        <h3 ng-if=\"product.productDetails.manufacturer\" class=\"product-title__manufacturer text--uppercase\">by {{product.productDetails.manufacturer}}</h3>\n        <div class=\"product-overview__header--group\">\n          <span ng-if=\"product.productDetails.sku\" class=\"product-detail__detail product-sku\">SKU: {{product.productDetails.sku}}</span>\n          <div class=\"made-in-usa--wrapper\" ng-if=\"product.madeInUsa\">\n            <img class=\"made-in-usa--image\" src=\"../assets/img/ico-made-in-usa.jpg\" alt=\"Made In USA\">\n            <span class=\"made-in-usa__text text--capitalize\">made in usa</span>\n          </div>\n        </div>\n      </header>\n      <section class=\"product-details--wrapper\">\n        <div class=\"product-details clearfix\">\n          <div class=\"product-slider__controls\">\n            <div class=\"js-product-slider--nav product-slider--wrapper\">\n              <div class=\"product-slider__slide\" ng-repeat=\"image in product.sliderImages\" repeat-complete=\"onComplete()\">\n                <div class=\"product-slider__slide-content\">\n                  <img class=\"product-slider__image\" src=\"{{ image.product_image.url }}\" alt=\"{{ image.product_image.alt }}\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <a href=\"#\" class=\"btn-quote\" ng-click=\"quoteRequested = true\" ng-hide=\"quoteRequested\">get a quote</a>\n        <form-quote-product ng-show=\"quoteRequested\"></form-quote-product>\n      </section>\n      <div class=\"product-details row\">\n        <div class=\"col--sm-12\">\n          <p class=\"product-details__description\">{{product.customFields.product_description}}</p>\n        </div>\n      </div>\n    </section>\n  </div>\n</section>\n<section class=\"additional-details--wrapper\" ng-if=\"product.customFields.additional_details\">\n  <div class=\"container row\">\n    <div class=\"col--sm-12 col--md-3 col--md-push-2\">\n      <img class=\"product-slider__image\" src=\"{{ product.sliderImages[0].product_image.url }}\" alt=\"{{ image.product_image.alt }}\">\n    </div>\n    <div class=\"product-overview col--sm-12 col--md-5 col--md-push-2\">\n      <h2 class=\"additional-details__heading text--uppercase\">product details</h2>\n      <ul class=\"additional-details__list\">\n        <li ng-repeat=\"detail in product.customFields.additional_details\" class=\"additional-details__list-item\">\n          <div class=\"row\">\n            <div class=\"col--md-4\"><span class=\"additional-details__label\">{{detail.label}}</span></div>\n            <div class=\"col--md-8\">\n              <span class=\"additional-details__description\">{{detail.description}}</span>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</section>");
$templateCache.put("templates/results.tpl.html","<div class=\"container row\">\n  <category-sidebar class=\"col--md-3\"></category-sidebar>\n  <div class=\"category__results--wrapper col--md-9\">\n    <header class=\"category__header clearfix\">\n      <div class=\"category__heading--wrapper\">\n        <h2 class=\"category__heading text--capitalize\">showing results for {{search.term}}</h2>\n        <h2 ng-if=\"category.facet\" class=\"category__heading text--capitalize\">Filter: {{category.facet}}</h2>\n      </div>\n      <div class=\"category__filter\">\n        <label class=\"category__label\">products per page</label>\n        <select\n          class=\"category__input--select\"\n          ng-options=\"option.id as option.value for option in mq.perPageOptions\"\n          ng-model=\"search.perPage\"\n          ng-change=\"search.updatePostsPerPage()\"\n          ng-init=\"search.perPage=mq.perPage\">\n        </select>\n      </div>\n    </header>\n    <div class=\"product-display__wrapper\">\n      <ul class=\"product-display__list\">\n        <li class=\"product-display__item\" ng-repeat=\"product in search.results | limitTo:result.search:search.page*search.perPage\">\n          <product-block></product-block>\n        </li>\n      </ul>\n    </div>\n    <div class=\"pagination--wrapper clearfix\">\n      <div class=\"pagination__buttons--wrapper\">\n        <button class=\"btn-prev\" ng-show=\"search.page > 0\" ng-click=\"search.prevPage()\">\n          <i class=\"fa fa-arrow-left\"></i>\n        </button>\n        <button class=\"btn-next\" ng-show=\"search.page + 1 !== search.totalPages\" ng-click=\"search.nextPage()\">\n          <i class=\"fa fa-arrow-right\"></i>\n        </button>\n      </div>\n      <span class=\"pagination__current-page text--capitalize\">page {{ search.page + 1 }} out of {{ search.totalPages }}</span>\n    </div>\n\n    <div ng-show=\"category.totalResults === 0\">\n      <h2>no results to show</h2>\n    </div>\n  </div>\n</div>\n\n\n");
$templateCache.put("partials/forms/_form-quote-email.html","<div class=\"form-quote-email--wrapper\">\n  <form ng-submit=\"form.submitForm(1)\" name=\"form.newsletter\" ng-hide=\"form.newsletterSubmitted\" novalidate>\n    <div class=\"form-quote__input--wrapper\">\n      <input class=\"form-quote-email__input text--capitalize\" name=\"input_1\" type=\"email\" placeholder=\"email address\" ng-model=\"form.email\" required ng-email>\n      <span class=\"error text--uppercase\" ng-show=\"form.newsletter.input_1.$error.required && form.newsletter.$dirty\">Required!</span>\n      <span class=\"error text--uppercase\" ng-show=\"form.newsletter.input_1.$error.email && form.newsletter.$dirty\">An email is required!</span>\n    </div>\n    <button class=\"form-quote-email__btn--submit btn btn-quote\">request a quote</button>\n  </form>\n  <div class=\"form-confirmation\">\n    <h4 class=\"form-quote-email__confirmation-heading\" ng-show=\"form.newsletterSubmitted\">Thanks! We will get in touch!</h4>\n  </div>\n</div>\n\n");
$templateCache.put("partials/forms/_form-quote-product.html","<div class=\"form-quote-product__wrapper\">\n  <form ng-submit=\"productForm.submitForm(3, product.item.title)\" name=\"productForm.newsletter\" ng-hide=\"productForm.newsletterSubmitted\" novalidate>\n    <div class=\"form-quote__input--wrapper\">\n      <input class=\"form-quote-product__input text--lowercase\" name=\"input_1\" type=\"email\" placeholder=\"email address\" ng-model=\"productForm.email\" required ng-email>\n      <span class=\"error text--uppercase\" ng-show=\"productForm.newsletter.input_1.$error.required && productForm.newsletter.$dirty\">Required!</span>\n      <span class=\"error text--uppercase\" ng-show=\"productForm.newsletter.input_1.$error.email && productForm.newsletter.$dirty\">Email Is Required!</span>\n    </div>\n    <span class=\"form-quote-product__product-title disabled\">Interested In: {{product.item.title}}</span>\n    <button class=\"form-quote-product__btn--submit btn btn-quote\">request a quote</button>\n    <button class=\"form-quote-product__btn--cancel btn btn-primary\" ng-show=\"quoteRequested\" ng-click=\"quoteRequested = false\">cancel</button>\n  </form>\n  <div class=\"form-confirmation\" ng-show=\"productForm.newsletterSubmitted\">\n    <i class=\"form-confirmation__icon fa fa-check-circle-o\"></i>\n    <p class=\"form-quote-product__confirmation-message\">Thanks! We will be in touch soon with a quote on {{product.item.title}}. Meanwhile keep browsing!</p>\n  </div>\n</div>\n\n");
$templateCache.put("partials/sliders/_slider-home.html","<div class=\"js-home-slider home-slider--wrapper\" ng-init=\"mq.setHero()\">\n  <div class=\"home-slider__slide\" style=\"background-image:url(\'{{ slide.slide_image.url }}\');\" ng-repeat=\"slide in home.sliderImages\" repeat-complete=\"onComplete()\" bind-once>\n    <div class=\"container\">\n      <div class=\"home-slider__heading--wrapper\">\n        <h2 class=\"home-slider__heading\" style=\"color: {{ slide.slide_text_color }}\">{{ slide.slide_text }}</h2>\n        <a\n          class=\"home-slider__cta\"\n          style=\"background-color: {{ slide.slide_button_color }}\"\n          ui-sref=\"home.product({ postID: slide.slide_button_link.ID })\">\n          {{ slide.slide_button_text }}\n        </a>\n      </div>\n    </div>\n  </div>\n</div>");
$templateCache.put("partials/sliders/_slider-products.html","");}]);});