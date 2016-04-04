;(function () {
    var app = angular.module("app");

    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state("inbox", {
            url: "/inbox",
            templateUrl: "templates/inbox.html"
        });

        $stateProvider.state("outbox", {
            url: "/outbox",
            templateUrl: "templates/outbox.html"
        });

        $stateProvider.state("signin", {
            url: "/signin",
            templateUrl: "templates/signin.html"
        });

        $stateProvider.state("signup", {
            url: "/signup",
            templateUrl: "templates/signup.html"
        });

        $stateProvider.state("newmessage", {
            url: "/newmessage",
            templateUrl: "templates/newmessage.html"
        });

        $urlRouterProvider.otherwise("/inbox");
    });

    app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('ErrorHttpInterceptor');
    }]);
}());