const express = require("express");
const mongoose = require("mongoose");

const dotenv = require ("dotenv");


dotenv.config();
const app = express();

mongoose.connect("mongodb://" + process.env.DB_USERNAME + ":"+ process.env.DB_PASSWORD + "@" + process.env.DB_HOST + ":" + process.env.DB_PORT + "/" +  process.env.DB_NAME,{
    useNewUrlParser: true,
    useUnifiedTopology:true,

}
).then(()=>{
    console.log("Conected to DB Ecoturismo Cundinamarca");
    //Se llama al puerto 5000 
    app.listen(process.env.PORT, () =>{
    console.log("PORT:  "  + process.env.PORT );
});
}).catch((error) =>{
    console.log("Error en la conexion a la base de datos.")
});



