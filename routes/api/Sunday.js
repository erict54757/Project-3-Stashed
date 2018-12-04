const router = require("express").Router();
const SundayController = require("../../controllers/SundayController");

router
  .route("/")
  .post(SundayController.create)
  .get(SundayController.findAll)

// "/api/Sundays/:id"
router
  .route("/:id")
  .get(SundayController.findAll)
  .delete(SundayController.delete)
  .put(SundayController.update);

module.exports = router;
