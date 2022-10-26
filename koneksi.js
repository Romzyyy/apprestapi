import mysql from 'mysql';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbrestapi'
});

db.connect((err) => {
    if (err) throw err;
    console.log('mysql terkoneksi');
});

export default db;