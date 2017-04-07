/**
 * @Author: Albin Hubsch <albinhubsch>
 * @Date:   2017-04-07T15:15:27+02:00
 * @Email:  albin.hubsch@gmail.com
 * @Project: Eagle Eye
 * @Last modified by:   albinhubsch
 * @Last modified time: 2017-04-07T16:12:06+02:00
 */



import fs from 'fs'
import uuid from 'uuid'

const configFile = '../system_configuration.json'

export const Settings = {
    motionSensor: {
        triggerTimeout: 10, // Timeout between triggers in seconds
        move: 1 // Value from sensor when move is detected
    }
}

/**
 * Save system configuration object to json file
 * @param  {[type]} config [description]
 * @return {[type]}        [description]
 */
export const saveSystemConfiguration = (config)=>{
    fs.writeFile(configFile, JSON.stringify(config), function(err) {
        if(err) {
            return console.log(err)
        }
    })
}

/**
 * Fetch content of system config json
 */
export const SystemConfiguration = ()=>{

    // Inital state of system
    let system_config = {
        uuid: uuid.v4(),
        phone: null,
        email: null,
    }

    // Load Device configuration data
    if (fs.existsSync(configFile)) {
        system_config = JSON.parse(fs.readFileSync(configFile, 'utf8'))
    }

    return system_config
}
