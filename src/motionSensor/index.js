/*
* Author: Arvid Bräne <arvidbrane@gmail.com>
*/

import gpio from "rpi-gpio";

export const MotionSensor = (onChangeCallback)=>{

    /**
     * Define settings for the sensor behaviour
     * @type {Object}
     */
    const sensorSettings = {
        triggerTimeout: 10 * 1000, // Timeout between triggers in Milliseconds
        move: 1 // Value from sensor when move is detected
    };

    /**
     * Current state of this sensor
     * @type {Object}
     */
    const sensorState = {
        triggerLimit: 2,
        lastCommit: null,
    };

    // Setup gpio
    gpio.setup(7, gpio.DIR_IN, gpio.EDGE_BOTH); //pin 7, not gpio 7!!

    // Listen for changes
    gpio.on("change", (channel, value)=>{

        console.log("Channel " + channel + " value is now " + value);

        if (value == sensorSettings.move && sensorState.lastCommit + sensorSettings.triggerTimeout < new Date.now() ) {

            sensorState.lastCommit = new Date.now();

            // Callback function on change
            onChangeCallback();
        }

    });

};
