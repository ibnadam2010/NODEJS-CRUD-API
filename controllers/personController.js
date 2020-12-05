const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;
const {PersonModel} = require('../models/personModel');
router.get('/persons', (req, res)=>{
	PersonModel.find((err,docs)=>{
	//console.log(docs);
	if(!err)res.send(docs);
	else console.log("impossible de remonter les infos" + err);
	})
});

router.post('/person/add',(req, res)=>{
console.log(req.body);
	const newRecord = new PersonModel({
		nom:req.body.nom,
		prenom:req.body.prenom,
		niveau:req.body.niveau,
		telephone:req.body.telephone
	});
	newRecord.save((err, docs)=>{
		if(!err)res.send(docs +" Insert successfully");
		else console.log("failed to insert data " + err);
	})
});

router.put('/person/update/:id', (req, res)=>{
	if(!ObjectID.isValid(req.params.id))
	return res.status(400).send("ID Inconnu "+req.params.id);
	const updateRecord = {
		nom:req.body.nom,
		prenom:req.body.prenom,
		niveau:req.body.niveau,
		telephone:req.body.telephone
	};

	PersonModel.findByIdAndUpdate(
		req.params.id,
		{$set:updateRecord},
		{new:true},
		(err, docs)=>{
			if(!err) res.send(docs);
			else console.log("updated failed "+err);
		})
});

	router.delete('/person/delete/:id',(req, res)=>{
	if(!ObjectID.isValid(req.params.id))
	return res.status(400).send("ID Inconnu updae failed "+req.params.id);

	PersonModel.findByIdAndRemove(
		req.params.id,
		(err, docs)=>{
			if(!err)res.send(docs);
			else console.log("ID Inconnu failed to delete "+err);
		}
	)
	})


module.exports = router;