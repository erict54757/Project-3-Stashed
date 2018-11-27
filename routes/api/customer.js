const router = require("express").Router();
const customerController = require("../../controllers/customerController");

router
  .route("/")
  .post(customerController.create)
  .get(customerController.findAll);

router.route("/:id").put(customerController.update)
// router
// .route("/api/sendEmail")
// .post(customerController.sendEmail)
module.exports = router;
