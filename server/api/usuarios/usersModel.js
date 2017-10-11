'use strict'

var conn = require('../userConnection'),

    UserModel = () => {}

UserModel.getAll = (cb) => {
    conn.query('SELECT * FROM USUARIOS', cb)
}

UserModel.getOne = () => {

}

UserModel.insert = () => {

}

UserModel.update = () => {

}

UserModel.delete = () => {

}


module.exports = UserModel