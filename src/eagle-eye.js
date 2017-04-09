/**
 * @Author: Albin Hubsch <albinhubsch>
 * @Date:   2017-03-21T20:01:45+01:00
 * @Email:  albin.hubsch@gmail.com
 * @Project: Eagle Eye
 * @Last modified by:   albinhubsch
 * @Last modified time: 2017-04-07T16:16:49+02:00
 */



import { Settings } from './system'
// import { MotionSensor } from './motionSensor'
import fs from 'fs'
import { motionEvent } from './callbacks'
import { ServerEye } from './server'

// Start up local eagle-eye server
ServerEye()

// Start Motion sensor
// MotionSensor(Settings.motionSensor, motionEvent)
