const mongoose = require('mongoose');

const procurementSchema = new mongoose.Schema({
    cropName: {
        type: String,
        trim: true
    },
    Type: {
        type: String,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    tonnage: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    dealers_name: {
        type: String,
        trim: true
    },
    branch_name: {
        type: String,
        trim: true
    },
    contact_info: {
        type: String,
        trim: true
    },
    saleprice: {
        type: Number,
        required: true
    }
})
module.exports = mongoose.model('Procurement', procurementSchema);