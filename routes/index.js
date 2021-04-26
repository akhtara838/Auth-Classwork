const router = require("express").Router(),
userRoutes = require("./userRoutes"),
courseRoutes = require("./courseRoutes"),
errorRoutes = require("./errorRoutes"),
homeRoutes = require("./homeRoutes"),
subscriberRoutes = require("./subscriberRoutes"),
apiRoutes = require("./apiRoutes");

router.use("/users", userRoutes);
router.use("/courses", courseRoutes);
router.use("/subscribers", subscriberRoutes);
router.use("/api",apiRoutes);
router.use("/", homeRoutes);
router.use("/", errorRoutes);

module.exports = router;