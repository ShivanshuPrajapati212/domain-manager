const express = require("express");
const {addDomain, getAllDomains} = require("../controllers/domain.controllers.js")

const router = express.Router();


router.post("/addDomain", addDomain);
router.get("/getAllDomains", getAllDomains);

module.exports = router;
