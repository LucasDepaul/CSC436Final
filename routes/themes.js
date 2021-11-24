var express = require('express');
var router = express.Router();
const Theme = require('../models/Theme');

router.post('/', async function(req, res) {
	const theme = new Theme({
		"name": req.body.name ,
	    "primaryColor": req.body.primaryColor ,
	    "secondaryColor": req.body.secondaryColor ,
	    "backgroundColor": req.body.backgroundColor,
	    "textAlign": req.body.textAlign ,
	    "border": req.body.border,
	    "margin": req.body.margin ,
	    "padding": req.body.padding ,
	    "boxShadow": req.body.boxShadow 
    })
    await theme.save().then( async function (savedTheme){
        return res.status(201).json({
		"name": req.body.name ,
	    "primaryColor": req.body.primaryColor ,
	    "secondaryColor": req.body.secondaryColor ,
	    "backgroundColor": req.body.backgroundColor,
	    "textAlign": req.body.textAlign ,
	    "border": req.body.border,
	    "margin": req.body.margin ,
	    "padding": req.body.padding ,
	    "boxShadow": req.body.boxShadow 
    })
    }).catch( error => {
        return res.status(500).json({"error": error.message})
    });
});

router.get('/', async function(req, res, next) {
    const themes = await Theme.find().exec()
    return res.status(200).json({"themes": themes})
});

module.exports = router;