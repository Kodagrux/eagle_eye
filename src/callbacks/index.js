/**
 * @Author: Albin Hubsch <albinhubsch>
 * @Date:   2017-04-07T15:19:05+02:00
 * @Email:  albin.hubsch@gmail.com
 * @Project: Eagle Eye
 * @Last modified by:   albinhubsch
 * @Last modified time: 2017-04-09T11:02:54+02:00
 */



import axios from 'axios'
import moment from 'moment'
import { SystemConfiguration } from '../system'

export const motionEvent = ()=>{

    //
    axios.post('/motion', {
        uuid: null,
        phone: null,
        timestamp: moment(),
    })
    .then((res)=>{

        // If response has alarm true, make some great sound!
        if (res.data.alarm) {
            // * * *
            // MAKE THEM SUFFER
            // * * *
        }else {
            // Discuss what to do here if no response or error
        }
    })

}


export const sendEagleEyeCredentialsToRemote = (config)=>{
    axios.post('/eagle-eye/install', config)
}
