;(function() {
  angular.module("app.outboxStorage", ['app.storage'])
    .service("OutboxStorage", function(Storage) {
      var outboxStorage = new Storage("OutboxStorage");

      this.add = function(outboxMessage) {
        outboxStorage.add(outboxMessage);
      }

      this.list = function() {
        return outboxStorage.list();
      }
    });

}());