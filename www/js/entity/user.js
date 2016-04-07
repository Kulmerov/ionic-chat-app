;(function () {
    var app = angular.module("app");

    app.service("User", function (CONSTANT, $http) {
        var storageName = "user";
        var userBean = angular.fromJson(window.localStorage[storageName]) || {};

        console.log(userBean);

        var saveUserBean = function () {
            console.log(userBean);
            console.log(angular.toJson(userBean));
            window.localStorage[storageName] = angular.toJson(userBean);
        };

        var getNodeServer = function(successCallback) {
            var request = {
                method: CONSTANT.HTTP.REQUEST.GET_MESSAGE_SERVER.METHOD,
                url: CONSTANT.HTTP.REQUEST.GET_MESSAGE_SERVER.URL,
                params: {
                    oauthKey: userBean.masterServerToken
                }
            };

            $http(request).success(function (response) {
                console.log(response.body.url);
                userBean.nodeServerUrl = response.body.url;
                userBean.nodeServerToken = response.body.key;
                saveUserBean();
                if (successCallback) {
                    successCallback();
                }
            });
        };

        this.getLogin = function () {
            return userBean.login;
        };

        this.getNodeServerUrl = function () {
            return userBean.nodeServerUrl;
        };

        this.getMasterServerToken = function () {
            return userBean.masterServerToken;
        };

        this.getNodeServerToken = function () {
            return userBean.nodeServerToken;
        };

        this.signIn = function (login, password, successCallback) {
            if (login && password) {
                var request = {
                    method: CONSTANT.HTTP.REQUEST.AUTHORIZATION.METHOD,
                    url: CONSTANT.HTTP.REQUEST.AUTHORIZATION.URL,
                    data: {
                        login: login,
                        password: password
                    }
                };

                $http(request).success(function (response) {
                    userBean.login = response.body.userBean.login;
                    userBean.masterServerToken = response.body.oauthKey;
                    getNodeServer(successCallback);
                });
            } else if (userBean.masterServerToken) {
                getNodeServer(successCallback);
            } else {
                throw "Master server token is undefined";
            }
        };

        this.signUp = function (login, password, successCallback) {
            var request = {
                method: CONSTANT.HTTP.REQUEST.REGISTRATION.METHOD,
                url: CONSTANT.HTTP.REQUEST.REGISTRATION.URL,
                data: {
                    login: login,
                    password: password
                }
            };
            $http(request).success(function (response) {
                userBean.login = response.body.login;
                saveUserBean();
                if (successCallback) {
                    successCallback();
                }
            });
        };

        this.logout = function (successCallback) {
            userBean = {};
            saveUserBean();
            if (successCallback) {
                successCallback();
            }
        };

    });

}());