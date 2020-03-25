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
    connection.query('SELECT * FROM jadwal_pelajaran', function (error, rows, fields) {
        if (error) {
            response.servererror(console.log(error), res)
        } else {
            response.ok(rows, res)
        }
    });
};

// DETAIL DATA PEGAWAI
exports.Detail = function (req, res) {
    var idjadwal = req.params.idjadwal;

    connection.query('SELECT * FROM jadwal_pelajaran WHERE idjadwal_pelajaran = ?',
        [idjadwal],
        function (error, rows, fields) {
            if (error) {
                response.servererror(console.log(error), res)
            } else {
                response.ok(rows, res)
            }
        }
    );
};

//JADWAL HARI INI
exports.Day = function (req, res) {
    var idhari = req.params.idhari;

    connection.query('SELECT * FROM jadwal_pelajaran WHERE idhari = ?',
        [idhari],
        function (error, rows, fields) {
            if (error) {
                response.servererror(console.log(error), res)
            } else {
                response.ok(rows, res)
            }
        }
    );
};
