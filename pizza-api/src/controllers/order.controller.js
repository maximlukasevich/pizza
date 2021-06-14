const orderService = require('../services/order.service');

const getOrders = async (req, res) => {
  try {
    const orders = await orderService.getOrders();
    return res.status(200).json(orders);
  } catch (e) {
    console.error(e);
    return res.status(400).send('Bad Request');
  }
}

const getOrder = async (req, res) => {
  try {
    const {id} = req.params;
    const order = await orderService.getOrder(id);
    return res.status(200).json(order);
  } catch (e) {
    console.error(e);
    return res.status(400).send('Bad Request');
  }
}

const createOrder = async (req, res) => {
  try {
    const {order} = req.body;
    const created = await orderService.createOrder(order);
    if (!created) {
      return res.status(400).json({message: 'Виникла помилка при формувані замовлення'});
    }
    return res.status(200).json({message: 'Замовлення створено'});
  } catch (e) {
    console.error(e);
    return res.status(400).send('Bad Request');
  }
}

const updateOrder = async (req, res) => {
  try {
    const {id} = req.params;
    const {order} = req.body;
    const updated = await orderService.updateOrder(id, order);
    if (!updated) {
      return res.status(400).json({message: 'Помилка оновлення замовлення'});
    }
    return res.status(200).json({message: 'Замовлення оновлено'});
  } catch (e) {
    console.error(e);
    return res.status(400).send('Bad Request');
  }
}

const deleteOrder = async (req, res) => {
  try {
    const {id} = req.params;
    const deleted = await orderService.deleteOrder(id);
    if (!deleted) {
      return res.status(400).json({message: 'Помилка видалення замовлення'});
    }
    return res.status(200).json({message: 'Замовлення видалено'});
  } catch (e) {
    console.error(e);
    return res.status(400).send('Bad Request');
  }
}

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder
}