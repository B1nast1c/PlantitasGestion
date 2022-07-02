const express = require('express')
const app = express()
const port = process.env.PORT || 9001
const cors = require('cors')
const mongoose = require('mongoose')

const config = require('./Rutas/Users')
require("dotenv").config()

//Base de datos de usuario de prueba :D
const mongURI = "mongodb+srv://b1nastic:12101964@cluster0.namkgtx.mongodb.net/?retryWrites=true&w=majority" 
mongoose.connect(mongURI,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

mongoose.connection.on("connected",() =>{
    console.log("Connected")
})
mongoose.connection.on("error",(err) =>{
    console.log("error",error)
})

app.use(express.json())
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, x-auth-token");;
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
});

app.use('/', config)
app.use(cors({ origin: true }));
app.listen(port, () => {
    console.log("Puerto: ", port)
})