;(function () {
    var app = angular.module("app");

    app.controller("IndexCtrl", function (User) {
        var self = this;

        self.logout = function () {
            User.logout();
        };
    });
}());