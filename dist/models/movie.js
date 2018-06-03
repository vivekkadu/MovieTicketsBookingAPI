'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Define movie schema
var movieSchema = new _mongoose.Schema({
  title: {
    type: String,
    unique: true
  },
  poster: String,
  genre: String,
  days: Array,
  times: Array
});

// Export Mongoose model
exports.default = _mongoose2.default.model('movie', movieSchema);