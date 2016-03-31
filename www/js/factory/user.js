;(function() {
  angular.module("app.storage", [])
    .factory("User", function($http, CONSTANT) {

      // var storage = angular.fromJson(window.localStorage["user"]);

      // var login = storage.login;
      // var masterServerToken = storage.masterServerToken;
      // var nodeServerToken = storage.nodeServerToken;

      var userBean = angular.fromJson(window.localStorage["user"] || []);

      var saveUserBean = function() {
        window.localStorage["user"] = angular.toJson(userBean);
      };

      var popupBadRequest = function(title, template) {
        title = title || "ERROR"
        template = template || "Bad request";
        $ionicPopup.alert({
            title: title,
            template: template
          });
      };

      var getRequest = function(login, password, action) {
        var rest = "";
        switch(action) {
          case "signUp":
            rest = "user/registration";
            break;
          case "signIn":
            rest = "user/login"
            break;
        }
        return {
          method: "POST",
          url: CONSTANT.SERVER_URL + rest,
          data: {
            login: login,
            password: password
          }
        }
      };
        
      return {

        getLogin: function() {
          return userBean.login;
        },

        getMasterServerToken: function() {
          return userBean.masterServerToken;
        },

        getNodeServerToken: function() {
          return userBean.nodeServerToken;
        },

        signIn: function(login, password) {
          var request = getRequest(login, password, "signIn");
          $http(request)
            .success(function(response) {
              console.log(response);
              if (response.status === "SUCCESS") {
                userBean.login = response.body.userBean.login;
                userBean.masterServerToken = response.body.oauthKey;
                saveUserBean();
                return true;
              } else {
                popupBadRequest(response.status, response.body);
                return false;
              }

            }).error(function() {
              popupBadRequest();
              return false;
            });
        },

        signUp: function(login, password) {
          var request = getRequest(login, password, "signUp");
          $http(request)
            .success(function(response) {
              console.log(response);
              if (response.status === "SUCCESS") {
                userBean.login = response.body.login;
                saveUserBean();
                return true;
              } else {
                popupBadRequest(response.status, response.body);
                return false;
              }

            }).error(function() {
              popupBadRequest();
              return false;
            });
        },

        logout: function() {
          userBean = [];
          saveUserBean();
        }

      };

    });

}());