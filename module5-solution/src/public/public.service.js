(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

function SignUpService() {
  var service = this;

  service.savePreferences = function (preference) {
    this.preference = preference;
  };


  service.getPreferences = function () {
    return this.preference;
  };

}



})();
