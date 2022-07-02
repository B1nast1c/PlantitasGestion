const mongoose = require('mongoose')

const uri = "mongodb://mongo-service:27017/store"
mongoose.connect(uri, { useNewUrlParser: true })
    .then(() => {
        console.log('Connected')
    })
    .catch(e => {
        console.log('Connection error', e.message)
    })

const db = mongoose.connection
module.exports = db