/**
 * @Author: Albin Hubsch <albinhubsch>
 * @Date:   2017-04-06T16:45:10+02:00
 * @Email:  albin.hubsch@gmail.com
 * @Project: Eagle Eye
 * @Last modified by:   albinhubsch
 * @Last modified time: 2017-04-06T17:01:41+02:00
 */



import gpio from "rpi-gpio"

/**
 * Define settings for the sensor behaviour
 * @type {Object}
 */
const defaultSettings = {
    triggerTimeout: 10, // Timeout between triggers in seconds
    move: 1 // Value from sensor when move is detected
}

export const MotionSensor = (sensorSettings = defaultSettings, onChangeCallback)=>{

    /**
     * Current state of this sensor
     * @type {Object}
     */
    const sensorState = {
        triggerLimit: 2,
        lastCommit: null,
    }

    // Setup gpio
    gpio.setup(7, gpio.DIR_IN, gpio.EDGE_BOTH) //pin 7, not gpio 7!!

    // Listen for changes
    gpio.on("change", (channel, value)=>{

        if (value == sensorSettings.move && sensorState.lastCommit + sensorSettings.triggerTimeout * 1000 < new Date.now() ) {

            // Set last commit to now
            sensorState.lastCommit = new Date.now()

            // Callback function on change
            onChangeCallback()
        }

    })

}
