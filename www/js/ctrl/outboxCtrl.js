;(function() {
  var app = angular.module('app');

  app.controller("OutboxCtrl", function($http, OutboxStorage) {
  	var self = this;
  	self.messages = OutboxStorage.list();
  	console.log(self.messages);

  });
}());