(function() {
  'use strict';

  angular.module("myFirstApp",[])
  .controller("MyFirstController",function ($scope) {

    $scope.name="Vignesh Jeyaraman"
    $scope.my = function(){
      return "suck my dick"
    }

  });
})();
