var Sequence = require('../models/sequence');

var maxDIYId;
var sequenceId = null;

function SequenceGenerator(Sequence) {

  Sequence.findOne()
    .exec(function(err, sequence) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      sequenceId = sequence._id;
      maxDIYId = sequence.maxDIYId;
    });
}

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
