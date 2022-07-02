const express = require('express')
const app = express()
const port = process.env.PORT || 9000
const cors = require('cors')

const config = require('./Rutas/Plantas')
const db = require('./Database/connection')
require("dotenv").config()

db.on('error', console.error.bind(console, 'Error en MongoDB:'))

app.use(express.json())
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, x-auth-token");;
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
});

app.use('/api', config)
app.use(cors({ origin: true }));

app.listen(port, () => {
    console.log("Puerto: ", port)
})