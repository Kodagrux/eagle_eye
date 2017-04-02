/*
 * Author: Arvid Bräne <arvidbrane@gmail.com>, Albin Hübsch <albin.hubsch@gmail.com>
 */

import { MotionSensor } from './motionSensor';
import fs from 'fs';

const configFile = 'system_configuration.json';


// Load Device configuration data
if (fs.existsSync(configFile)) {
    const sysConfig = JSON.parse(fs.readFileSync('system_configuration.json', 'utf8'));
}


const state = {
    armed: false
};

const _motion = ()=>{
    console.log('Motion detected');
};

if (state.armed) {
    console.log("system is armed, I will beep loud if any human pressence is detected");
}

MotionSensor(_motion);
