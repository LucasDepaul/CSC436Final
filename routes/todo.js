var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const Todo = require('../models/Todo');
var ObjectId = require('mongodb').ObjectID;
const User = require('../models/User');
const mongoose = require('mongoose').ObjectId

const privatekey = process.env.JWT_PRIVATE_KEY;
// router level middleware 
router.use(function(req, res, next) {
    if (req.header("Authorization")) {
        try {
            req.payload = jwt.verify(req.header("Authorization"), privatekey, { algorithms: ['RS256'] });
        } catch(error) {
            return res.status(401).json({"error": error.message});
        }
	} else {
        return res.status(401).json({"error": "Unauthorized"});
    }
    next()
})

router.get('/id/:id', async function(req,res,next){
	const todo = await Todo.findById(req.params.id).exec();
    return res.status(200).json(todo)
});

router.put('/toggle/:id/:completed', async function(req,res,next){
	const todo = await Todo.findById(req.params.id).exec();
	console.log(todo.author)
	console.log(req.body.author)
	if (todo.author.equals(req.body.author)){
	await Todo.updateOne({_id: req.params.id}, 
		{$set: {
			completed: req.params.completed,
			dateCompleted: req.body.dateCompleted
	}}).catch(function () {
     console.log("Promise Rejected");
});
	return res.status(200).send("Todo complete was togled")
}
	else 
		return res.status(401).send("Unauthorized")
})

router.delete('/delete/:id', async function(req,res,next){
	const todo = await Todo.findById(req.params.id).exec();
	var user = await User.findById(req.body.author).exec();
	console.log("Author: " + req.body.author);
	console.log(user.todos)
	var todos = user.todos;
	if (todo.author.equals(req.body.author)){
		//if (await user.update({},{$pull:{todos: {$in: [todo]}}}).remove().exec())
			
		if(await todos.pop())
			console.log("success");
		await user.save();
		//await user.todos.findById(req.body.author).remove().exec();
		await Todo.findById(req.params.id).remove().exec();
		return res.status(200).send("Todo: " + req.params.id + " was deleted ")
	}
	else 
		return res.status(401).send("Unauthorized")
})


router.get('/', async function(req, res, next) {
    const todos = await Todo.find().where('author').equals(req.payload.id).exec()
    return res.status(200).json({"todos": todos})
});

router.post('/', async function(req, res) {
	console.log("id: " + req.payload.id)
	var user = await User.findById(req.payload.id).exec()
	const todo = new Todo({
		"name": req.body.name ,
		"author": req.payload.id ,
		"dateCreated": req.body.dateCreated ,
		"description": req.body.description ,
		"completed": req.body.completed ,
		"dateCompleted": req.body.dateCompleted
    })
    await todo.save().then( async function (savedTodo){
    	await user.todos.push(todo)
    	await user.save()
        return res.status(201).json({
            "id": savedTodo._id,
		    "name": savedTodo.name ,
			"author": savedTodo.author ,
			"dateCreated": savedTodo.dateCreated ,
		    "description": savedTodo.description ,
			"completed": savedTodo.completed ,
			"dateCompleted": savedTodo.dateCompleted
        })
    }).catch( error => {
        return res.status(500).json({"error": error.message})
    });
});


module.exports = router;
