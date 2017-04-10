'use strict';

var _system = require('./system');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _callbacks = require('./callbacks');

var _server = require('./server');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Start up local eagle-eye server
/**
 * @Author: Albin Hubsch <albinhubsch>
 * @Date:   2017-03-21T20:01:45+01:00
 * @Email:  albin.hubsch@gmail.com
 * @Project: Eagle Eye
 * @Last modified by:   albinhubsch
 * @Last modified time: 2017-04-07T16:16:49+02:00
 */

(0, _server.ServerEye)();

// Start Motion sensor
// MotionSensor(Settings.motionSensor, motionEvent)

// import { MotionSensor } from './motionSensor'