const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const PizzaSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  slug: {
    type: String,
    slug: 'name',
    unique: true
  },
  price: {
    type: String,
    require: true
  },
  sizes: [{
    inStock: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      require: true
    },
    price: {
      type: String,
      require: true
    }
  }],
  ingredients: [{
    type: String
  }],
  description: {
    type: String,
    required: false,
    default: null
  },
  inStock: {
    type: Boolean,
    default: false,
  }
});

module.exports = new mongoose.model('Pizza', PizzaSchema);
