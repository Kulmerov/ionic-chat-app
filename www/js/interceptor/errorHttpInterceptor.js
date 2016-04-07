;(function () {
    var app = angular.module("app");

    app.factory("ErrorHttpInterceptor", function ($q, $injector, ConnectionListener) {
        
        var popupBadRequest = function (title, template) {
            if (ConnectionListener.isConnected()) {
                title = title || "ERROR";
                template = template || "Http request is failed";
                $injector.get("$ionicPopup").alert({
                    title: title,
                    template: template
                });
            }
        };

        return {
            
            response: function (response) {
                if (response.data.status && response.data.status === "ERROR") {
                    if (response.data.body === "INVALID_STORAGE_KEY") {
                        $injector.get("User").signIn();
                    } else {
                        popupBadRequest(response.data.status, response.data.body);
                    }
                    return $q.reject(response);
                }
                return response;
            },

            requestError: function (rejection) {
                console.log("5xx - responseError");
                popupBadRequest("ERROR", "Http server error");
                return $q.reject(rejection);
            },

            responseError: function (rejection) {
                console.log("4xx - requestError");
                popupBadRequest("ERROR", "Http client error");
                // popupBadRequest("ERROR", err.status);
                return $q.reject(rejection);
            }
        };
    });

}());