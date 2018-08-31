(function(){
'use strict';

    angular.module('MenuApp').config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];

   function RoutesConfig($stateProvider,$urlRouterProvider)
   {
     $urlRouterProvider.otherwise('/');

     $stateProvider
     .state('home',{
       url:'/',
       templateUrl:'coursera-test/module4-solution/src/templates/home.Template.html',
       //templateUrl:'/src/templates/home.Template.html'
     })
     .state('categoriesList',{
       url:'/categories-list',
      templateUrl:'coursera-test/module4-solution/src/templates/menuCategories.Template.html',
       // templateUrl:'/src/templates/menuCategories.Template.html',
       controller:'MenuCategoriesController as categoryList',
       resolve:{
      categoryItems: ["MenuDataService",function(MenuDataService)
       {
        return MenuDataService.getAllCategories();
       }]
       }
     }).
   state('itemsList',{
     url:'/items-list/{categoryId}',
     templateUrl:'coursera-test/module4-solution/src/templates/items.Template.html',
    // templateUrl:'/src/templates/items.Template.html',
     controller:'MenuItemsController as itemList',
     resolve:{
       itemsInfo:["$stateParams","MenuDataService",function($stateParams,MenuDataService)
       {
         return MenuDataService.getItemsForCategory($stateParams.categoryId);
       }]
     }
   });
}
})();
