(function() {
'use strict';

angular.module('ShoppingListCheckOff',[]).controller('ToBuyController',ToBuyController).controller('AlreadyBoughtController',AlreadyBoughtController).service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){
this.items = ShoppingListCheckOffService.BuyItems();
this.BuyItem = function(index)
{
  ShoppingListCheckOffService.PurchaseItem(index);
}
}

function AlreadyBoughtController(ShoppingListCheckOffService)
{
  this.items = ShoppingListCheckOffService.BoughtItems();
}

function ShoppingListCheckOffService()
{
  var toBuy = [{"quantity":10,"name":"Cookie"},{"quantity":5,"name":"Chips"},{"quantity":20,"name":"Choclates"},{"quantity":10,"name":"Coffee"},{"quantity":10,"name":"Cake"}]
  var bought = [];

  this.BuyItems = function ItemInfo()
  {
    return toBuy;
  }

 this.PurchaseItem = function (index)
 {
  var purchasedItem =  toBuy.pop(index);
  bought.push(purchasedItem);
 }

 this.BoughtItems = function()
 {
   return bought;
 }

}

})();
