'use strict';

define(
  [
    'angular'
  ],
  function(angular) {
    angular
      .module('App.MqService.Product.Category', [])
      .service('ProductCategory', ProductCategory);

      function ProductCategory($q, $http, config) {
        var _categories = [];

        this.getAll = getAll;
        this.findBySlug = findBySlug;

        init();

        function init() {
          $http.get(config.api.categories + '?filter[order]=ASC')
            .success(function(result) {
              for (var i = 0; i < result.length; i++) {
                var cat = result[i];

                if (cat.parent) {
                  var parent = findBySlug(cat.parent.slug);

                  if (! parent) {
                    parent = _addCategory(cat.parent);
                  }

                  parent.children.push(cat);
                } else if (! findBySlug(cat.slug)) {
                  _addCategory(cat);
                }
              }
            });
        }

        function getAll() {
          return _categories;
        }

        function findBySlug(slug) {
          for (var i = 0; i < _categories.length; i++) {
            if (_categories[i].slug === slug) {
              return _categories[i];
            }
          }
        }

        function _addCategory(category) {
          category.children = [];
          _categories.push(category);

          return category;
        }
      }
  }
);

