const Order = require('../models/Order');

const getOrders = async () => {
  try {
    const orders = await Order.find().populate('orderList.pizza');
    return orders;
  } catch (e) {
    console.error(e);
  }
}

const getOrder = async (id) => {
  try {
    const order = await Order.findById(id).populate('orderList.pizza');
    return order;
  } catch (e) {
    console.error(e);
  }
}

const createOrder = async (order) => {
  try {
    const newOrder = await Order.create(order);
    await newOrder.save();
    return true
  } catch (e) {
    console.error(e);
    return false;
  }
}

const updateOrder = async (id, order) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(id, order, {new: true});
    await updatedOrder.save();
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

const deleteOrder = async (id) => {
  try {
    await Order.findByIdAndDelete(id);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder
}