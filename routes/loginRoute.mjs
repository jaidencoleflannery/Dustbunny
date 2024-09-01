import express from 'express';
const loginRouter = express.Router();

loginRouter.get('/', (req, res) => {
    let name = "Moth";
    res.render('login');
})

export { loginRouter };