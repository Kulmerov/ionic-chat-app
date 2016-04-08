// ;(function () {
//     var app = angular.module("app");
//
//     app.service("ConnectionListener", function ($ionicPlatform, $injector, $rootScope, $cordovaNetwork) {
//         var self = this;
//        
//         self.startListen = function () {
//
//             $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
//                 $injector.get("$ionicLoading").show({
//                     template: "Waiting for connection"
//                 });
//             });
//
//             $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
//                 $injector.get("$ionicLoading").hide();
//             });
//            
//         };
//     });
//
// }());