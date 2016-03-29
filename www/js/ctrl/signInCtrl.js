;(function() {
  var app = angular.module('app');

  app.controller("SignInCtrl", function($http) {
    var self = this;
    self.userdata = {
      login: "",
      password: ""
    };

    self.signIn = function() {
      var params = {
        "login": self.userdata.login,
        "password": self.userdata.password
      };

      // console.log(params);

      $http.get("http://localhost:8080/signin", {params: params})
        .success(function(response) {
          alert("success!");
          $state.go("inbox");
        }).error(function(response) {
          alert("error!");
        }); 
    }

  });
}());