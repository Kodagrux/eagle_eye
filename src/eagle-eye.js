/*
 * Author: Arvid Bräne <arvidbrane@gmail.com>
 */

import NetworkCommunication from "./networkCommunication/network-communication";
//import MotionSensor from "./motionSensor/motion-sensor";

const state = {
    armed: false
};

if (state.armed) {
    console.log("system is armed, I will beep loud if any human pressence is detected");
}

var network = new NetworkCommunication();
network.createServer();

//var sensor = new MotionSensor();
//sensor.readValue();
