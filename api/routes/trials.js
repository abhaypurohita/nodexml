var express = require('express');
var router = express.Router();
var path = require('path');
var Promise = require('bluebird');
var Client = require('ftp');
var fs = require('fs');
var package = require('../package');
//api config
var config = require('../config');

//api/trials - root level for this router
router.get('/', function(req, res, next){
    res.status(200).json({
        version: package.version,
        author: package.author
    });
});

//api/trials/downloadfiles - xml files from ftp
router.get('/downloadfiles', function(req, res, next){
    const ftpconn = new Client();

    const connectionProperties = {
        host: config.ftp.host,
        user: config.ftp.username,
        password: config.ftp.password
    };

    const current = Promise.resolve();

    ftpconn.connect(connectionProperties);        
    //change working directory
    ftpconn.cwd(config.ftp.remotepath, (err, currentDir) => {
        if(err) {
            //@todo - return res response
            console.log('some error in directory path change');
        } else {
            //directory listing
            ftpconn.list(config.ftp.remotepath, (err, list) => {
                for(const file of list) {
                    console.log(file);
                    //download file
                    ftpconn.get(file.name, function(err, stream) {                        
                        console.log('downloading file = '+file.name);
                        stream.pipe(fs.createWriteStream(config.ftp.localpath+'/'+file.name));
                        stream.once('close', function() {});
                    });
                }
                ftpconn.end();
            });
        }
    });
});

module.exports = router;
