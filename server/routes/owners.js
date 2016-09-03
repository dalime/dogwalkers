const express = require('express');
const router = express.Router();
const Owner = require('../models/owner');

router.put('/:ownerId/addWalker/:walkerId', (req, res) => {
  Owner.findById(req.params.ownerId, (err, own) => {
    if (err || !own) {
      return res.status(400).send(err || 'Owner not found.');
    }

    let walkerId = req.params.walkerId
    own.walker = walkerId;

    console.log ('own:', own);

    own.save((err, savedOwner) => {
      res.status(err ? 400: 200).send(err || savedOwner);
    });
  });
})

router.route('/')
      .get((req,res)=>{
        Owner.find({})
        .then(owners =>res.send(owners))
        .catch(err => res.status(400).send(err))
      })
       .post((req,res)=>{
        Owner.create(req.body)
        .then(owners =>res.send(owners))
        .catch(err => res.status(400).send(err))
      })

router.route('/:id')
      .get((req,res)=>{
        Owner.findOne(req.params.id)
        .then(owners =>res.send(owners))
        .catch(err => res.status(400).send(err))
      })
       .delete((req,res)=>{
        Owner.findByIdAndRemove(req.params.id)
        .then(owners =>res.send(req.params.id))
        .catch(err => res.status(400).send(err))
      })
        .put((req,res)=>{
        Owner.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
        .then(owners =>res.send(owners))
        .catch(err => res.status(400).send(err))
      })

module.exports = router;
