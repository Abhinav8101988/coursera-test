(function(){
  'use strict';
angular.module('MenuApp').controller('MenuItemsController',MenuItemsController);

MenuItemsController.$inject=['itemsInfo'];

function MenuItemsController(itemsInfo)
{
 var menuItems = this;
 menuItems.items = itemsInfo.menu_items;
 menuItems.category = itemsInfo.category.short_name;
}

})();
