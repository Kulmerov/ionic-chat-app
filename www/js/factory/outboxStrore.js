;(function() {
  angular.module("app.outboxStore", [])
    .factory("InboxStore", function() {
      var outbox = angular.fromJson(window.localStorage["outbox"] || "[]");

      function persist() {
        window.localStorage["outbox"] = angular.toJson(outbox); 
      }

      return {

        list: function() {
          return outbox; 
        },

        get: function(noteId) {
          for(var i = 0; i < notes.length; i++) {
            if (notes[i].id === noteId) {
              return notes[i];
            }
          }
          return undefined;
        },

        create: function(note) {
          notes.push(note);
          persist();
        },

        update: function(note) {
          for(var i = 0; i < notes.length; i++) {
            if (notes[i].id === note.id) {
              notes[i] = note;
              persist();
              return;
            }
          }
        },

        move: function(note, fromIndex, toIndex) {
          notes.splice(fromIndex, 1);
          notes.splice(toIndex, 0, note);
          persist(); 
        },

        remove: function(noteId) {
      for(var i = 0; i < notes.length; i++) {
            if (notes[i].id === noteId) {
              notes.splice(i, 1);
              persist();
              return;
            }
          }
        }

      };
    });

}());