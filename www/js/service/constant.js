;(function () {
    var app = angular.module("app");

    app.service("CONSTANT", function () {
        var self = this;

        var MASTER_SERVER_URL = "http://css.cloudapp.net:8080";

        self.HTTP = {
            MASTER_SERVER_URL : MASTER_SERVER_URL,
            REQUEST : {
                REGISTRATION: {
                    URL: MASTER_SERVER_URL + "/user/registration",
                    METHOD: "POST"
                },
                AUTHORIZATION: {
                    URL: MASTER_SERVER_URL + "/user/login",
                    METHOD: "POST"
                },
                GET_MESSAGE_SERVER: {
                    URL: MASTER_SERVER_URL + "/message/server",
                    METHOD: "GET"
                },
                SEND_MESSAGE: {
                    URL: MASTER_SERVER_URL + "/message/send",
                    METHOD: "POST"
                },
                RECEIVE_MESSAGES: {
                    REST: "/messages/",
                    METHOD: "GET"
                }
            }
        };
        
    });

}());