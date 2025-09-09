const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema( 
{
    image_id: {
        type: Number , 
        unique: true , 
        required: true
    } , 

    image_url: {
        type: String , 
        unique: true , 
        required: true
    }

} , { timestamps: true } 

);

const ImageModel = mongoose.model("images" , imageSchema);

module.exports = { ImageModel };