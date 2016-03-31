;(function () {
    var app = angular.module('app');

    app.controller("SignUpCtrl", function ($http, $ionicPopup, $state, CONSTANT) {
        var self = this;
        self.userdata = {
            login: "",
            password: ""
        };

        self.signUp = function () {
            var request = {
                method: "POST",
                url: CONSTANT.SERVER_URL + "user/registration",
                data: {
                    login: self.userdata.login,
                    password: self.userdata.password
                }
            };

            $http(request)
                .success(function (response) {
                    console.log(response);
                    if (response.status === "SUCCESS") {

                        $state.go("inbox");
                    } else {
                        $ionicPopup.alert({
                            title: response.status,
                            template: response.body
                        });
                    }
                }).error(function (response) {
                $ionicPopup.alert({
                    title: "ERROR",
                    template: "Server does not respond"
                });
            });
        }

    });
}());