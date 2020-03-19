'use strict';

module.exports = function(app){
    
    // SEKOLAH
    var RouteToSekolah = require('../controllers/sekolahController');
    app.route('/sekolah').get(RouteToSekolah.List);
    app.route('/sekolah/:idsekolah').get(RouteToSekolah.Detail);
    app.route('/sekolah').post(RouteToSekolah.Tambah);
    app.route('/sekolah').put(RouteToSekolah.Edit);
    
    //PENGGUNA
    var RouteToPengguna = require('../controllers/penggunaController');
    app.route('/pengguna').get(RouteToPengguna.List);
    app.route('/pengguna/:idbiodata/:password').get(RouteToPengguna.Detail);

    //PEGAWAI
    var RouteToPegawai = require('../controllers/pegawaiController');
    app.route('/pegawai').get(RouteToPegawai.List);
    app.route('/pegawai/:nik').get(RouteToPegawai.Detail);

    
}