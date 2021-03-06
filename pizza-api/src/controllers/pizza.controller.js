const pizzaService = require('../services/pizza.service');

const getAllPizza = async (req, res) => {
  try {
    const pizza = await pizzaService.getAllPizza();
    return res.status(200).json(pizza);
  } catch (e) {
    console.error(e);
    return res.status(400).send('Bad Request');
  }
}

const getPizza = async (req, res) => {
  try {
    const {slug} = req.params;
    const pizza = await pizzaService.getPizza(slug);
    return res.status(200).json(pizza);
  } catch (e) {
    console.error(e);
    return res.status(400).send('Bad Request');
  }
}

const createPizza = async (req, res) => {
  try {
    let {pizza} = req.body;
    const ingredients = pizza.ingredients.replace(/, /g, ',');
    pizza.ingredients = ingredients.split(',');
    const created = await pizzaService.createPizza(pizza);
    if (!created) {
      return res.json({message: 'Помилка створення'});
    }
    return res.status(200).json({message: 'Піцу додано'});
  } catch (e) {
    console.error(e);
    return res.status(400).send('Bad Request');
  }
}

const updatePizza = async (req, res) => {
  try {
    const {slug} = req.params;
    const {pizza} = req.body;
    const updated = await pizzaService.updatePizza(slug, pizza);
    if (!updated) {
      return res.json({message: 'Помилка при оновлені'});
    }
    return res.status(200).json({message: 'Піцу оновлено'});
  } catch (e) {
    console.error(e);
    return res.status(400).send('Bad Request');
  }
}

const deletePizza = async (req, res) => {
  try {
    const {slug} = req.params;
    const deleted = await pizzaService.deletePizza(slug);
    if (!deleted) {
      return res.status(400).json({message: 'Помилка видалення'});
    }
    return res.status(201).json({message: 'Піцу видалено'});
  } catch (e) {
    console.error(e);
    return res.status(400).send('Bad Request');
  }
}

module.exports = {
  getAllPizza,
  getPizza,
  createPizza,
  updatePizza,
  deletePizza
}