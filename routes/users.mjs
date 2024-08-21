import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
    res.send("User List");
})

router.get("/new", (req, res) => {
    res.send("User New Form");
})

router.post('/', (req, res) => {
    res.send("User New Form");
})

router 
    .route("/:id")
    .get((req, res) => {
        console.log(req.user);
        res.send(`Get User With ID: ${req.params.id}`);
    })
    .post((req, res) => {
        req.params.id;
        res.send(`Update User With ID: ${req.params.id}`);
    })
    .delete((req, res) => {
        req.params.id;
        res.send(`Delete User With ID: ${req.params.id}`);
    })

const users = [{ name: 'Kyle' }, { name: 'Sam' }];

//.param anytime a route is ran with a matching parameter (such as id)
router.param("id", (req, res, next, id) => {
    req.user = users[id];
    next(); // next() causes the server to continue to the next middleware, being the router functions above
})

export { router };