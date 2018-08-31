(function(){
  'use strict';
angular.module('MenuApp').controller('MenuCategoriesController',MenuCategoriesController);

MenuCategoriesController.$inject=['categoryItems'];

function MenuCategoriesController(categoryItems)
{
  var menuCategories = this;
 menuCategories.categories = categoryItems;
}

})();
