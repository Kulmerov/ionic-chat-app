;(function() {
  var app = angular.module('app');

  app.controller("NewMessageCtrl", function($http, $state) {
    var self = this;
    self.message = {
    	to: "",
    	body: ""
    };

    self.send = function() {
    	var params = {
        	"to": self.message.login,
        	"body": self.message.password
      	};

    	$http.get("http://localhost:8080/send", {params: params})
	        .success(function(response) {
	          alert("success!");
	          $state.go("outbox");
	        }).error(function(response) {
	          alert("error!");
	        }); 
    };
  });
}());