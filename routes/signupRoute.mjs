import express from 'express';
const signupRouter = express.Router();

signupRouter.get('/', (req, res) => {
    let name = "Moth";
    res.render('signup');
})

export { signupRouter };