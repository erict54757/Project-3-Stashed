const router = require("express").Router();
const customerController = require("../../controllers/customerController");

router.route("/customers").post(customerController.create);

module.exports = router;
