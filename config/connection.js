const mongoose = require("mongoose");

mongoose.connect('');

// Export
module.exports = mongoose.connection;
