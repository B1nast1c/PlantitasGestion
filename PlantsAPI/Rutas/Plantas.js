const express = require('express')
const router = express.Router()
const plantSchema = require('../Models/Plants.js')

const jwt = require('jsonwebtoken')

const token = jwt.sign(
    {id: "b1nastic"},
    "jwtPrivateKey")

router.post('/plant',
    (req, res) => {
        const verifyToken = req.header("x-auth-token")
        if(!verifyToken) return res.status(401).send({
            error:"No se dio token"
        })

        res.set('Access-Control-Allow-Origin', '*');
        const plant = plantSchema(req.body)
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

router.get('/plants',
    (req, res) => {
        res.set('Access-Control-Allow-Origin', '*');
        plantSchema
            .find()
            .then((data) => {
                res.send({token: token, data: data})
            })
            .catch((error) => {
                res.json({
                    message: error
                })
            })
    }
)

router.get('/plant/:id',
    (req, res) => {
        const verifyToken = req.header("x-auth-token")
        if(!verifyToken) return res.status(401).send({
            error:"No se dio token"
        })

        res.set('Access-Control-Allow-Origin', '*');
        const { id } = req.params
        plantSchema
            .findById(id)
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

router.put('/plant/:id',
    (req, res) => {
        const verifyToken = req.header("x-auth-token")
        if(!verifyToken) return res.status(401).send({
            error:"No se dio token"
        })

        res.set('Access-Control-Allow-Origin', '*');
        const { id } = req.params
        const { name, price } = req.body
        plantSchema
            .updateOne({ _id: id }, { $set: { name, price } }) //Como se encuentra en la base de Mongo
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

router.delete('/plant/:id',
    (req, res) => {
        const verifyToken = req.header("x-auth-token")
        if(!verifyToken) return res.status(401).send({
            error:"No se dio token"
        })
        
        res.set('Access-Control-Allow-Origin', '*');
        const { id } = req.params
        plantSchema
            .remove({ _id: id })
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