;(function () {
    var app = angular.module('app');

    app.controller("OutboxCtrl", function (StorageFactory) {
        var self = this;
        var outboxStorage = new StorageFactory("OutboxStorage");
        self.messages = outboxStorage.list();
    });
}());