;(function () {
    var app = angular.module("app");

    app.controller("OutboxCtrl", function (Message) {
        var self = this;
        self.messages = Message.listOutbox();
    });
}());