/**
 * @Author: Albin Hubsch <albinhubsch>
 * @Date:   2017-04-02T22:12:05+02:00
 * @Email:  albin.hubsch@gmail.com
 * @Project: Eagle Eye
 * @Last modified by:   albinhubsch
 * @Last modified time: 2017-04-06T16:47:11+02:00
 */



import express from 'express'
import uuid from 'uuid'

const app = express()

/**
 * Install this eagle eye
 */
app.get('/install', (req, res)=>{

    //
    res.send(uuid.v4())
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
