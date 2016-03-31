;(function () {
    var app = angular.module("app");

    app.factory("User", function ($http, CONSTANT) {

        var userBean = angular.fromJson(window.localStorage["user"] || []);

        var saveUserBean = function () {
            window.localStorage["user"] = angular.toJson(userBean);
        };

        var popupBadRequest = function (title, template) {
            title = title || "ERROR"
            template = template || "Bad request";
            $ionicPopup.alert({
                title: title,
                template: template
            });
        };

        var sendRequest = function (request, successCallback) {
            $http(request)
                .success(function (response) {
                    console.log(response);
                    if (response.status === "SUCCESS") {
                        successCallback(response.body);
                    } else {
                        popupBadRequest(response.status, response.body);
                    }
                })
                .error(function () {
                    popupBadRequest();
                    return false;
                });
        };

        var constructRequest = function (action, data) {
            var rest = "";
            var method = "GET";
            switch (action) {
                case "signUp":
                    rest = "user/registration";
                    method = "POST";
                    break;
                case "signIn":
                    rest = "user/login";
                    method = "POST";
                    break;
                case "messageServer":
                    rest = "message/server";
                    break;
            }
            return {
                method: method,
                url: CONSTANT.SERVER_URL + rest,
                data: data
            }
        };

        return {

            getLogin: function () {
                return userBean.login;
            },

            getMasterServerToken: function () {
                return userBean.masterServerToken;
            },

            getNodeServerToken: function () {
                return userBean.nodeServerToken;
            },

            signIn: function (login, password, successCallback) {
                var request = constructRequest("signIn", {
                    login: login,
                    password: password
                });

                sendRequest(function (response) {
                    userBean.login = response.userBean.login;
                    userBean.masterServerToken = response.oauthKey;
                    saveUserBean();

                    var request = constructRequest("messageServer", {
                        oauthKey: userBean.masterServerToken
                    });

                    sendRequest(request, function (response) {
                        userBean.nodeServerUrl = response.url;
                        userBean.nodeServerToken = response.key;
                        successCallback();
                    });

                });
            },

            signUp: function (login, password, successCallback) {
                var request = constructRequest("signUp", {
                    login: login,
                    password: password
                });
                sendRequest(function (response) {
                    userBean.login = response.login;
                    saveUserBean();
                    successCallback();
                });
            },

            logout: function (successCallback) {
                userBean = [];
                saveUserBean();
                successCallback();
            }

        };

    });

}());