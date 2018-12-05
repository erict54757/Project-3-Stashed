const router = require("express").Router();
const SaturdayController = require("../../controllers/SaturdayController");

router
  .route("/")
  .post(SaturdayController.create)
  .get(SaturdayController.findAll)

// "/api/Saturdays/:id"
router
  .route("/:id")
  .get(SaturdayController.findAll)
  .delete(SaturdayController.delete)
  .put(SaturdayController.update);

module.exports = router;
