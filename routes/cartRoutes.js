const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  addToCart,
  getCartItems,
  updateCart,
  deleteCart,
} = require("../controllers/cartController");

router.post("/", protect, addToCart);
router.get("/", protect, getCartItems);
router.put("/:id", protect, updateCart);
router.delete("/:id", protect, deleteCart);

module.exports = router;