var mysql = require('mysql');

var con = mysql.createConnection({
    // host: "103.27.206.147",
    // user: "admin",
    // password: "hanyaadminyangtau",
    // database: "sekolah_x"

    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "sekolah_x"
});

con.connect(function(err){
    if(err) throw err;
});

module.exports = con;