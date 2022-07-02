const express = require('express')
const router = express.Router()
const userSchema = require('../Models/Users.js')

const jwt = require('jsonwebtoken')

const token = jwt.sign(
    {id: "b1nastic"},
    "jwtPrivateKey")

router.post('/login',
    (req, res) => {
        const verifyToken = req.header("x-auth-token")
        if(!verifyToken) return res.status(401).send({
            error:"No se dio token"
        })
        res.set('Access-Control-Allow-Origin', '*');
        const plant = userSchema(req.body)
        plant
            .save()
            .then((data) => {
                res.send({token: token})
            })
            .catch((error) => {
                res.json({
                    message: error
                })
            })
    }
)

router.get('/users',
    (req, res) => {
        res.set('Access-Control-Allow-Origin', '*');
        userSchema
            .find()
            .then((data) => {
                res.send({data: data})
            })
            .catch((error) => {
                res.json({
                    message: error
                })
            })
    }
)

router.post('/register',
    (req, res) => {
        res.set('Access-Control-Allow-Origin', '*');
        const plant = userSchema(req.body)
        plant
            .save()
            .then((data) => {
                res.json(data)
            })
            .catch((error) => {
                res.json({
                    message: error
                })
            })
    }
)

module.exports = router