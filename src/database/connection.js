const sql = require('mssql')
const {sql_user, sql_password, sql_server, sql_database} = require('../utils/config')


const dbSettings = {
    user: sql_user,
    password: sql_password,
    server: sql_server,
    database: sql_database,
    options:{
        encrypt: true,
        trustServerCertificate: true}
}


const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings);
        console.log('SQL Server conectado')
        return pool 
    } catch (error) {
        console.error("Error de conexión a la base de datos:", error);
    }
};


module.exports = {
    getConnection
};