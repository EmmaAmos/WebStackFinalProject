//robo code
const mongoose = require('mongoose');

const sequenceSchema = mongoose.Schema({
  maxDIYId: {type: Number, required: true},
});

module.exports = mongoose.model('Sequence', sequenceSchema);