'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Connect to MongoDB
_mongoose2.default.connect('mongodb://localhost/movies');

// Initialize http server
var app = (0, _express2.default)();

// Logger that outputs all requests into the console
app.use((0, _morgan2.default)('combined'));
// Use v1 as prefix for all API endpoints
app.use('/v1', _router2.default);

var server = app.listen(3000, function () {
  var _server$address = server.address(),
      address = _server$address.address,
      port = _server$address.port;

  console.log('Listening at http://' + address + ':' + port);
});