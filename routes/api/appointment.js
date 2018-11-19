const router = require("express").Router();
const appointmentController = require("../../controllers/appointmentController");

router.route("/").post(appointmentController.create);

module.exports = router;
