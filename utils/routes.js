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
    app.route('/pengguna/:idbiodata').get(RouteToPengguna.Detail);
    app.route('/pengguna/:idbiodata/:password').get(RouteToPengguna.Login);

    //PEGAWAI
    var RouteToJabatan = require('../controllers/jabatanController');
    app.route('/jabatan').get(RouteToJabatan.List);
    app.route('/jabatan/:idjabatan').get(RouteToJabatan.Detail);

    //PEGAWAI
    var RouteToPegawai = require('../controllers/pegawaiController');
    app.route('/pegawai').get(RouteToPegawai.List);
    app.route('/pegawai/:nik').get(RouteToPegawai.Detail);

    //SISWA
    var RouteToSiswa = require('../controllers/siswaController');
    app.route('/siswa').get(RouteToSiswa.List);
    app.route('/siswa/:nis').get(RouteToSiswa.Detail);
    app.route('/siswa/:jk/:tahun').get(RouteToSiswa.Yearly);

    //TH_AJARAN
    var RouteToThajaran = require('../controllers/thajaranController');
    app.route('/thajaran').get(RouteToThajaran.List);
    app.route('/thajaran/:idth_ajaran').get(RouteToThajaran.Detail);
    app.route('/thajaran').post(RouteToThajaran.Insert);

    //JADWAL
    var RouteToJadwal = require('../controllers/jadwalController');
    app.route('/jadwal').get(RouteToJadwal.List);
    app.route('/jadwal/:idjadwal').get(RouteToJadwal.Detail);
    app.route('/jadwal/day/:idhari').get(RouteToJadwal.Day);
    
}