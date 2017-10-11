'use strict'

var mysql = require('mysql'),
    conf = require('./db-conf'),
    dbOptions = {
        host: conf.mysql.host,
        port: conf.mysql.port,
        user: conf.mysql.user,
        password: conf.mysql.password,
        database: conf.mysql.database
    },
    myConn = mysql.createConnection(dbOptions)
myConn.connect((err) => {
    return (err) ? console.log('Error al conectar : ', err.stack) : console.log('Conexion Exitosa', myConn.threadId);
})

module.exports = myConn