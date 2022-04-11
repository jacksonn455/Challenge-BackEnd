const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const auth = require("../middlewares/auth");

router.get("/", auth, userController.getUser);
router.get("/:id", auth, userController.getUserById);
router.post('/create', userController.postUser);
router.put('/update/:id', auth, userController.putUser);
router.delete('/delete/:id', auth, userController.deleteUser);

module.exports = router;