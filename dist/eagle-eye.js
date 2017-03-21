"use strict";

var _motionSensor = require("./motionSensor/motion-sensor");

var _motionSensor2 = _interopRequireDefault(_motionSensor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var state = {
    armed: false
}; /*
    * Author: Arvid Bräne <arvidbrane@gmail.com>
    */

//import NetworkCommunication from "./networkCommunication/network-communication";


if (state.armed) {
    console.log("system is armed, I will beep loud if any human pressence is detected");
}

//var network = new NetworkCommunication();
//network.createServer();

//var sensor = new MotionSensor();
//sensor.readValue();