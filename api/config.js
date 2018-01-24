var path = require('path');
//custom config
var config = {};

config.sqldatabase = {};
config.ftp = {};

//ftp settings
/*config.ftp.host = 'ftp.rsb.net.au';
config.ftp.port = '21';
config.ftp.username = 'tvnftp';
config.ftp.password = 'tracks1de';*/

config.ftp.host = 'mediatabcorp.upload.akamai.com';
config.ftp.port = '21';
config.ftp.username = 'skyracingmedia';
config.ftp.password = 'ApacSkyra!n6';

config.ftp.localpath = path.join(__dirname, '.', 'xmlfiles');
config.ftp.remotepath = '/318982/sky';
config.ftp.processpath = path.join(__dirname, '.', 'processfiles');

module.exports = config;



