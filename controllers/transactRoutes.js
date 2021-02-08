const express = require('express')
const router = express.Router()
// IMPORT mongoose
const mongoose = require('../db/connection')

// IMPORT THE MODELs COOKBOOK AND AUTHOR
const Transactions = require('../models/transactionsMD')
const User = require('../models/userMD')

// CONNECT TO THE DB
const db = mongoose.connection


// ==========  DISPLAYS ALL  =========
router.get('/', (req, res) => {
    Transactions.find({}).then(tansactions => {
        res.json(tansactions)
    }).catch(err => res.json({
        status: 400,
        err: err
    }))
})

// ==========  CREATE 1  =========
router.post('/:userId', async (req, res)=>{
    const transaction = await Transactions.create(req.body)
    const user = await User.findById(req.params.userId) 
    user.transactions.push(transaction._id)
    user.save()
    res.json(user.populate("transactions"))     
})



// ==========  UPDATE 1  BY ID =========
router.put('/:transId', async (req, res)=>{
    res.json(
        await Transactions.findByIdAndUpdate(req.params.transId, req.body, {new: true})
    )
})
  // ==========  DELETE 1  BY ID =========
  router.put('/:transId', async (req, res)=>{
    res.json(
        await Transactions.findByIdAndUpdate(req.params.transId, req.body, {new: true})
    )
})

module.exports = router
