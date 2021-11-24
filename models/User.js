// one schema one model per file.

const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 const UserSchema = new Schema(
  {
	// username is primary key
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true,},
	//  todos is a foreign key to users todos
    todos: [{type: Schema.Types.ObjectId, ref: 'Todo'}]
  }
);

 //Export model
module.exports = mongoose.model('User', UserSchema);