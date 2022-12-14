const router = require("express").Router();

const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");

router.use("/thought", thoughtRoutes);

router.use("/user", userRoutes);

module.exports = router;
