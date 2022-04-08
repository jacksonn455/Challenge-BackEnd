const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const productController = require("../controllers/product");

router.get("/", auth, productController.getProduct);
router.post('/create', auth, productController.postProduct);

module.exports = router;