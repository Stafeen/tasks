const express = require('express');
const app = express()
const router = express.Router();

const profile = require("./profile");
router.use("/profile", profile);

const connection = require("./connection");
router.use("/connection", connection);
const following = require("./following");
router.use("/following", following);

const image = require("./image");
router.use("/image", image);

const recommendations = require("./recommendations")
router.use("/recommendations", recommendations)


module.exports = router;