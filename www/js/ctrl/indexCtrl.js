;(function () {
    var app = angular.module("app");

    app.controller("IndexCtrl", function (User) {
        var self = this;
        self.user = User;

        self.logout = function () {
            User.logout();
        };
    });
}());