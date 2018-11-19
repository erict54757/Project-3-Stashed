const router = require("express").Router();
const customerRoutes = require("./customer");
const employeeRoutes = require("./employee");
const appointmentRoutes = require("./appointment");

router.use("/customers", customerRoutes);
router.use("/employees", employeeRoutes);
router.use("/appointments", appointmentRoutes);

module.exports = router;
