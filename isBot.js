/**
 * isBot.js v0.1
 *
 * A simple library to detect bots,
 * Googlebot,
 * Bingbot,
 * Yahoobot,
 * via user agent sniffing.
 *
 * @author: Yoann Lecuyer (yoann.lecuyer@gmail.com)
 *
 * @license: http://creativecommons.org/publicdomain/zero/1.0/
 */
(function (global) {

    var googlebot         = /Googlebot/i,
        bingbot           = /bingbot/i,
        yahoobot           = /Yahoo! Slurp/i;

    var match = function(regex, userAgent) {
        return regex.test(userAgent);
    };

    var IsBotClass = function(userAgent) {
        var ua = userAgent || navigator.userAgent;

        this.googlebot = match(googlebot, ua);
        this.bingbot = match(bingbot, ua);
        this.yahoobot = match(yahoobot, ua);

        this.bot = this.googlebot || this.bingbot || this.yahoobot;

        if (typeof window === 'undefined') {
            return this;
        }
    };

    var instantiate = function() {
        var IB = new IsBotClass();
        IB.Class = IsBotClass;
        return IB;
    };

    if (typeof module != 'undefined' && module.exports && typeof window === 'undefined') {
        //node
        module.exports = IsBotClass;
    } else if (typeof module != 'undefined' && module.exports && typeof window !== 'undefined') {
        //browserify
        module.exports = instantiate();
    } else if (typeof define === 'function' && define.amd) {
        //AMD
        define('isBot', [], global.isBot = instantiate());
    } else {
        global.isBot = instantiate();
    }

})(this);
