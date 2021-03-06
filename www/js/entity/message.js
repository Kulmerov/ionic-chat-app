;(function () {
    var app = angular.module("app");

    app.service("Message", function (StorageFactory, User, $timeout, CONSTANT, $http) {
        var inboxStorage = new StorageFactory("InboxStorage");
        var outboxStorage = new StorageFactory("OutboxStorage");

        function loadMessages() {
            if (User.getNodeServerToken() !== undefined) {
                var request = {
                    method: CONSTANT.HTTP.REQUEST.RECEIVE_MESSAGES.METHOD,
                    url: User.getNodeServerUrl() + CONSTANT.HTTP.REQUEST.RECEIVE_MESSAGES.REST + User.getNodeServerToken()
                };
                console.log(request.url);

                $http(request).success(function (response) {
                    response = response.body;
                    angular.forEach(response, function(message) {
                        inboxStorage.add(message);
                        // self.messages.push(message);
                    });
                });
            }
            $timeout(loadMessages, 3000);
        }
        loadMessages();
        
        this.send = function (to, type, body, successCallback) {
            var request = {
                method: CONSTANT.HTTP.REQUEST.SEND_MESSAGE.METHOD,
                url: CONSTANT.HTTP.REQUEST.SEND_MESSAGE.URL,
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
                    type: type,
                    body: body
                });
                if (successCallback) {
                    successCallback();
                }
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