import mongoose, { Schema} from "mongoose";

const carSchema = Schema({
    marque : {
        type : String,
        required : true,
        unique : true,
    },
    name : {
        type : String,
        required : true,
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'User',
    }
})

export default mongoose.model("Car", carSchema)