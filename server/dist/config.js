'use strict';

var nconf = require('nconf');

nconf.argv().env().file({ file: 'config/config.json' });

module.exports = nconf;
//# sourceMappingURL=config.js.map