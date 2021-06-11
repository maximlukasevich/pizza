import { Schema, model } from 'mongoose';

const PizzaSchema = new Schema({
    image: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    size: {
        type: String, 
        require: true,
    },
    ingredients: [{
        type: String
    }],
    inStock: {
        type: Boolean,
        require: true,
        default: false,
    }
});

const Pizza = new model('Pizza', PizzaSchema);
export { Pizza };
