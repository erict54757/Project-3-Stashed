const router = require("express").Router();
const ThursdayController = require("../../controllers/ThursdayController");

router
  .route("/")
  .post(ThursdayController.create)
  .get(ThursdayController.findAll)

// "/api/Thursdays/:id"
router
  .route("/:id")
  .get(ThursdayController.findAll)
  .delete(ThursdayController.delete)
  .put(ThursdayController.update);

module.exports = router;
