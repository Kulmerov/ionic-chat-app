;(function () {
    var app = angular.module("app");


    app.controller("InboxCtrl", function (Message) {
        var self = this;
        self.messages = Message.listInbox();

        document.addEventListener("offline", onOffline, false);

        function onOffline() {
            alert('you are offline');
        }
    });
}());