;(function () {
    var app = angular.module("app");

    app.config(["$httpProvider", function($httpProvider) {
        $httpProvider.interceptors.push("ErrorHttpInterceptor");
    }]);
    
}());