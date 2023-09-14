import mysql from  "mysql2";

const con = mysql.createConnection( {
    host: "localhost",
    port: 3306,
    user: "root",
    database: "users_db",
    password: "Kolort5634,.",
    multipleStatements: true
})

export default con