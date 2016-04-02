// ;(function () {
//     var app = angular.module("app");
//
//     app.service("Message", function (Storage, QueryBuilder, User) {
//         var inboxStorage = new Storage("InboxStorage");
//         var outboxStorage = new Storage("OutboxStorage");
//
//         this.send = function (to, type, body) {
//             var request = QueryBuilder.constructRequest("sendMessage", {
//                 to: to,
//                 from: User.getLogin(),
//                 type: type,
//                 body: body
//             });
//
//             QueryBuilder.sendRequest(request, function () {
//                 outboxStorage.add({
//                     to: to,
//                     body: body
//                 });
//             });
//         };
//
//         this.getNew = function () {
//             var request = QueryBuilder.constructRequest("newMessage");
//
//             QueryBuilder.sendRequest(request, function (response) {
//                 angular.forEach(response, function(message) {
//                     inboxStorage.add({
//                         from: message.from,
//                         body: message.body
//                     });
//                 });
//             });
//            
//         };
//     });
//
// }());