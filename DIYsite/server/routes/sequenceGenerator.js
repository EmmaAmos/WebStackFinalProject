//robo code
var Sequence = require('../models/sequence');

var maxDIYId;
var sequenceId;

function SequenceGenerator() {
  Sequence.findOne().exec(function(err, sequence) {
    console.log(arguments)
    if (err) {
      console.error(err);
      return;
    }
    if (!sequence) {
      console.error("No sequence found");
      return;
    }
    sequenceId = sequence._id;
    maxDIYId = sequence.maxDIYId;
  });
}
// robo ends

SequenceGenerator.prototype.nextId = function(collectionType) {
  console.log('SequenceGenerator.prototype.nextId is working')
  var updateObject = {};
  var nextId;

  switch (collectionType) {
    case 'diy':
      maxDIYId++;
      updateObject = {maxDIYId: maxDIYId};
      nextId = maxDIYId;
      break;
    default:
      return -1;
  }

  Sequence.update({_id: sequenceId}, {$set: updateObject},
    function(err) {
      if (err) {
        console.log("nextId error = " + err);
        return null
      }
    });

  return nextId;
}

module.exports = new SequenceGenerator();
