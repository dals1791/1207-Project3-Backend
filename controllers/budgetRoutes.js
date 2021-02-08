const express = require('express')
const router = express.Router()
// IMPORT mongoose
const mongoose = require('../db/connection')

// IMPORT THE MODELs COOKBOOK AND AUTHOR
const Budget = require('../models/budgetMD')
const User = require('../models/userMD')

// CONNECT TO THE DB
const db = mongoose.connection


// ==========  DISPLAYS ALL  =========
router.get('/', async (req, res) => {
   res.json(await Budget.find({}))
})

// ==========  CREATE 1  =========
router.post('/:userId', async (req, res)=>{
    const budget = await Budget.create(req.body)
    const user = await User.findById(req.params.userId) 
    user.budget.push(budget._id)
    user.save()
    res.json(user.populate("budgets"))     
})

// ==========  UPDATE 1  BY ID =========
router.put('/:budgetId', async (req, res)=>{
    res.json(
        await Budget.findByIdAndUpdate(req.params.budgetId, req.body, {new: true})
    )
})
  // ==========  DELETE 1  BY ID =========
  router.delete('/:budgetId', async (req, res)=>{
    res.json(
        await Budget.findByIdAndRemove(req.params.budgetId)
    )
})

module.exports = router
