const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 const TodoSchema = new Schema(
  {
	// add all the fields from todos. 
    name: {type: String, required: true},
	author: {type: Schema.Types.ObjectId, ref: 'User', required: true},
	dateCreated: {type: String, required:true},
    description: {type: String, required: true},
	completed: {type: Boolean, Default: false, required: true},
	dateCompleted: {type: String, required: true}
  }
);

 //Export model
module.exports = mongoose.model('Todo', TodoSchema);