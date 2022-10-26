'use strict';

const response = require('./rest.js')
const connection = require('./koneksi.js')

exports.index = function(req, res) {
    response.ok("aplikasi berjalan lancar")
}