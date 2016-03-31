;(function () {
    var app = angular.module("app");
    
    app.service("OutboxStorage", function (Storage) {
        var outboxStorage = new Storage("OutboxStorage");

        this.add = function (outboxMessage) {
            outboxStorage.add(outboxMessage);
        };

        this.list = function () {
            return outboxStorage.list();
        }
    });

}());