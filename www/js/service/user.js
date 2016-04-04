;(function () {
    var app = angular.module("app");

    app.service("User", function (CONSTANT) {

        var userBean = angular.fromJson(window.localStorage["user"] || []);

        var saveUserBean = function () {
            window.localStorage["user"] = angular.toJson(userBean);
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
            var request = {
                method: CONSTANT.HTTP.REQUEST.AUTHORIZATION.METHOD,
                url: CONSTANT.HTTP.REQUEST.AUTHORIZATION.URL,
                data: {
                    login: login,
                    password: password
                }
            };

            $http(request).success(function (response) {
                userBean.login = response.login;
                userBean.masterServerToken = response.oauthKey;

                // console.log(userBean.masterServerToken);
                saveUserBean();

                var request = {
                    method: CONSTANT.HTTP.REQUEST.GET_MESSAGE_SERVER.METHOD,
                    url: CONSTANT.HTTP.REQUEST.GET_MESSAGE_SERVER.URL,
                    params: {
                        oauthKey: userBean.masterServerToken
                    }
                };
                
                $http(request).success(function (response) {
                    userBean.nodeServerUrl = response.url;
                    userBean.nodeServerToken = response.key;
                    if (successCallback) {
                        successCallback();
                    }
                });

            });
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
                userBean.login = response.login;
                saveUserBean();
                if (successCallback) {
                    successCallback();
                }
            });
        };

        this.logout = function (successCallback) {
            userBean = [];
            saveUserBean();
            if (successCallback) {
                successCallback();
            }
        };

    });

}());