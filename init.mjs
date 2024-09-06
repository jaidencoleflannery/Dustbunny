// setup express.js dependencies
import express from 'express';
const app = express();
const PORT = 3000;

// set ejs as the view engine
app.set('view engine', 'ejs');

// serve static files from the 'public' directory
app.use(express.static('public'));

// import login functionality
import * as login from './js/user/login.mjs'
// import signup functionality
import * as signup from './js/user/signup.mjs'

// set home route
import { indexRouter } from './routes/indexRoute.mjs';
app.use('/', indexRouter);

// set login route
import { loginRouter } from './routes/loginRoute.mjs';
app.use('/login', loginRouter);

// set login route
import { signupRouter } from './routes/signupRoute.mjs';
app.use('/signup', signupRouter);

app.listen(PORT);


//API points




// setup mongodb dependencies (using mongoose)
import * as mongo from './db/mongo.mjs';
import * as log from './db/models/log.mjs';

mongo.connect();

async function post(){

    const logInstance = log.add("0", "Mark", "123", "FED", 99, Date());

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

//test
