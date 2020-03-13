'use strict';

module.exports = function(app){
    var RouteToSekolah = require('../controllers/sekolahController');
    
    // SEKOLAH
    app.route('/sekolah').get(RouteToSekolah.List);
    app.route('/sekolah/:idsekolah').get(RouteToSekolah.Detail);
    app.route('/sekolah').post(RouteToSekolah.Tambah);
    app.route('/sekolah').put(RouteToSekolah.Edit);
    
}