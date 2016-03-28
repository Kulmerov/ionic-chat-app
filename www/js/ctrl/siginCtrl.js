(function() {
  var app = angular.module('app');

  app.controller("SiginCtrl", function($http, $scope) {
    $scope.sigIn = function() {
      var params = {
        "login": $scope.login,
        "password": $scope.password
      };

      $http.get("http://localhost:8080/sigin", {params: params})
        .success(function(response) {
          // alert("success!");
          $state.go("inbox");
        }); 
    }
  });
}());