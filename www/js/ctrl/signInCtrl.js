;(function () {
    var app = angular.module('app');

    app.controller("SignInCtrl", function ($state, User) {
        var self = this;
        self.userdata = {
            login: undefined,
            password: undefined
        };

        self.signIn = function () {
            User.signIn(self.userdata.login, self.userdata.password, function () {
                $state.go("inbox");
            });
        };

        try {
            self.signIn();
        } catch(err) {
            // NOP
        }
        
    });
}());