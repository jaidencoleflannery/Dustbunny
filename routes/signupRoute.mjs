import express from 'express';
import * as user from '../db/models/userModel.mjs';
const signupRouter = express.Router();
import * as bodyParser from "body-parser"

signupRouter.get('/', (req, res) => {
    res.render('signup');
})

signupRouter.post('/', (req, res) => {

    console.log(req.body);

    const options = req.body.options;

    console.log(req.params);
    console.log(req.body);      // your JSON
    res.send(req.body);    // echo the result back

     /*   const username = req.body.username;
    const password = req.body.password;

    user.add(username, password); // < adds user to database
    */
    
})

export { signupRouter };