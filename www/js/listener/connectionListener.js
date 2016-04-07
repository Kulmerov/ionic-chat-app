;(function () {
    var app = angular.module("app");

    app.service("ConnectionListener", function ($window, $injector, $cordovaNetwork) {
        var self = this;

        var isConnected = $cordovaNetwork.isOnline();
        self.isConnected = function () {
            return isConnected;
        };
        // console.log(navigator.connection.type);
        $window.addEventListener("offline", function () {
            isConnected = false;
            $injector.get("$ionicLoading").show({
                template: "Waiting for connection"
            });
        }, false);

        $window.addEventListener("online", function () {
            isConnected = true;
            $injector.get("$ionicLoading").hide();
        }, false);

    });

}());