const router = require("express").Router();
const MondayController = require("../../controllers/MondayController");

router
  .route("/")
  .post(MondayController.create)
  .get(MondayController.findAll)

// "/api/Mondays/:id"
router
  .route("/:id")
  .get(MondayController.findAll)
  .delete(MondayController.delete)
  .put(MondayController.update);

module.exports = router;
