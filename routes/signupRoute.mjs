import express from 'express';
import * as user from '../db/models/userModel.mjs';
const signupRouter = express.Router();

signupRouter.get('/', (req, res) => {
    let name = "Moth";
    res.render('signup');
})

signupRouter.post('/', (req, res) => {
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