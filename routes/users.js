var express = require('express');
var router = express.Router();
const User = require('../models/User');
const Todo = require('../models/Todo')

/* GET users listing. */
router.get('/', async function(req, res, next) {
    const users = await User.find().exec()
    return res.status(200).json({"users": users})
});
router.get('/todos/:id', async function(req, res, next) {
	const todos = await Todo.find().where('author').equals(req.params.id).exec()
	    return res.status(200).json({"todos": todos})
});
router.get('/getname/:id', async function(req, res, next) {
    const user = await User.findById(req.params.id).exec()
    return res.status(200).json(user)
});
router.get('/getUser/:id', async function(req, res, next) {
	const user = await User.find().where('username').equals(req.params.id).exec()
    return res.status(200).send(user)
});
module.exports = router;
