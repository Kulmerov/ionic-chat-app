;(function() {
  var app = angular.module('app');

  app.controller("SignUpCtrl", function($http) {
    var self = this;
    self.userdata = {
      login: "",
      password: ""
    };

    self.signUp = function() {
      var params = {
        "login": self.userdata.login,
        "password": self.userdata.password
      };

      // console.log(params);

      $http.get("http://localhost:8080/signup", {params: params})
        .success(function(response) {
          alert("success!");
          $state.go("inbox");
        }).error(function(response) {
          alert("error!");
        }); 
    }

  });
}());