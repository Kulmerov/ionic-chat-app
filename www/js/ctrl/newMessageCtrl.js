;(function () {
    var app = angular.module('app');

    app.controller("NewMessageCtrl", function ($state, Message) {
        var self = this;

        self.message = {
            to: "",
            type: "message",
            body: ""
        };

        self.send = function () {
            Message.send(self.message.to, self.message.type, self.message.body,
                function () {
                    $state.go("outbox");
                });
            // var request = QueryBuilder.constructRequest("sendMessage", {
            //     to: self.message.to,
            //     from: User.getLogin(),
            //     type: "message",
            //     body: self.message.body
            // });
            //
            // QueryBuilder.sendRequest(request, function () {
            //     outboxStorage.add(self.message);
            //     $state.go("outbox");
            // });
        };
    });
}());