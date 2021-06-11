import { Schema, model } from 'mongoose';

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
        require: trune
    },
    orderList: [{
        type: Schema.Types.ObjectId, 
        ref: 'Pizza',
        require: true
    }],
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

const Order = new model('Order', OrderSchema);
export { Order };


