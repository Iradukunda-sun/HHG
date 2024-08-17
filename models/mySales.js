const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
    produceName: {
        type: String,
        trim: true
    },
    tonnageSold: {
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