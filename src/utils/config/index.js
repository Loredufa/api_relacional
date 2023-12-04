require('dotenv').config();

module.exports = {
    dbUser : process.env.DB_USER,
    dbName : process.env.DB_NAME,
    dbPort : process.env.DB_PORT,
    dbPassword : process.env.DB_PASSWORD,
    dbHost : process.env.DB_HOST,
    host : process.env.HOST,
    PORT : process.env.PORT,
    secretKey : process.env.SECRET_KEY,
    sql_user : process.env.SQL_USER,
    sql_password: process.env.SQL_PASSWORD,
    sql_server: process.env.SQL_SERVER,
    sql_database: process.env.SQL_DATABASE,
    url_redis: process.env.URL_REDIS,
    time_sync: process.env.TIME_SYNC
}