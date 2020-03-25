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
    connection.query('SELECT * FROM siswa', function (error, rows, fields) {
        if (error) {
            response.servererror(console.log(error), res)
        } else {
            response.ok(rows, res)
        }
    });
};

// DETAIL DATA PEGAWAI
exports.Detail = function (req, res) {
    var nis = req.params.nis;

    connection.query('SELECT * FROM siswa WHERE nis = ?',
        [nis],
        function (error, rows, fields) {
            if (error) {
                response.servererror(console.log(error), res)
            } else {
                response.ok(rows, res)
            }
        }
    );
};

// COUNT YEARLY
exports.Yearly = function (req, res) {
    var jk = req.params.jk;
    var tahun = req.params.tahun;

    connection.query('SELECT COUNT(nis) AS jumlah FROM siswa WHERE idjenis_kelamin = ? AND tahun = ?',
        [jk, tahun],
        function (error, rows, fields) {
            if (error) {
                response.servererror(console.log(error), res)
            } else {
                response.ok(rows, res)
            }
        }
    );
};
