// get the client
const mysql2 = require('mysql2/promise');

require('dotenv').config();

(async () => {
    // create the connection to database
    const connection = await mysql2.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME,
    });

    // simple query
    // let result = await connection.query('SELECT * FROM `stocks`');
    // let data = result[0];
    // console.log(result);
    // 可簡寫
    let [data, fields] = await connection.query('SELECT * FROM `stocks`');
    console.log(data);

    connection.end();
})();
