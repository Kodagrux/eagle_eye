/**
 * @Author: Albin Hubsch <albinhubsch>
 * @Date:   2017-04-02T22:12:05+02:00
 * @Email:  albin.hubsch@gmail.com
 * @Project: Eagle Eye
 * @Last modified by:   albinhubsch
 * @Last modified time: 2017-04-07T16:00:24+02:00
 */



import express from 'express'
import uuid from 'uuid'

export const ServerEye = ()=>{

    const app = express()

    app.get('/', (req, res)=>{

        //
        res.send(uuid.v4())
    })

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

}
