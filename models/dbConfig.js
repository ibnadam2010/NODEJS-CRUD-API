const mongoose = require('mongoose');
mongoose.connect(
	"mongodb://localhost:27017/clients",
	{useNewUrlParser:true, useUnifiedTopology:true},
	(error) => {
		if(!error) console.log("mongodb connected");
		else console.log("mongodb connection failed " + error);
	}
)