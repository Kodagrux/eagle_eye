/**
 * @Author: Albin Hubsch <albinhubsch>
 * @Date:   2017-03-21T20:01:45+01:00
 * @Email:  albin.hubsch@gmail.com
 * @Project: Eagle Eye
 * @Last modified by:   albinhubsch
 * @Last modified time: 2017-04-06T16:47:27+02:00
 */



import { MotionSensor } from './motionSensor'
import fs from 'fs'

const configFile = 'system_configuration.json'


// Load Device configuration data
if (fs.existsSync(configFile)) {
    const sysConfig = JSON.parse(fs.readFileSync('system_configuration.json', 'utf8'))
}


const state = {
    armed: false
}

const _motion = ()=>{
    console.log('Motion detected')
}

if (state.armed) {
    console.log("system is armed, I will beep loud if any human pressence is detected")
}

MotionSensor(_motion)
