const Pizza = require('../models/Pizza');

const getAllPizza = async () => {
  try {
    const pizza = await Pizza.find();
    return pizza;
  } catch (e) {
    console.error(e);
  }
}

const getPizza = async (slug) => {
  try {
    const pizza = await Pizza.findOne({slug});
    return pizza;
  } catch (e) {
    console.error(e);
  }
}

const createPizza = async (pizza) => {
  try {
    const newPizza = await Pizza.create(pizza);
    await newPizza.save();
    return true
  } catch (e) {
    console.error(e);
    return false;
  }
}

const updatePizza = async (slug, pizza) => {
  try {
    const updatedPizza = await Pizza.findOneAndUpdate({slug}, pizza, {new: true});
    updatedPizza.save()
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

const deletePizza = async (slug) => {
  try {
    await Pizza.findOneAndDelete({slug});
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

module.exports = {
  getAllPizza,
  getPizza,
  createPizza,
  updatePizza,
  deletePizza
}