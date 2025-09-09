const mongoose = require("mongoose");

const connect_to_db = async (db_url) => {
   return await mongoose.connect(db_url);
}

module.exports = { connect_to_db }