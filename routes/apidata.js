
const express = require("express");


const router = express.Router();

const { fetchAPIData } = require("../controllers/apidata");
router.get("/", fetchAPIData);
module.exports = router;






    












 