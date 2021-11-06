const mysql = require('mysql')
const config = require('../config.json')

const db_connect = () => {
    return new Promise((resolve, reject) => {
        con = mysql.createConnection({
            host: config.DB_IP,
            port: config.DB_PORT,
            user: config.DB_USER,
            password: config.DB_PASS,
            database: "foto-searcher"
        })

        con.connect(function (err) {
            if (err) {
                create_database()
                    .then(() => {
                        console.log("-Base de datos conectada")
                        resolve()
                    })
            } else {
                console.log("-Base de datos conectada")
                resolve()
            }
        })
    })
}


const query = (sql) => {
    return new Promise((resolve, reject) => {
        con.query(sql, function (err, result) {
            if (err) reject(err)
            resolve(result)
        })
    })
}

module.exports = {
    db_connect,
    query
}
