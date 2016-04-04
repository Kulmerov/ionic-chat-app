;(function () {
    var app = angular.module("app");

    app.factory("ErrorHttpInterceptor", function ($q, $injector) {
        var popupBadRequest = function (title, template) {
            title = title || "ERROR";
            template = template || "Http request is failed";
            $injector.get("$ionicPopup").alert({
                title: title,
                template: template
            });
        };

        return {
            response: function (response) {
                console.log(response);
                if (response.data.status && response.data.status === "ERROR") {
                    popupBadRequest(response.data.status, response.data.body);
                    return $q.reject(response);
                }
                return response;
            },

            requestError: function (err) {
                console.log("4xx - requestError");
                popupBadRequest("ERROR", "Http client error");
                return err;
            },

            responseError: function (err) {
                console.log("5xx - responseError");
                popupBadRequest("ERROR", "Http server error");
                return $q.reject(err);
            }
        };
    });
    
}());