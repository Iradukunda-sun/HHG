const mongoose = require('mongoose');

const creditsaleSchema = new mongoose.Schema({
    buyersName: {
        type: String,
        trim: true
    },
    niN: {
        type: String,
        trim: true
    },
    location: {
        type: String,
        trim: true
    },
    contactInfo: {
        type: String,
        trim: true
    },
    amountDue: {
        type: Number,
        required: true
    },
    salesAgentName: {
        type: String,
        trim: true
    },
    dueDate: {
        type: Date,
        default: Date.now
    },
    cropName: {
        type: String,
        trim: true
    },
    Type: {
        type: String,
        trim: true
    },
    
    tonnage: {
        type: Number,
        trim: true
    },
   date: {
    type: Date,
    default: Date.now
   }
    
})
module.exports = mongoose.model('Credit', creditsaleSchema);