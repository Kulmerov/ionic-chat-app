;(function () {
    var app = angular.module('app', ['ionic']);

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

    app.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
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