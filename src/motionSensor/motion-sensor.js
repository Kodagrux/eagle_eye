/*
* Author: Arvid Bräne <arvidbrane@gmail.com>
*/

import gpio from "rpi-gpio";


export default class MotionSensor {

    constructor() {
        gpio.setup(7, gpio.DIR_IN, gpio.EDGE_BOTH); //pin 7, not gpio 7!!
    }

    readValue() {
        gpio.on("change", function(channel, value) {
            console.log("Channel " + channel + " value is now " + value);
        });
    }

}
