var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const privatekey = process.env.JWT_PRIVATE_KEY;

router.use(function(req, res, next){
	bcrypt.genSalt(saltRounds, function(err, salt){
		bcrypt.hash(req.body.password, salt, function(err, hash){
			req.hashedPassword = hash;
			next();
		});
	});
});

router.post('/login', async function(req, res, next) {
	if (req.body.username && req.body.password){
		// valid request
		// query the user records to find a user wit h username === req.body.user, select password(hashed),
		const user = await User.findOne().where('username').equals(req.body.username).exec()

    	if (user) {
			// compare req.body.password to hash retrieved from mongo
			return await bcrypt.compare(req.body.password, user.password).then(result => {
			if (result === true){
				const token = jwt.sign({id: user.id}, privatekey, {algorithm: 'RS256'});
				return res.status(200).json({"_id": user.id, "access_token": token});
			}
			else {
				return res.status(401).send("Incorrect password");
			}
			}).catch(error => {
				return res.status(500).json({"error": error.message});
			});
		}
	}
	else 
		res.status(400).json({"error": "Username or password missing"});
});

router.post('/register', async function(req, res, next){
	if (req.body.username && req.body.password && req.body.passwordRepeat) {
		// valid request
		if(req.body.password === req.body.passwordRepeat){
			
			// store username and password(hashed)
			const user = new User({
    			"username": req.body.username,
    			"password": req.hashedPassword
    		})
  			await user.save().then( savedUser => {
      			return res.status(201).json({
       				"id": savedUser._id,
      				"username": savedUser.username
      			})
			}).catch( error => {
      			return res.status(500).json({"error": error.message})
    		});
		}
		else 
			res.status(400).json({"error": "Passwords don't match"});
	}
	else 
		res.status(400).json({"error": "Username or passwords missing"});
});


module.exports = router;
