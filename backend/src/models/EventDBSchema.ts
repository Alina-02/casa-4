import mongoose from "mongoose";

export const EventSchema = new mongoose.Schema({
    timeStamp : {
		type : String, 
		required : true 
	},
    user : 
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User',
            required: true
        }
    ,
    points : {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['ADD', 'REMOVE', 'BET']
    },
    winner:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    },
    loser:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    }
})

//define a custom toJSON so that it converts object _id to string and ignores __v param of the objects
EventSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})

export default mongoose.model("Event", EventSchema);