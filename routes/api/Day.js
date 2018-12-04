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
module.exports = router;
