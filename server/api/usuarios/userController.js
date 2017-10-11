'use strict'

var UserModel = require('./usersModel'),
    UserController = () => {}

UserController.getAll = (req, res, next) => {
    UserModel.getAll((err, rows) => {
        if (err) {
            next(new Error('No hay registros'))
        } else {
            res.json(rows);
        }
    })
}

UserController.getOne = (req, res, next) => {

}

UserController.insert = (req, res, next) => {

}

UserController.update = (req, res, next) => {

}

UserController.delete = (req, res, next) => {

}

UserController.error404 = (req, res, next) => {

}

module.exports = UserController