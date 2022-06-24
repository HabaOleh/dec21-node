const router = require("express").Router();

const {usersController} = require("../controllers");
const {userMiddleware, commonMiddleware} = require("../middlewares");


router.get('/',
    userMiddleware.isUserQueryValid,
    usersController.findUsers);
router.post('/',
    userMiddleware.isUserValidForCreate,
    userMiddleware.isUserUniq,
    usersController.createUser);

router.get('/:id',
    commonMiddleware.isIdValid,
    userMiddleware.isUserPresent,
    usersController.getUserById);
router.put('/:id',
    commonMiddleware.isIdValid,
    userMiddleware.isUserValidForUpdate,
    userMiddleware.isUserPresent,
    usersController.updateUserById);
router.delete('/:id',
    commonMiddleware.isIdValid,
    userMiddleware.isUserPresent,
    usersController.deleteUserById);

module.exports = router;
