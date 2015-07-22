#!/usr/bin/env node

var argv = require("minimist")(process.argv.slice(2));
var colors = require("colors");
var http = require("http");

//Print help on -h or --help
if(argv.h || argv.help){
    var help = [
        "Usage: root-directory [options]",
        " -p --port     Port to run static server on [8080]",
        " -s --silent   Supress messages",
        " -h --help     You are in the help documentation"
    ].join('\n');
    
    console.log(help);
}
