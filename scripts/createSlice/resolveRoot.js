const path = require('node:path');

module.exports = (...segments) =>
    path.resolve(__dirname, '..', '..', ...segments);
