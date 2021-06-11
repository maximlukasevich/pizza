import { Schema, model } from 'mongoose';

const AdminSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String, 
        require: true
    },
    active: {
        type: Boolean,
        default: false
    }
});

const Admin = new model('Admin', AdminSchema);
export { Admin };
