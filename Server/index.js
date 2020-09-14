const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const monk = require('monk');
const Filter = require('bad-words');
 

const app = express();

const db = monk(process.env.MONGO_URL || 'localhost/pseudo-twitter');
const twittes = db.get('twittes');


app.use(express.json()); 
app.use(cors()); 
const filter = new Filter(); 

app.get('/', (req, res) => {
    res.json({
        messahe:'tu es bien sur ton pseudo-twitter'
    })
});

app.get('/twittes', (req, res) =>{
    twittes
        .find()
        .then(twittes => {
            res.json(twittes);
        })
});

function isValidTwitte(twitte){
    return twitte.name && twitte.name.toString().trim() !== '' &&
    twitte.content && twitte.content.toString().trim() !== ''
}


app.post('/twittes', (req, res) => {
    if (isValidTwitte(req.body)){
        // insert into database 
        const twitte = {
            name: filter.clean(req.body.name.toString()),
            content: filter.clean(req.body.content.toString()),
            created: new Date()
        };
        twittes
            .insert(twitte)
            .then(createdTwitte => {
                res.json(createdTwitte);
            });
    } else {
        res.status(422);
        res.json({
            message: 'Hey your form is invalid'
        })
    }
});


app.listen(1996, () => {
    console.log('listening on http://localhost:1996');
});
