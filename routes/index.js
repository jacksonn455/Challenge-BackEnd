const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

router.get("/", auth, (req, res) => {
    res.send({message:"Welcome to the API"});
    });
    
module.exports = router;