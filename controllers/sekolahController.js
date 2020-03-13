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

// LIST DATA SEKOLAH
exports.List = function(req, res){
    connection.query('SELECT * FROM sekolah', function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};
// DETAIL DATA SEKOLAH
exports.Detail = function(req, res){

    var idsekolah = req.params.idsekolah;

    connection.query('SELECT * FROM sekolah where idsekolah = ?',
    [ idsekolah ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok(rows, res)
            }
        }
    );
};

// TAMBAH DATA SEKOLAH
exports.Tambah = function(req, res){

    var nama_aplikasi = req.body.nama_aplikasi;
    var nama_sekolah = req.body.nama_sekolah;
    var alamat = req.body.alamat;
    var kontak = req.body.kontak;
    var email = req.body.email;
    var website = req.body.website;
    
    connection.query('INSERT INTO sekolah (nama_aplikasi, nama_sekolah, alamat, kontak, email, website) VALUES ( ?, ?, ?, ?, ?, ? );',
    [ nama_aplikasi, nama_sekolah, alamat, kontak, email, website ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data Sekolah berhasil di tambahkan!", res)
            }
        }
    );
};
// UPDATE DATA Satuan
exports.Edit = function(req, res){

    var nama_aplikasi = req.body.nama_aplikasi;
    var nama_sekolah = req.body.nama_sekolah;
    var alamat = req.body.alamat;
    var kontak = req.body.kontak;
    var email = req.body.email;
    var website = req.body.website;
    var idsekolah = req.body.idsekolah;

    connection.query('UPDATE sekolah SET nama_aplikasi = ?, nama_sekolah = ?, alamat = ?, kontak = ?, email = ?, website = ? WHERE idsekolah = ?',
    [ nama_aplikasi, nama_sekolah, alamat, kontak, email, website, idsekolah ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data Sekolah berhasil di perbarui!", res)
            }
        }
    );
};