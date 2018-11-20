const router = require("express").Router();
const appointmentController = require("../../controllers/appointmentController");

router
  .route("/")
  .post(appointmentController.create)
  .get(appointmentController.findAll)

  // "/api/appoints/:id"
  router
  .route("/:id")
  .get(appointmentController.findAllById)
  .delete(appointmentController.delete);

module.exports = router;
