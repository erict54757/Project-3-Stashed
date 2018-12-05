const router = require("express").Router();
const dayController = require("../../controllers/dayController");

router
  .route("/")
  .post(dayController.create)
  .get(dayController.findAll)

// "/api/days/:id"


router
  .route("/sunday/on/:id")
  .put(dayController.updateOn);
router
  .route("/sunday/off/:id")
  .put(dayController.updateOff);
  router
  .route("/Monday/on/:id")
  .put(dayController.updateOnMonday);
router
  .route("/Monday/off/:id")
  .put(dayController.updateOffMonday);
  router
  .route("/Tuesday/on/:id")
  .put(dayController.updateOnTuesday);
router
  .route("/Tuesday/off/:id")
  .put(dayController.updateOffTuesday);
  router
  .route("/Wednesday/on/:id")
  .put(dayController.updateOnWednesday);
router
  .route("/Wednesday/off/:id")
  .put(dayController.updateOffWednesday);
  router
  .route("/Thursday/on/:id")
  .put(dayController.updateOnThursday);
router
  .route("/Thursday/off/:id")
  .put(dayController.updateOffThursday);
  router
  .route("/Friday/on/:id")
  .put(dayController.updateOnFriday);
router
  .route("/Friday/off/:id")
  .put(dayController.updateOffFriday);
  router
  .route("/Saturday/on/:id")
  .put(dayController.updateOnSaturday);
router
  .route("/Saturday/off/:id")
  .put(dayController.updateOffSaturday);
module.exports = router;
