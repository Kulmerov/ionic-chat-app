;(function () {
    var app = angular.module("app");

    app.factory("ErrorHttpInterceptor", function ($q, $injector, $cordovaNetwork, $ionicPlatform, $window) {

        var popupBadRequest = undefined;

        // ngCordova require to wrap each plugin call with the platformready event.
        // http://ngcordova.com/docs/install/
        $ionicPlatform.ready(function () {

            $window.addEventListener("offline", function () {
                $injector.get("$ionicLoading").show({
                    template: "{{ 'CONNECTION.WAITING_FOR_CONNECTION' | translate }}"
                });
            }, false);

            $window.addEventListener("online", function () {
                $injector.get("$ionicLoading").hide();
            }, false);

            popupBadRequest = function (title, template) {
                var isOnline = true;
                // if run in browser window.Connection always undefined
                if (window.Connection) {
                    isOnline = $cordovaNetwork.isOnline();
                }
                if (isOnline) {
                    title = title || "ERROR";
                    template = template || "Http request is failed";
                    $injector.get("$ionicPopup").alert({
                        title: title,
                        template: template
                    });
                }
            };

        });

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