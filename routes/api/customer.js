const router = require("express").Router();
const customerController = require("../../controllers/customerController");


router.route("/")
  .post(customerController.create)
  .get(customerController.findAll);

  router.route("/api/customers")
  .post(customerController.create)

module.exports = router;
