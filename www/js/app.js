;(function () {
    var app = angular.module('app', ["ionic", "pascalprecht.translate"]);

    // app.controller("TestCtrl", function(Storage) {
    //   var storage1 = new Storage("test11");
    //   console.log(storage1.getStorageName());   
    //    var storage2 = new Storage("suckmydick");
    //   console.log(storage2.getStorageName()); 

    //   console.log(storage1.getStorageName()); 
    //   console.log(storage2.storageName); 
    // });

    // app.controller("MockCtrl", function(Storage) {

    // });

    app.run(function ($ionicPlatform, $translate) {
        $ionicPlatform.ready(function () {
            if(typeof navigator.globalization !== "undefined") {
                navigator.globalization.getPreferredLanguage(function(language) {
                    $translate.use((language.value).split("-")[0]).then(function(data) {
                        console.log("SUCCESS -> " + data);
                    }, function(error) {
                        console.log("ERROR -> " + error);
                    });
                }, null);
            }
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