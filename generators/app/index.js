'use strict';
var Generators = require('yeoman-generator');
const prompts = require('./prompts');
const packageInfo = require('../../package.json');
const yosay = require('yosay');
const mkdirp = require('mkdirp');
const chalk = require('chalk')

class AppGenerator extends Generators {

    constructor(args, opts) {
        super(args, opts);

        this.argument('projectRoot', {type: String, required: false, default: null})
    }

    prompting() {
        // Have Yeoman greet the user.
        this.log(yosay(
        'Welcome to the badass ' + packageInfo.name + ' generator!'
        ));

        return this.prompt(prompts).then((answers) => {
            //do somthing usefull with the answers
            console.log(answers);
            this.answers = answers;
        });
    }

    writing() {
        const root = this._getProjectRoot();
        mkdirp(root);

        this.destinationRoot(root);
    }

    _getProjectRoot() {
        if(this.options.projectRoot) return this.options.projectRoot;

        return this.answers.appName;
    }
};

module.exports = AppGenerator;
