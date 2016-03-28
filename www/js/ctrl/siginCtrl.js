// ;(function() {
//   var app = angular.module('app');

//   app.controller("SiginCtrl", function($http, $scope) {
//     $scope.userdata = {
//       login: "",
//       password: ""
//     };

//     $scope.sigIn = function() {
//       var params = {
//         "login": $scope.userdata.login,
//         "password": $scope.userdata.password
//       };

//       console.log(params);

//       $http.get("http://localhost:8080/sigin", {params: params})
//         .success(function(response) {
//           alert("success!");
//           $state.go("inbox");
//         }).error(function(response) {
//           alert("error!");
//         }); 
//     }

//   });
// }());

;(function() {
  var app = angular.module('app');

  app.controller("SiginCtrl", function($http) {
    this.userdata = {
      login: "",
      password: ""
    };

    this.sigIn = function() {
      var params = {
        "login": this.userdata.login,
        "password": this.userdata.password
      };

      // console.log(params);

      $http.get("http://localhost:8080/sigin", {params: params})
        .success(function(response) {
          alert("success!");
          $state.go("inbox");
        }).error(function(response) {
          alert("error!");
        }); 
    }

  });
}());