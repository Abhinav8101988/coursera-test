(function () {
"use strict";

angular.module('public')
.controller('SignUpPageController', SignUpPageController);

SignUpPageController.$inject = ['SignUpService']

function SignUpPageController(SignUpService) {
  var reg = this;

  reg.menuNumberFound = true;

  reg.submit = function()
  {
    console.log(reg.user);
    SignUpService.savePreferences(reg.user).then(function(response)
     {
       console.log('Menu Service Response', response);
       console.log('ASSS');
       SignUpService.saveMenuItemDetail(response);
       reg.menuNumberFound = true;
       reg.isSaved = true;
       return response.data;
     },function(error)
    {
      reg.menuNumberFound = false;
      reg.isSaved = false;
     console.log('Http Call Returned error');
    });
  }
  
  reg.resetMenuNumberInfo = function()
  {
    reg.menuNumberFound = true;
  }
}

})();
