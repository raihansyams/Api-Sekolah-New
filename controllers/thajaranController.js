'use strict';

var response = require('../utils/reqcode');
var connection = require('../utils/connection');

// Controller Structure
// + controller
// |- List Data
// |- Detail Data
// |- Insert Data
// |- Update Data
// |- Hapus Data
// |- Custom Data

// LIST DATA
exports.List = function (req, res) {
    connection.query('SELECT * FROM th_ajaran', function (error, rows, fields) {
        if (error) {
            response.servererror(console.log(error), res)
        } else {
            response.ok(rows, res)
        }
    });
};

// DETAIL DATA
exports.Detail = function (req, res) {
    var idth_ajaran = req.params.idth_ajaran;

    connection.query('SELECT * FROM th_ajaran WHERE idth_ajaran = ?',
        [idth_ajaran],
        function (error, rows, fields) {
            if (error) {
                response.servererror(console.log(error), res)
            } else {
                response.ok(rows, res)
            }
        }
    );
};

//INSERT DATA
exports.Insert = function(req, res){

    var ta_ajaran = req.body.ta_ajaran;
    var idpengguna = req.body.idpengguna;
    
    connection.query('INSERT INTO th_ajaran(ta_ajaran, idpengguna) VALUES (?, ?);',
    [ ta_ajaran, idpengguna ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Tahun ajaran berhasil di tambahkan!", res)
            }
        }
    );
};
