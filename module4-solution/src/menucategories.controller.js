(function(){
angular.module('MenuApp').controller('MenuCategoriesController',MenuCategoriesController);

MenuCategoriesController.$inject=['MenuDataService'];

function MenuCategoriesController(MenuDataService)
{
  var menuCategories = this;
 menuCategories.items = [];

  menuCategories.$onInit = function()
  {
    MenuDataService.getAllCategories().then(function(result){
      menuCategories.items = result.data;
    })
  }
}


})();
