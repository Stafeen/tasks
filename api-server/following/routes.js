const express = require("express")
const router = express.Router()

const controller = require("./controller")

router.use((req,res,next)=>{console.log("/following");next()});

// routes =>

/* ------------------- INDEX -------------------*/
// GET  "/"                     => greetings

router.get("", controller.welcome);

/* ------------------- INDEX -------------------*/
// GET  "/all"                     => show all followings

router.get("/all", controller.get_all);

/* ------------------- CREATE -------------------*/
// GET  "/add"                => instructions 
// POST "/add"                => Create new following

router.get("/add", controller.get_add);

router.post("/add", controller.post_add);

/* ------------------- READ -------------------*/
// GET  "/:id"             => View following Info with id ...

router.get("/:id", controller.get_id);

/* ------------------- DELETE -------------------*/
// GET  "/:id/delete"     => instructions 
// POST "/:id/delete"     => delete following with id...
 


router.get("/:id/delete", controller.get_id_delete);

router.post("/:id/delete", controller.post_id_delete);



module.exports = router;

