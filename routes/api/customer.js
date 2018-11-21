const router = require("express").Router();
const customerController = require("../../controllers/customerController");


router.route("/")
  .post(customerController.create)
  .get(customerController.findAll);


module.exports = router;
