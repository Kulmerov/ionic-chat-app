;(function () {
    var app = angular.module('app');

    app.controller("NewMessageCtrl", function ($http, $state, OutboxStorage) {
        var self = this;
        self.message = {
            to: "",
            body: ""
        };

        self.send = function () {
            var params = {
                "to": self.message.to,
                "body": self.message.body
            };

            // $http.get("http://localhost:8080/send", {params: params})
            //     .success(function(response) {
            //       alert("success!");
            //       $state.go("outbox");
            //     }).error(function(response) {
            //       alert("error!");
            //     });

            OutboxStorage.add(self.message);
            $state.go("outbox");
        };
    });
}());