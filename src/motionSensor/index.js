/*
* Author: Arvid Bräne <arvidbrane@gmail.com>
*/

import gpio from "rpi-gpio";

export const MotionSensor = (onChangeCallback)=>{

    /**
     * [sensorState description]
     * @type {Object}
     */
    const sensorState = {
        triggerLimit: 2,
    };

    // Setup gpio
    gpio.setup(7, gpio.DIR_IN, gpio.EDGE_BOTH); //pin 7, not gpio 7!!

    // Listen for changes
    gpio.on("change", (channel, value)=>{
        console.log("Channel " + channel + " value is now " + value);

        // Callback function on change
        onChangeCallback();
    });

};
