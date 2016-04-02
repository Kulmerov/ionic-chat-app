;(function () {
    var app = angular.module('app');

    app.controller("NewMessageCtrl", function ($state, StorageFactory, User) {
        var self = this;
        var outboxStorage = new StorageFactory("OutboxStorage");

        self.message = {
            from: User.getLogin(),
            to: "",
            type: "message",
            body: ""
        };

        self.send = function () {
            var request = QueryBuilder.constructRequest("sendMessage", {
                to: self.message.to,
                from: User.getLogin(),
                type: "message",
                body: self.message.body
            });

            QueryBuilder.sendRequest(request, function () {
                outboxStorage.add(self.message);
                $state.go("outbox");
            });
        };
    });
}());