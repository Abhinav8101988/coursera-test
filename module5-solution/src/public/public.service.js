(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

SignUpService.$inject = ['$http'];

function SignUpService($http) {
  var service = this;

  service.savePreferences = function (preference) {
    this.preference = preference;
    console.log('Preference', this.preference);
    return $http({
    method:"GET",
    url:("https://abhinav8101988-course5.herokuapp.com/menu_items/"+preference.menunumber+".json")
  }).then(function(response)
   {
     console.log('Menu Service Response', response.data);
     return response.data;
    });
  };

  service.getPreferences = function () {
    return this.preference;
  };

  service.saveMenuItemDetail = function(menuInfo)
  {
    this.menuItemDetail = menuInfo;
  }

  service.getMenuItemDetail = function() {
  return  this.menuItemDetail;
  }



}



})();
