(function() {
	var app = angular.module('app');

	app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("inbox", {
      url: "/inbox",
      templateUrl: "templates/inbox.html"
    });

    $stateProvider.state("outbox", {
      url: "/outbox",
      templateUrl: "templates/outbox.html"
    });

    $stateProvider.state("sigin", {
      url: "/sigin",
      templateUrl: "templates/sigin.html"
    });

    $urlRouterProvider.otherwise("/inbox");
  }); 
}());