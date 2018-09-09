(function () {
"use strict";

angular.module('public')
.controller('MyInfoPageController', MyInfoPageController);

MyInfoPageController.$inject = ['SignUpService'];
function MyInfoPageController(SignUpService) {
  var $ctrl = this;
  $ctrl.signUpItems = SignUpService.getPreferences();
  $ctrl.menuItems = SignUpService.getMenuItemDetail();
  console.log('Controller Menu Items Are',$ctrl.menuItems);
  console.log('SignUpItems',$ctrl.signUpItems);
}

})();
