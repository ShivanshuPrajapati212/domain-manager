const mongoose = require("mongoose");

const domainSchema = new mongoose.Schema({
  email: String,
  domain: String,
  subdomains: Array,
  expiryData: Date,
  status: Boolean,
});

const Domain = mongoose.model('domain', domainSchema);

module.exports = Domain
