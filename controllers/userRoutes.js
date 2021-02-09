const express = require('express')
const router = express.Router()
// IMPORT mongoose
const mongoose = require('../db/connection')

// IMPORT THE MODELs COOKBOOK AND AUTHOR
const User = require('../models/userMD')

// CONNECT TO THE DB
const db = mongoose.connection


// ==========  DISPLAYS ALL  =========

router.get('/', async (req, res) => {
    res.json(await User.find({}).populate("budget").populate("transactions"))
})
//==========  SHOW 1 USER  =========
router.get('/:un/:pw', async (req, res) => {
    const users = await User.find({}).populate('budget').populate('transactions')
    const itemFound = users.filter((user)=>{ 
        return (user.userName===req.params.un &&user.password===req.params.pw)
    })
    res.json(itemFound)
})

// ==========  CREATE 1  =========
router.post('/', async (req,res)=>{
    res.json(await User.create(req.body))
})

// ==========  UPDATE 1  BY ID =========
router.put('/:userId', async (req, res)=>{
    res.json(
        await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
    )
})

  // ==========  DELETE 1  BY ID =========
  router.delete('/:userId', async (req, res)=>{
    res.json(
        await User.findByIdAndRemove(req.params.userId)
    )
})

module.exports = router
