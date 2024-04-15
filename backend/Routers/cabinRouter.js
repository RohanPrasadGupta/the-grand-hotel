const express = require("express");
const cabinController = require("../controller/cabinController");

const router = express.Router();

router.route("/getCabins").get(cabinController.getAllCabin);
router.route("/getCabin/:id").get(cabinController.getCabin);

router.route("/createCabin").post(cabinController.createCabin);

module.exports = router;
