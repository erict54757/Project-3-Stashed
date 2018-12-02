const router = require("express").Router();
const customerRoutes = require("./customer");
const employeeRoutes = require("./employee");
const appointmentRoutes = require("./appointment");
const dayRoutes = require("./day");

router.use("/customers", customerRoutes);
router.use("/employees", employeeRoutes);
router.use("/appointments", appointmentRoutes);
router.use("/days", dayRoutes);

module.exports = router;
