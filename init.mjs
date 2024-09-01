// setup express.js dependencies
import express from 'express';
const app = express();
const PORT = 3000;

// set ejs as the view engine
app.set('view engine', 'ejs');

// serve static files from the 'public' directory
app.use(express.static('public'));

// import login functionality
import * as auth from './js/user/login.mjs'

// set home route
import { indexRouter } from './routes/indexRoute.mjs';
app.use('/', indexRouter);

// set login route
import { loginRouter } from './routes/loginRoute.mjs';
app.use('/login', loginRouter);

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




//testing modules
import Entity from './js/entity.mjs';

const currentEntity = new Entity("moth", 100, 50, 3);
console.log(currentEntity.info);