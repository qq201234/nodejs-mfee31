// get the client
const mysql2 = require('mysql2/promise');

(async () => {
    // create the connection to database
    const connection = await mysql2.createConnection({
        host: '127.0.0.1',
        port: 3306,
        user: '',
        password: '',
        database: 'stock_mfee31',
    });

    // simple query
    let result = await connection.query('SELECT * FROM `stocks`');
    let data = result[0];
    // console.log(result);
    console.log(data);

    connection.end();
})();
