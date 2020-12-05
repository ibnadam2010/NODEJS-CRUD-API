const mongoose  = require('mongoose');
const PersonModel = mongoose.model(
"clients",
{
	nom:{
		type:String,
		required:true
	},
	prenom:{
		type:String,
		required:true
	},
	niveau:{
		type:String,
		required:true
	},
	telephone:{
		type:String,
		required:true
	}
},
"person"
)
module.exports = {PersonModel};