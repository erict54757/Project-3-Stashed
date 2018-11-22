const router = require("express").Router();
const appointmentController = require("../../controllers/appointmentController");

router
  .route("/")
  .post(appointmentController.create)
  .get(appointmentController.findAll)

  //delete this before push
  router
  .route("/api/appointments")
  .post(appointmentController.create)
  router
  .route("/api/appointments/:id")
  .delete(appointmentController.delete);
  // "/api/appoints/:id"
  router
  .route("/:id")
  .delete(appointmentController.delete);

module.exports = router;
