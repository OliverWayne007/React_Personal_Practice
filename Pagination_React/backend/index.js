const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config();

const { connect_to_db } = require("./connection.js")

const { ImageModel } = require("./model/image.js")

const app = express();

const PORT = process.env.PORT || 8002;

connect_to_db(process.env.DB_URL)
.then( () => {
    console.log('MongoDB Connected !');
    console.log('\n');
})
.catch( (err) => {
    console.log('Mongo Error' , err);
    console.log('\n');
});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.text());

app.get("/api/images/count" , async(request , response) => {
    const images = await ImageModel.find();
    return response.status(200).json( { "image_count" : images.length } );
})

app.get('/api/images/:id' , async(request , response) => {
    const id = request.params.id;
    console.log("id: " , id);
    const { image_id , image_url } = await ImageModel.findOne( { image_id: id } );
    return response.status(200).json( { image_data: { image_id: image_id ,  image_url: image_url } } );
})

app.post("/api/images" , async(request , response) => {
    if( !request.body )
    {
        return response.status(404).json({error: "Empty request body...."});
    }
    const {image_id , image_url } = request.body;
    console.log("request.body: " , request.body);
    console.log("image_id: " , image_id);
    console.log("image_url: " , image_url);

    if( image_id == undefined || !image_url )
    {
        return response.status(404).json({error: "One or more fields are absent...."});
    }
    try
    {
        const image = new ImageModel(request.body);
        await image.save();
        return response.status(200).json( { message: "Image saved successfully !!!" } );
    }
    catch(error)
    {
        return response.status(500).json( { error: error } );
    }
})

app.listen(PORT , () => {
    console.log(`Server started....`);
    console.log(`Server running on port: ${PORT}`);
});