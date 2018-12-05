const router = require("express").Router();
const customerRoutes = require("./customer");
const employeeRoutes = require("./employee");
const appointmentRoutes = require("./appointment");
const dayRoutes = require("./Day");
const SundayRoutes = require("./Sunday");
const MondayRoutes = require("./Monday");
const TuesdayRoutes = require("./Tuesday");
const WednesdayRoutes = require("./Wednesday");
const ThursdayRoutes = require("./Thursday");
const FridayRoutes = require("./Friday");
const SaturdayRoutes = require("./Saturday");

router.use("/customers", customerRoutes);
router.use("/employees", employeeRoutes);
router.use("/appointments", appointmentRoutes);
router.use("/days", dayRoutes);
router.use("/Sunday", SundayRoutes);
router.use("/Monday", MondayRoutes);
router.use("/Tuesday", TuesdayRoutes);
router.use("/Wednesday", WednesdayRoutes);
router.use("/Thursday", ThursdayRoutes);
router.use("/Friday", FridayRoutes);
router.use("/Saturday", SaturdayRoutes);

module.exports = router;
