;(function () {
    var app = angular.module("app");

    app.service("User", function (QueryBuilder) {

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
            var request = QueryBuilder.constructRequest("signIn", {
                login: login,
                password: password
            });
            QueryBuilder.sendRequest(request, function (response) {
                userBean.login = response.login;
                userBean.masterServerToken = response.oauthKey;

                console.log(userBean.masterServerToken);
                saveUserBean();

                var request = QueryBuilder.constructRequest("messageServer", {
                    oauthKey: userBean.masterServerToken
                });

                console.log(request);

                QueryBuilder.sendRequest(request, function (response) {
                    userBean.nodeServerUrl = response.url;
                    userBean.nodeServerToken = response.key;
                    if (successCallback) {
                        successCallback();
                    }
                });

            });
        };

        this.signUp = function (login, password, successCallback) {
            var request = constructRequest("signUp", {
                login: login,
                password: password
            });
            sendRequest(function (response) {
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