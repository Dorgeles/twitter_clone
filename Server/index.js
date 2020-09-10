const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const monk = require('monk');

const app = express();

const db = monk('localhost/pseudo-twitter');
const twittes = db.get('twittes');

app.use(cors());
app.use(express.json()); 

app.get('/', (req, res) => {
    res.json({
        messahe:'tu es bien sur ton pseudo-twitter'
    })
});

function isValidTwitte(twitte){
    return twitte.name && twitte.name.toString().trim() !== '' && 
    twitte.content && twitte.content.toString().trim() !== ''
}

app.post('/twitte', (req, res) => {
    if(isValidTwitte(req.body)){
        // inster into DB 
        const twitte = {
            name: req.body.name.toString(),
            content: req.body.content.toString(),
            created: new Date()
        }
        twittes
            .insert(twitte)
            .then(createdTwitte => {
                res.json(createdTwitte)
            });
    } else {
        res.status(422);
        res.json({
            message: 'hey name and content are require'
        })
    }
});


app.listen(1996, () => {
    console.log('listening on http://localhost:1996');
});
