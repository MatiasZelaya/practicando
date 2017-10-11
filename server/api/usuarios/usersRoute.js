'use strict'

var UserController = require('./userController'),
    express = require('express'),
    router = express.Router()

router.get('/', UserController.getAll)

router.get('/agregar', (req, res, next) => {
    res.render('add-user', { title: 'Agregar Usuario' })
})

router.post('api/usuarios', (req, res, next) => {
    req.getConnection((err, users) => {
        let user = {
            user_id: req.body.user_id,
            name: req.body.name,
            mail: req.body.mail,
            phone: req.body.phone
        }
    })
})

module.exports = router