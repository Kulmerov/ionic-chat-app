(function () {
    var app = angular.module("app");

    app.controller("InboxCtrl", function ($timeout, StorageFactory, QueryBuilder, User) {
        var self = this;
        var inboxStorage = new StorageFactory("InboxStorage");
        self.messages = [];
        
        var loadMessages = function () {
            if (User.getNodeServerToken() !== undefined) {
                var request = QueryBuilder.constructRequest("newMessage", null,
                    User.getNodeServerUrl(), User.getNodeServerToken());

                QueryBuilder.sendRequest(request, function (response) {
                    angular.forEach(response, function(message) {
                        inboxStorage.add(message);
                        self.messages.push(message);
                    });
                });
            }
            $timeout(loadMessages, 3000);
        };
        loadMessages();
    });
}());