const router = require("express").Router();
const customerController = require("../../controllers/customerController");


router.route("/").post(customerController.create);


router
.route("/api/Customer")
.get(customerController.findAll);

module.exports = router;
