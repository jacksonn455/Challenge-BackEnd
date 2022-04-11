const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const productController = require("../controllers/product");

router.get("/", auth, productController.getProduct);
router.get("/:id", auth, productController.getProductById);
router.post('/create', auth, productController.postProduct);
router.put('/update/:id', auth, productController.putProduct);
router.delete('/delete/:id', auth, productController.deleteProduct);

module.exports = router;