//robo code
const mongoose = require('mongoose');

const sequenceSchema = mongoose.Schema({
  _id: { type: String, required: true },
  maxDIYId: {type: Number, required: true},
});

module.exports = mongoose.model('Sequence', sequenceSchema);