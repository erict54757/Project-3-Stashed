const router = require("express").Router();
const WednesdayController = require("../../controllers/WednesdayController");

router
  .route("/")
  .post(WednesdayController.create)
  .get(WednesdayController.findAll)

// "/api/Wednesdays/:id"
router
  .route("/:id")
  .get(WednesdayController.findAll)
  .delete(WednesdayController.delete)
  .put(WednesdayController.update);

module.exports = router;
