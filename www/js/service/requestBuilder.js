;(function () {
    var app = angular.module("app");

    app.service("RequestBuilder", function ($http, $ionicPopup, CONSTANT) {

        this.sendRequest = function (request, successCallback) {
            $http(request)
                .success(function (response) {
                    if (successCallback) {
                        successCallback(response.body);
                    }
                });
        };

        this.constructRequest = function (action, data, nodeServerUrl, nodeServerToken) {
            data = data || [];
            var url = "";
            var method = "POST";
            switch (action) {
                case "signUp":
                    url = CONSTANT.SERVER_URL + "/user/registration";
                    break;
                case "signIn":
                    url = CONSTANT.SERVER_URL + "/user/login";
                    break;
                case "messageServer":
                    url = CONSTANT.SERVER_URL + "/message/server";
                    method = "GET";
                    break;
                case "sendMessage":
                    url = CONSTANT.SERVER_URL + "/message/send";
                    break;
                case "newMessage":
                    url = nodeServerUrl + "/messages/" + nodeServerToken;
                    method = "GET";
                    break;
            }
            if (method === "POST") {
                return {
                    method: method,
                    url: url,
                    data: data
                }
            }
            if (method === "GET") {
                return {
                    method: method,
                    url: url,
                    params: data
                }
            }
        };
    });

}());