import mongoose, { trusted } from "mongoose";

const item_detailsSchema = mongoose.Schema({
    name:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required:true
  },

});
export const info2 = mongoose.model("info2", item_detailsSchema )