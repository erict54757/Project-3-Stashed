const router = require("express").Router();
const dayController = require("../../controllers/dayController");

router
  .route("/")
  .post(dayController.create)
  .get(dayController.findAll)

// "/api/days/:id"
router
  .route("/:id")
  .delete(dayController.delete)
  .put(dayController.update);

module.exports = router;
