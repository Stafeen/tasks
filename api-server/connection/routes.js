const express = require("express")
const router = express.Router()

const controller = require("./controller")

// routes =>

/* ------------------- INDEX -------------------*/
// GET  "/"                     => greetings

router.get("", controller.welcome);

/* ------------------- INDEX -------------------*/
// GET  "/all"                     => show all connections

router.get("/all", controller.get_all);

/* ------------------- CREATE -------------------*/
// GET  "/add"                => instructions 
// POST "/add"                => Create new connection

router.get("/add", controller.get_add);

router.post("/add", controller.post_add);

/* ------------------- READ -------------------*/
// GET  "/:id"             => View connection Info with id ...

router.get("/:id", controller.get_id);

/* ------------------- UPDATE -------------------*/
// GET  "/:id/update"     => instructions 
// POST "/:id/update"     => update connection with id...



router.get("/:id/update", controller.get_id_update);

router.post("/:id/update", controller.post_id_update);

/* ------------------- DELETE -------------------*/
// GET  "/:id/delete"     => instructions 
// POST "/:id/delete"     => delete connection with id...
 


router.get("/:id/delete", controller.get_id_delete);

router.post("/:id/delete", controller.post_id_delete);



module.exports = router;

