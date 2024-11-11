const express = require("express");
const router = express.Router();

const {
  getItem,
  addItem,
  //getItemId,
  deleteItem,
  updateItem,
  getAllItems,
 
} = require("../controllers/items");

router.get("/", getItem);

router.post("/", addItem);

//router.get("/:id", getItemId);

router.delete("/:id", deleteItem);

router.put("/:id", updateItem);

router.get("/getAllItems", getAllItems);


module.exports = router;



