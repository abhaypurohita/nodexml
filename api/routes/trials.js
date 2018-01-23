var express = require('express');
var router = express.Router();
var package = require('../package');

//ftp sync
var ftpsync = require('ftpsync');
//api config
var config = require('../config');

//ftpsync options
var options = {
    host: config.ftp.host,
    user: config.ftp.username,
    pass: config.ftp.password,
    local: config.ftp.localpath,
    remote: config.ftp.remotepath
};

//api/trials - root level for this router
router.get('/', function(req, res, next){
    res.status(200).json({
        version: package.version,
        author: package.author
    });
});

//api/trials/downloadfiles - xml files from ftp
router.get('/syncfiles', function(req, res, next){    
    ftpsync.settings = options;
    
    ftpsync.run(function(err, result) {
        if(err) {
            res.status(503).json({
                error: {
                    message: 'Error connecting to remote folder'
                }
            });
        } else {
            console.log('downloading files');
        }
    });
});

module.exports = router;
