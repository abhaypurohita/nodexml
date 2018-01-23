var path = require('path');
//custom config
var config = {};

config.sqldatabase = {};
config.ftp = {};

//ftp settings
config.ftp.host = 'ftp.rsb.net.au';
config.ftp.port = '22';
config.ftp.username = 'tvnftp';
config.ftp.password = 'tracks1de';
config.ftp.localpath = path.join(__dirname, '.', 'xmlfiles');
config.ftp.remotepath = '/tvn/RISA XML 5.0';
config.ftp.processpath = path.join(__dirname, '.', 'processfiles');

module.exports = config;



