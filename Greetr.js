(function(global, $) {
    var Greeter = function(firstname, lastname, language) {
        return new Greeter.init(firstname, lastname, language)
    }
    var supportedLangs = ['en', 'es'];

    var greetings = {
        'en': 'Hello',
        'es': 'Hola'
    }
    var formalGreetings = {
        'en': 'Greetings',
        'es': 'Sauldos'
    }

    var logMessages = {
        'en': 'Logged In',
        'es': 'conectado'
    }

    Greeter.prototype = {
        fullname: function() {
            return this.firstname + ' ' + this.lastname
        },
        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw 'Unsupported Lang'
            }
        },
        greeting: function() {
            return greetings[this.language] + " " + this.firstname + " " + this.lastname
        },
        formalGreeting: function() {
            return formalGreetings[this.language] + " " + this.firstname + " " + this.lastname
        },

        greet: function(isFormal) {
            var msg;
            if (isFormal) {
                msg = this.formalGreeting()
            } else {
                msg = this.greeting()
            }

            if (console) {
                console.log(msg)
            }
            return this
        },
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + " " + this.fullname())
            }
            return this
        },
        setLang: function(lang) {
            this.language = lang
            this.validate()
            return this;
        },
        htmlGreetings: function(selector, isFormal) {
            isFormal = isFormal || false;
            var msg;
            if (isFormal) {
                msg = this.formalGreeting()
            } else {
                msg = this.greeting()
            }
            $(selector).html(msg)
            return this
        }


    };

    Greeter.init = function(firstname, lastname, language) {
        var self = this;
        this.firstname = firstname || '';
        this.lastname = lastname || '';
        this.language = language || 'en';
    }
    Greeter.init.prototype = Greeter.prototype;

    return global.Greeter = global.G$ = Greeter;

}(window, jQuery))