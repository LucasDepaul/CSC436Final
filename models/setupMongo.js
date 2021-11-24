const mongoose = require("mongoose");
// provided by mongo db atlas
// should not commit this string to github because it includes mongo db atlas credentials.
 const uri = process.env.DB_URI;
 function connect() {
  const options = { useNewUrlParser:true };
   mongoose.connect(uri, options).then(
    () => { console.log("Database connection established!"); },
    err => { console.log("Error connecting Database instance due to: ", err); }
  ) }
 module.exports = connect

