const express = require('express');
const router = express.Router();
const Walker = require('../models/walker');

router.route('/')
  .get((req,res)=> {
    Walker.find({})
      .then(walkers =>res.send(walkers))
      .catch(err => res.status(400).send(err))
  })
  .post((req,res)=> {
    Walker.create(req.body)
      .then(walkers =>res.send(walkers))
      .catch(err => res.status(400).send(err))
  })

router.route('/:id')
  .get((req,res)=>{
    Walker.findById(req.params.id)
      .then(walker =>res.send(walker))
      .catch(err => res.status(400).send(err))
  })
  .delete((req,res)=>{
    Walker.findByIdAndRemove(req.params.id)
      .then(walkers =>res.send(req.params.id))
      .catch(err => res.status(400).send(err))
  })
  .put((req,res)=>{
    Walker.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
      .then(walkers =>res.send(walkers))
      .catch(err => res.status(400).send(err))
  })

module.exports = router;
