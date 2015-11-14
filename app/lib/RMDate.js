class RMDate {

    constructor() {  // 2 ways: 1 argument with string as Date (2015-10-09) or at least 3 arguments for correct date

        /** @type {Number} */
        let ms;
        /** @type {Date} */
        let date;

        if (arguments.length == 1) { //string as Date
            if (ms = Date.parse(arguments[0])) {
                date = new Date(ms);

                this.year   = date.getUTCFullYear();
                this.month  = date.getUTCMonth();
                this.day    = date.getUTCDate();
                this.hour   = date.getUTCHours();
                this.minute = date.getUTCMinutes();
            }
        }

        if (typeof date == 'undefined') { // year, month, day, hour, minute
            this.year   = arguments[0] || 0;
            this.month  = arguments[1] || 0;
            this.day    = arguments[2] || 0;
            this.hour   = arguments[3] || 0;
            this.minute = arguments[4] || 0;
        }
        Object.preventExtensions(this);
    }

    /** @type {function():boolean} */
    isEmpty() {
        for (var prop of this) {
            if(this[prop] !== null) { // in ES6 hasOwnProperty is not necessary
                return false;
            }
        }
        return true;
    }

    /** @type {function():this} */
    toStartOfDay() {
        this.hour = 0;
        this.minute = 0;
        return this;
    }

    /** @type {function():this} */
    toEndOfDay() {
        this.hour = 23;
        this.minute = 59;
        return this;
    }

    /** @type {function():String} */
    toString() {
        return this.year + "-" + this.month + "-" + this.day;
    }
}

export {RMDate};