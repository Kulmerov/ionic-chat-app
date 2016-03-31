;(function () {
    var app = angular.module("app");
    
    app.factory("Storage", function () {

        function Storage(storageName) {
            this.storageName = storageName;
            this.storage = angular.fromJson(window.localStorage[storageName] || "[]");
        }

        function persist(storageName, storage) {
            window.localStorage[storageName] = angular.toJson(storage);
        }

        Storage.prototype.list = function () {
            return this.storage;
        };

        Storage.prototype.add = function (data) {
            this.storage.push(data);
            persist(this.storageName, this.storage);
        };

        return Storage;
    });

}());