;(function () {
    var app = angular.module('app');

    app.controller("SignUpCtrl", function ($state, User) {
        var self = this;
        self.userdata = {
            login: "",
            password: ""
        };

        self.signUp = function () {
            User.signUp(self.userdata.login, self.userdata.password, function () {
                $state.go("signin");
            });
        }

    });
}());