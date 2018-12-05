const router = require("express").Router();
const TuesdayController = require("../../controllers/TuesdayController");

router
  .route("/")
  .post(TuesdayController.create)
  .get(TuesdayController.findAll)

// "/api/Tuesdays/:id"
router
  .route("/:id")
  .get(TuesdayController.findAll)
  .delete(TuesdayController.delete)
  .put(TuesdayController.update);

module.exports = router;
