const { Schema, model } = require('mongoose');

const AdminSchema = new Schema({
    login: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String, 
        require: true
    },
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = new model('Admin', AdminSchema);
