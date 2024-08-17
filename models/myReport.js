const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    }
})
module.exports = mongoose.model('Report', reportSchema);