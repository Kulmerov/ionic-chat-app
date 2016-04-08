;(function () {
    var app = angular.module('app', ["ionic", "pascalprecht.translate", "ngCordova"]);

    app.run(function ($ionicPlatform, Localization) {
        
        $ionicPlatform.ready(function () {
            // ConnectionListener.startListen();
            Localization.setAppLocalFromSystemLocal();

            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });

}());