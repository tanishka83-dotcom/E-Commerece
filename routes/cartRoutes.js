const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCartItems,
  updateCart,
  deleteCart,
} = require("../controllers/cartController");

router.post("/", addToCart);
router.get("/", getCartItems);
router.put("/:id", updateCart);
router.delete("/:id", deleteCart);

module.exports = router;