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

// LIST DATA PENGGUNA
exports.List = function (req, res) {
    connection.query('SELECT idpengguna, id_biodata, idjabatan FROM pengguna', function (error, rows, fields) {
        if (error) {
            response.servererror(console.log(error), res)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.Detail = function (req, res) {

    var idbiodata = req.params.idbiodata;
    var password = req.params.password;

    connection.query('SELECT * FROM pengguna WHERE id_biodata = ? AND password = ?',
        [idbiodata, password],
        function (error, rows, fields) {
            if (error) {
                response.forbidden(console.log(error), res)
            } else {
                response.ok(rows, res)
            }
        }
    );
};