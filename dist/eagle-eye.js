'use strict';

var _motionSensor = require('./motionSensor');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/*
 * Author: Arvid Bräne <arvidbrane@gmail.com>, Albin Hübsch <albin.hubsch@gmail.com>
 */

var configFile = 'system_configuration.json';

// Load Device configuration data
if (_fs2['default'].existsSync(configFile)) {
    var sysConfig = JSON.parse(_fs2['default'].readFileSync('system_configuration.json', 'utf8'));
}

var state = {
    armed: false
};

var _motion = function _motion() {
    console.log('Motion detected');
};

if (state.armed) {
    console.log("system is armed, I will beep loud if any human pressence is detected");
}

(0, _motionSensor.MotionSensor)(_motion);
