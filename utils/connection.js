var mysql = require('mysql');

var con = mysql.createConnection({
    host: "103.27.206.147",
    user: "admin",
    password: "hanyaadminyangtau",
    database: "sekolah_x"
});

con.connect(function(err){
    if(err) throw err;
});

module.exports = con;