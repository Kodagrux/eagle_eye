
import express from 'express';
import uuid from 'uuid';

const app = express();

/**
 * Install this eagle eye
 */
app.get('/install', (req, res)=>{

    //
    res.send(uuid.v4());
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
