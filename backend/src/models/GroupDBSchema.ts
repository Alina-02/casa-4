import mongoose from "mongoose";

export const GroupSchema = new mongoose.Schema({
    name : {
		type : String,
		minLength : 3,  
		required : true 
	},
    users : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
    ],
    points : {
        type: Number,
        required: true
    }
})

//define a custom toJSON so that it converts object _id to string and ignores __v param of the objects
GroupSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})

export default mongoose.model("Group", GroupSchema);