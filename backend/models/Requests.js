const mongoose = require("mongoose");


const requestSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    requester: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, default: Date.now },
    valid: {type: Boolean, required: true, default: true},
    offeringAmount: { type: Number}
});


module.exports = mongoose.model('Request', requestSchema);