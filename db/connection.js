const mysql = require('mysql12'); 

//connect to database 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '', 
    database: 'employee'
}, 
console.log('Connected to the Employee Database.')
); 

module.exports = db; 