const mongoose = require("mongoose");

mongoose.connect("127.0.0.1:27017/socialnetworkapi");

// Export
module.exports = mongoose.connection;
