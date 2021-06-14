const { Schema, model } = require('mongoose');

const orderStatus = ['new', 'performed', 'done', 'canceled']

const OrderSchema = new Schema({
  customer: {
    firstName: {
      type: String,
      require: true
    },
    lastName: {
      type: String,
      require: true
    },
  },
  address: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    required: true
  },
  orderList: [{
    pizza: {
      type: Schema.Types.ObjectId,
      ref: 'Pizza',
      require: true
    },
    size: {
      type: Number,
      require: true
    }
  }],
  price: {
    type: Number,
    required: true
  },
  orderStatus: {
    status: {
      type: String,
      enums: orderStatus,
      require: true,
      default: 'new'
    },
    date: {
      type: Date,
      require: true,
      default: Date.now()
    }
  },
  description: {
    type: String,
    require: false,
    default: null
  }
});

module.exports = new model('Order', OrderSchema);


