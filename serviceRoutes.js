const express = require("express");
const { createService, getServicesByDestination } = require("../controllers/serviceController");
const router = express.Router();

router.post("/", createService);
router.get("/:destinationId", getServicesByDestination);

module.exports = router;
