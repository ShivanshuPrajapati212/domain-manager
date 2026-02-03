const mongoose = require("mongoose");

const domainSchema = new mongoose.Schema({
    email: String,
    domain: String,
    subdomains: Array,
    expiryDate: Date,
    status: Boolean,
    provider: String 
});

const Domain = mongoose.model('domain', domainSchema);

module.exports = Domain
