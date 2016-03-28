;(function() {
  angular.module("app.inboxStore", [])
    .factory("InboxStore", function() {
      var inbox = angular.fromJson(window.localStorage["inbox"] || "[]");

      function persist() {
        window.localStorage["inbox"] = angular.toJson(inbox); 
      }

      return {

        list: function() {
          return inbox; 
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