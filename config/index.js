var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return 'mongodb://'+ configValues.uname + ':' + configValues.pwd +'@ds021689.mlab.com:21689/master';
    }
    
}