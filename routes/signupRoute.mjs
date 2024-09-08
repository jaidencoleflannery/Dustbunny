import express from 'express';
import * as user from '../db/models/userModel.mjs';
const signupRouter = express.Router();

signupRouter.get('/', (req, res) => {
    let name = "Moth";
    res.render('signup');
})

signupRouter.post('/', (req, res) => {
    console.log(req.body);

    const username = req.body.username;
    const password = req.body.password;

    user.add(username, password); // < adds user to database
    
})

export { signupRouter };