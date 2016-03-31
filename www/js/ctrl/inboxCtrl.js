(function () {
    var app = angular.module("app");

    app.controller("InboxCtrl", function ($http, $timeout) {
        var self = this;
        self.messages = [];

        var i = 0;
        var loadMessages = function () {
            var message = {
                from: i,
                body: i
            };
            self.messages.push(message);
            i++;
            $timeout(loadMessages, 3000);
            // $http.get("https://www.reddit.com/r/funny/new/.json", {params: ""})
            //   .success(function(response) { 
            //     angular.forEach(response.data.children, function(child) {
            //       $scope.messages.push(child.data);
            //     });
            //   });
        };
        loadMessages();
    });
}());