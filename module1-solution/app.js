(function() {
'use strict';

angular.module('LunchCheck',[]).controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope'];


function LunchCheckController($scope){
$scope.dishes ="";
$scope.CheckForTooMuch = function()
{
  if($scope.dishes === "")
  {
    $scope.checkMessage = "Please enter data first";
  }
  else {
  console.log('Hello World');
  var items = $scope.dishes.split(',');

    if(items.length<=3)
    {
      $scope.checkMessage = "Enjoy!";
    }
    else if(items.length>3)
    {
      $scope.checkMessage = "Too much!";
    }
  }
}



}

})();
