const sequenceGenerator = require('./sequenceGenerator');
const DIY = require('../models/diy');
var express = require('express');
var router = express.Router();


router.get('/', async (req, res, next) => {
    try {
       const diy = await DIY.find();
       return res.status(200).json({ diy });
    } catch (error) {
       return res.status(500).json({ error });
    }
 });

 router.post('/', (req, res, next) => {
   const maxDIYId = sequenceGenerator.nextId("diy");
 
   const diy = new DIY({
     id: maxDIYId,
     name: req.body.name,
     externalSiteURL: req.body.externalSiteURL,
     imageUrl: req.body.imageUrl,
   });
 
   diy.save()
     .then(createdDIY => {
       res.status(201).json({
         message: 'DIY added successfully',
         diy: createdDIY
       });
     })
     .catch(error => {
        res.status(500).json({
           message: 'An error occurred',
           error: error
         });
     });
 });


 router.put('/:id', (req, res, next) => {
  DIY.findOne({ id: req.params.id })
    .then(diy => {
      diy.name = req.body.name;
      diy.externalSiteURL = req.body.externalSiteURL;
      diy.imageUrl = req.body.imageUrl;

      DIY.updateOne({ id: req.params.id }, diy)
        .then(result => {
          res.status(204).json({
            message: 'DIY updated successfully'
          })
        })
        .catch(error => {
           res.status(500).json({
           message: 'An error occurred',
           error: error
         });
        });
    })
    .catch(error => {
      res.status(500).json({
        message: 'DIY not found.',
        error: {diy: 'DIY not found'}
      });
    });
});


router.delete("/:id", (req, res, next) => {
  DIY.findOne({ id: req.params.id })
    .then(diy => {
      DIY.deleteOne({ id: req.params.id })
        .then(result => {
          res.status(204).json({
            message: "DIY deleted successfully"
          });
        })
        .catch(error => {
           res.status(500).json({
           message: 'An error occurred',
           error: error
         });
        })
    })
    .catch(error => {
      res.status(500).json({
        message: 'DIY not found.',
        error: { diy: 'DIY not found'}
      });
    });
});



router.get('/', (req, res, next) => {
  DIY.find()
    .populate('group')
    .then(diy => {
      res.status(200).json({
          message: 'DIY fetched successfully!',
          diy: diy
        });
    })
    .catch(error => {
      res.status(500).json({
        message: 'An error occurred',
        error: error
      });
    });
});

module.exports = router; 