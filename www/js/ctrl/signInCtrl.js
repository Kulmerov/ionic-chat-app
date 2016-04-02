;(function () {
    var app = angular.module('app');

    app.controller("SignInCtrl", function ($state, User) {
        var self = this;
        self.userdata = {
            login: "",
            password: ""
        };

        self.signIn = function () {
            User.signIn(self.userdata.login, self.userdata.password, function () {
                $state.go("inbox");
            });
        }

    });
}());