var mysql = require('mysql'); 
var db = mysql.createConnection({   
    host: 'localhost',     
    user: 'root',     
    password: '12345678',     
    database: 'e_manage_db' 
});  
db.connect(function(err) {    
   if (err) throw err;    
}); 
module.exports = db