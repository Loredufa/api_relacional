const sql = require('mssql')


const dbSettings = {
    user: 'lorena',
    password: 'Nico0804',
    server: 'LDUFAUR2\\SQLEXPRESS',
    database: 'cuyenbyapi',
    options:{
        encrypt: true,
        trustServerCertificate: true,
        requestTimeout: 60000 //tiempo de espera 60 segundos (por defecto es 5000 ms)
    }
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