const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
    cropName: {
        type: String,
        trim: true,
    },
    tonnage: {
        type: Number,
        required: true
    },
    amountPaid: {
        type: Number,
        required: true
    },
    buyersName: {
        type: String,
        trim: true
    },
    agentName: {
        type: String,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    },

    time: {
        type: String,
        trim: true
    }


})
module.exports = mongoose.model('Sale', saleSchema);