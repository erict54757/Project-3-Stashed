const router = require("express").Router();
const FridayController = require("../../controllers/FridayController");

router
  .route("/")
  .post(FridayController.create)
  .get(FridayController.findAll)

// "/api/Fridays/:id"
router
  .route("/:id")
  .get(FridayController.findAll)
  .delete(FridayController.delete)
  .put(FridayController.update);

module.exports = router;
