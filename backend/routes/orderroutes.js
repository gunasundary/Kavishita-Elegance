const express = require("express");
const Order = require("../models/order");

const router = express.Router();

/**
 * @route   POST /api/orders
 * @desc    Place an order
 */
router.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 * @route   GET /api/orders/:userId
 * @desc    Get order history of user
 */
router.get("/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;