'use strict'

module.exports = [
    {
        type: 'input',
        name: 'appName',
        message: 'Please choose your application name',
        default: 'MyApplication',
        store: true,
        validate: function (input) {
            if (/^([a-zA-Z0-9_]*)$/.test(input)) {
                return true;
            }
            return 'Your application name cannot contain special characters or a blank space, using the default name instead : ' + this.appname;
        }
    }
];
