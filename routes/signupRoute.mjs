import express from 'express';
import * as user from '../db/models/userModel.mjs';
const signupRouter = express.Router();
import * as bodyParser from "body-parser"

signupRouter.get('/', (req, res) => {
    res.render('signup');
})

signupRouter.post('/', (req, res) => {

    console.log(JSON.stringify(req.body)); // This will contain the sent JSON data

    const username = req.body.Username;
    const password = req.body.Password;
    console.log('Username:', username);
    console.log('Password:', password);

    res.send(req.body);    // echo the result back

    user.add(username, password); // < adds user to database
    
})

export { signupRouter };