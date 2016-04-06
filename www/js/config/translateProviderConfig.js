;(function () {
    var app = angular.module("app");

    app.config(["$translateProvider", function($translateProvider) {
        $translateProvider.translations("en", {
            'TEST': "dsf",
            
            SIDE_MENU: {
                TITLE: "Menu",
                INBOX: "Inbox",
                OUTBOX: "Outbox",
                SIGN_IN: "Sign in",
                SIGN_UP: "Sign up",
                LOGOUT: "Logout"
            },
            INBOX: {
                TITLE: "Inbox messages"
            },
            OUTBOX: {
                TITLE: "Outbox messages"
            },
            SIGN_IN: {
                TITLE: "Sign in",
                LOGIN_PLACEHOLDER: "Login",
                PASSWORD_PLACEHOLDER: "Password",
                BUTTON: "Sign in"
            },
            SIGN_UP: {
                TITLE: "Sign up",
                LOGIN_PLACEHOLDER: "Login",
                PASSWORD_PLACEHOLDER: "Password",
                BUTTON: "Sign up"
            },
            NEW_MESSAGE: {
                TITLE: "New message",
                TO_PLACEHOLDER: "To",
                BODY_PLACEHOLDER: "Body",
                BUTTON_SEND: "Send"
            }
        });

        $translateProvider.translations("ru", {
            SIDE_MENU: {
                TITLE: "Меню",
                INBOX: "Входящие",
                OUTBOX: "Исходящие",
                SIGN_IN: "Войти",
                SIGN_UP: "Регистрация",
                LOGOUT: "Выход"
            },
            INBOX: {
                TITLE: "Входящие сообщения"
            },
            OUTBOX: {
                TITLE: "Исходящие сообщения"
            },
            SIGN_IN: {
                TITLE: "Войти",
                LOGIN_PLACEHOLDER: "Логин",
                PASSWORD_PLACEHOLDER: "Пароль",
                BUTTON: "Войти"
            },
            SIGN_UP: {
                TITLE: "Регистрация",
                LOGIN_PLACEHOLDER: "Логин",
                PASSWORD_PLACEHOLDER: "Пароль",
                BUTTON: "Регистрация"
            },
            NEW_MESSAGE: {
                TITLE: "Новое сообщение",
                TO_PLACEHOLDER: "Логин получателя",
                BODY_PLACEHOLDER: "Тело сообщения",
                BUTTON: "Отправить"
            }
        });

        $translateProvider.preferredLanguage("en");
        $translateProvider.fallbackLanguage("en");
    }]);
}());