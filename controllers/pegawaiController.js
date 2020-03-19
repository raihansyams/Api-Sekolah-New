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

// LIST DATA PEGAWAI
exports.List = function (req, res) {
    connection.query('SELECT * FROM pegawai', function (error, rows, fields) {
        if (error) {
            response.servererror(console.log(error), res)
        } else {
            response.ok(rows, res)
        }
    });
};

// DETAIL DATA PEGAWAI
exports.Detail = function (req, res) {
    var nip = req.params.nik;

    connection.query('SELECT * FROM pegawai WHERE nip = ?',
        [nip],
        function (error, rows, fields) {
            if (error) {
                response.servererror(console.log(error), res)
            } else {
                response.ok(rows, res)
            }
        }
    );
};
