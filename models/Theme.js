// one schema one model per file.

const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 const ThemeSchema = new Schema(
	{
      name: {type: String, required: true, unique: true},
      primaryColor: {type: String, required: true},
      secondaryColor: {type: String, required: true},
      backgroundColor: {type: String, required: true},
      textAlign: {type: String, required: true},
      border: {type: String, required: true},
      margin: {type: String, required: true},
      padding: {type: String, required: true},
      boxShadow: {type: String, required: true},
    }
);

 //Export model
module.exports = mongoose.model('Theme', ThemeSchema);