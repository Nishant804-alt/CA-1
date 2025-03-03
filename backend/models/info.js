import mongoose  from "mongoose";

const restaurentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    city:{
        type: String,
       required: true
    },
    itemsArr:
    {itemid:mongoose.Schema.Types.ObjectId},
});

export const info = mongoose.model("info", restaurentSchema )