const router = require("express").Router();
const customerController = require("../../controllers/customerController");

router
  .route("/")
  .post(customerController.create)
  .get(customerController.findAll);

<<<<<<< HEAD
router.route("/:id").put(customerController.update)
=======
router.route("/:id").put(customerController.update);
>>>>>>> caf85e313728ab8b5c26162d2a5668e0425f3cc5

module.exports = router;
