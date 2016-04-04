;(function () {
    var app = angular.module("app");

    app.service("CONSTANT", function () {
        var self = this;
        
        self.HTTP = {
            MASTER_SERVER_URL : "http://css.cloudapp.net:8080",
            REQUEST : {
                REGISTRATION: {
                    URL: self.MASTER_SERVER_URL + "/user/registration",
                    METHOD: "POST"
                },
                AUTHORIZATION: {
                    URL: self.MASTER_SERVER_URL + "/user/login",
                    METHOD: "POST"
                },
                GET_MESSAGE_SERVER: {
                    URL: self.MASTER_SERVER_URL + "/message/server",
                    METHOD: "GET"
                },
                SEND_MESSAGE: {
                    URL: self.MASTER_SERVER_URL + "/message/send",
                    METHOD: "POST"
                },
                RECEIVE_MESSAGES: {
                    REST: "/messages/",
                    METHOD: "POST"
                }
            }
        };
        
    });

}());