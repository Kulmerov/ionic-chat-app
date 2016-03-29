;(function() {
  angular.module("app.inboxStorage", ['app.storage'])
    .service("InboxStorage", function(Storage) {
      var inboxStorage = new Storage("InboxStorage");

      this.add = function(inboxMessage) {
        inboxStorage.add(inboxMessage);
      }

      this.list = function() {
        inboxStorage.list();
      }
    });

}());