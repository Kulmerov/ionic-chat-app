;(function () {
    var app = angular.module("app");

    app.service("InboxStorage", function (Storage) {
        var inboxStorage = new Storage("InboxStorage");

        this.add = function (inboxMessage) {
            inboxStorage.add(inboxMessage);
        };

        this.list = function () {
            inboxStorage.list();
        }
    });

}());