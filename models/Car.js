import mongoose, { Schema} from "mongoose";

const carSchema = Schema({
    marque : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true,
    },
    user_id : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'User',
    }
})

export default mongoose.model("Car", carSchema)