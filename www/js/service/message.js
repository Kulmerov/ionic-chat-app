;(function () {
    var app = angular.module("app");

    app.service("Message", function (StorageFactory, User, $timeout, CONSTANT) {
        var inboxStorage = new StorageFactory("InboxStorage");
        var outboxStorage = new StorageFactory("OutboxStorage");

        function loadMessages() {
            if (User.getNodeServerToken() !== undefined) {
                var request = {
                    method: CONSTANT.HTTP.RECEIVE_MESSAGES.METHOD,
                    url: User.nodeServerUrl + CONSTANT.HTTP.RECEIVE_MESSAGES.REST + User.nodeServerToken
                };

                $http(request).success(function (response) {
                    angular.forEach(response, function(message) {
                        inboxStorage.add(message);
                        self.messages.push(message);
                    });
                });
            }
            $timeout(loadMessages, 3000);
        }
        loadMessages();
        
        this.send = function (to, type, body) {
            var request = {
                method: CONSTANT.HTTP.SEND_MESSAGE.METHOD,
                url: CONSTANT.HTTP.SEND_MESSAGE.URL,
                data: {
                    to: to,
                    from: User.getLogin(),
                    type: type,
                    body: body
                }
            };

            $http(request).success(function (response) {
                outboxStorage.add({
                    to: to,
                    body: body
                });
            });
        };

        this.listInbox = function() {
            return inboxStorage.list();
        };

        this.listOutbox = function() {
            return outboxStorage.list();
        };
        
    });

}());