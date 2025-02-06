const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    }
})

const menuItem = mongoose.model('menuItem',menuItemSchema);

module.exports = menuItem;