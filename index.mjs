// setup express.js dependencies
import express from 'express';
const app = express();
const PORT = 3000;

// set ejs as the view engine
app.set('view engine', 'ejs');

// serve static files from the 'public' directory
app.use(express.static('public'));

// set a route
app.get('/', (req, res) => {
    let name = "Moth";
    res.render('index', {title: name});
})

import { router } from './routes/users.mjs';
app.use('/users', router);

app.listen(PORT);




// setup mongodb dependencies (using mongoose)
import * as mongo from './db/mongo.mjs';
import * as log from './db/models/log.mjs';

mongo.connect();

async function post(){

    const logInstance = log.add("FED", 99, Date());

    try {
        log.saveLog(logInstance);
        console.log("Posted Object: " + logInstance);
    } catch(err){
        console.log("Error: Could Not Post");
    }

}

post();

//left off trying to get other functions to import into index - using mjs so we can use import, but now require doesnt work




//testing modules
import Entity from './js/entity.mjs';

const currentEntity = new Entity("moth", 100, 50, 3);
console.log(currentEntity.info());