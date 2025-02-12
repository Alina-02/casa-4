import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	name : {
		type : String,
		minLength : 3,  
		required : true
	},
	points : {
		type : Number,
		required : true,
	},
    team: {
		type : mongoose.Schema.Types.ObjectId,
		ref : 'Group'
	},
    passwordHash :  {
		type : String,
		required : true 
	},
})

//define a custom toJSON so that it converts object _id to string and ignores __v param of the objects
UserSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})

export default UserSchema