(function(){

    angular.module('MenuApp').config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];

   function RoutesConfig($stateProvider,$urlRouterProvider)
   {
     $urlRouterProvider.otherwise('/home');

     $stateProvider
     .state('home',{
       url:'/home',
       templateUrl:'src/templates/home.template.html'
     })
     .state('categories',{
       url:'/categories',
       templateUrl:'src/templates/categories.template.html',
       controller:'MenuCategoriesController as categoryList'
     });
   }

})();
