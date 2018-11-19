const router = require("express").Router();
const customerRoutes = require("./customer")
const employeeRoutes = require("./employee")

router.use("/customers", customerRoutes);
router.use("/employees", employeeRoutes);

module.exports = router;