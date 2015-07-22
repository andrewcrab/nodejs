#!/usr/bin/env node

var argv = require("minimist")(process.argv.slice(2));
var colors = require("colors");
var http = require("http");
var nodeStatic = require("node-static");

//Print help on -h or --help
if(argv.h || argv.help){
    var help = [
        "Usage: http-server"+ " root-directory ".red +"[options]",
        " -s --silent   Supress messages",
        " -h --help     You are in the help documentation"
    ].join('\n');
    
    console.log(help);
}

//Silent loging if -s
var log = (argv.s && argv.silent) ? (function() {}) : console.log;

//Start server and render files
var port = process.env.PORT;
var root = argv._[0] || ".";
var file = new(nodeStatic.Server)(root,{AutoIndex: true, cache: 3600});
log("Starting static seb server for ".yellow + root.cyan + " on port ".yellow + port.toString().cyan + ".");
http.createServer(function(request, response){
    file.serve(request, response);
}).listen(process.env.PORT, process.env.IP);

//Exit server on Ctrl + C
process.on('SIGINT', function(){
    log("\nStatic web server stopped.".red);
    process.exit();
});



