(function () {
"use strict";

angular.module('public')
.controller('SignUpPageController', SignUpPageController);

SignUpPageController.$inject = ['SignUpService']

function SignUpPageController(SignUpService) {
  var reg = this;
  reg.submit = function()
  {
    console.log(reg.user);
    SignUpService.savePreferences(reg.user);
    console.log('Registration Completed');
    reg.isSaved= true;
  }
}

})();
