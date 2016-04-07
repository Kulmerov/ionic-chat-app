;(function () {
    var app = angular.module("app");

    app.service("Localization", function ($translate) {
        var self = this;

        self.setAppLocalFromSystemLocal = function () {
            if (typeof navigator.globalization !== "undefined") {
                navigator.globalization.getPreferredLanguage(function (language) {
                    $translate.use((language.value).split("-")[0]).then(function (data) {
                        console.log("SUCCESS -> " + data);
                    }, function (error) {
                        console.log("ERROR -> " + error);
                    });
                }, null);
            }
        };

    });
}());