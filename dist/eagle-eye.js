"use strict";

var _rpio = require("rpio");

var _rpio2 = _interopRequireDefault(_rpio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//var rpio = require('rpio');

console.log("arvid");

_rpio2["default"].open(11, _rpio2["default"].INPUT);
console.log("Pin 11 is currently set " + (_rpio2["default"].read(11) ? "high" : "low"));
