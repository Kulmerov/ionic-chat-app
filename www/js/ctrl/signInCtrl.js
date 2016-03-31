;(function () {
    var app = angular.module('app');

    app.controller("SignInCtrl", function ($http, $ionicPopup, $state) {
        var self = this;
        self.userdata = {
            login: "",
            password: ""
        };

        self.signIn = function () {
            // var request = {
            //   method: 'POST',
            //   url: 'http://example.com',
            //   headers: {
            //     'Content-Type': undefined
            //   },
            //   data: { test: 'test' }
            // }

            var params = {
                login: self.userdata.login,
                password: self.userdata.password
            };

            // console.log(params);

            $http.post("http://localhost:8080/user/login", {params: params})
                .success(function (response) {
                    if (response.status !== "SUCCESS") {
                        alert(response.body);
                    } else {
                        // response.body
                        $state.go("inbox");
                    }
                }).error(function (response) {
                $ionicPopup.alert({
                    title: "Error",
                    template: "Server does not respond"
                });
            });
        }

    });
}());