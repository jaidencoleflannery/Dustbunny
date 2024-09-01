import express from 'express';
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
    let name = "Moth";
    res.render('index', {title: name});
})

export { indexRouter };