const routes = require("express").Router();

routes.use("/api/city", require("../controllers/citycontroller"));
routes.use("/api/signup", require("../controllers/signupcontroller"));
routes.use("/api/login", require("../controllers/logincontroller"));
routes.use("/api/admin", require("../controllers/admincontroller"));
routes.use("/api/category", require("../controllers/categorycontroller"));
routes.use("/api/product", require("../controllers/productcontroller"));

module.exports = routes;
