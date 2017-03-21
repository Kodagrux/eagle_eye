"use strict";

var _networkCommunication = require("./networkCommunication/network-communication");

var _networkCommunication2 = _interopRequireDefault(_networkCommunication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import MotionSensor from "./motionSensor/motion-sensor";

var state = {
    armed: false
}; /*
    * Author: Arvid Bräne <arvidbrane@gmail.com>
    */

if (state.armed) {
    console.log("system is armed, I will beep loud if any human pressence is detected");
}

var network = new _networkCommunication2["default"]();
network.createServer();

//var sensor = new MotionSensor();
//sensor.readValue();