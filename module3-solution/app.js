(function() {
'use strict';

angular.module('NarrowItDownApp',[]).controller('NarrowItDownController',NarrowItDownController).service('MenuSearchService',MenuSearchService).directive('foundItems',FoundItems);

NarrowItDownController.$inject=['MenuSearchService'];

function NarrowItDownController(MenuSearchService)
{
  var narrowDown = this;
  narrowDown.srchMsg = '';
  narrowDown.notFound = false;
  narrowDown.found = [];
  narrowDown.NarrowIt = function()
  {
  if(narrowDown.srchMsg !='')
  {
    var promise = MenuSearchService.getMatchedMenuItems(this.srchMsg);

    promise.then(function(response)
   {
     narrowDown.found = response;
     narrowDown.notFound = false;
     if(narrowDown.found.length==0)
     {
       narrowDown.notFound = true;
     }
   }).catch(function (error) {
        console.log(error);
      })
  }
  else {
    narrowDown.notFound = true;
    narrowDown.found=[];
  }

  }

  narrowDown.RemoveItem = function(index)
  {
    narrowDown.found.splice(index,1);
  }
}

MenuSearchService.$inject=['$http']

function MenuSearchService($http)
{
this.getMatchedMenuItems = function(searchTerm)
{
  console.log('Inside Service');
  return $http({
   method:"GET",
   url:("https://davids-restaurant.herokuapp.com/menu_items.json")
  }).then(function (result) {
   var foundItems = [];
   var allItems = result.data.menu_items;
   for(var index = 0; index<allItems.length;index++)
   {
     if(allItems[index].description.includes(searchTerm))
     {
       foundItems.push(allItems[index]);
     }
   }
    return foundItems;
});
}

}

function FoundItems()
{
  var ddo = {
  scope:{
    items:'<foundInfo',
    onRemove:'&'
    },
    template:'<ul><li ng-repeat="item in items">{{item.name}},{{item.short_name}},{{item.description}} <button ng-click="onRemove({index: $index});">Dont want this one!</button></li></ul>',
  };

  return ddo;
}
})();
