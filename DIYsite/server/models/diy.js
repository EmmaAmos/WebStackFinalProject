const mongoose = require('mongoose');

const diySchema = mongoose.Schema({
   _id: { type: String, required: true },
   id: { type: String, required: true },
   name: { type: String },
   externalSiteURL: { type: String, required: true },
   imageUrl: { type: String, required: true },
});

module.exports = mongoose.model('DIY', diySchema);