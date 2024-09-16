// setup express.js dependencies
import express from 'express';
const app = express();
const PORT = 3000;

// set ejs as the view engine
app.set('view engine', 'ejs');

// serve static files from the 'public' directory
app.use(express.static('public'));

// set home route
import { indexRouter } from './routes/indexRoute.mjs';
app.use(express.json())
app.use('/', indexRouter);

// set login route
import { loginRouter } from './routes/loginRoute.mjs';
app.use(express.json());
app.use('/login', loginRouter);

// set login route
import { signupRouter } from './routes/signupRoute.mjs';
app.use(express.json());
app.use('/signup', signupRouter);

app.listen(PORT);


//API points




// setup mongodb dependencies (using mongoose)
import * as mongo from './db/mongo.mjs';
import * as user from './db/models/userModel.mjs';

mongo.connect();

/* storing as example
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

*/




//testing modules
import Entity from './public/js/entityClasses/entity.mjs';

const currentEntity = new Entity("moth", 100, 50, 3);
console.log(currentEntity.info);

//test
