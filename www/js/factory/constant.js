// var CONSTANT = function() {
// 	var SERVER_URL = "http://css.cloudapp.net:8080/";

// 	var CONSTANT = {
// 		"test": "qwerty",
// 		SERVER_URL: SERVER_URL
// 	}	

// 	return CONSTANT;
// }();

;(function() {
  angular.module("app.storage", [])
    .factory("CONSTANT", function() {

		var SERVER_URL = "http://css.cloudapp.net:8080/";
        
      	return {
      		SERVER_URL: SERVER_URL
      	}
    });
    
}());