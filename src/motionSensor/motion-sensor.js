/*
 * Author: Arvid Bräne <arvidbrane@gmail.com>
 */

import gpio from "rpi-gpio";


gpio.on("change", function(channel, value) {
    console.log("Channel " + channel + " value is now " + value);
});

gpio.setup(7, gpio.DIR_IN, gpio.EDGE_BOTH); //pin 7, not gpio 7!!