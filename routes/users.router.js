const router = require("express").Router();

const {usersController} = require("../controllers");

router.get("/",usersController.findUser);
router.post("/",usersController.createUser);

router.get("/:userId",usersController.findUserById);
router.put("/:userId",usersController.updateUserById);
router.delete("/:userId",usersController.deleteUserById);

module.exports = router;
