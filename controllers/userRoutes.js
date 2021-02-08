const express = require('express')
const router = express.Router()
// IMPORT mongoose
const mongoose = require('../db/connection')

// IMPORT THE MODELs COOKBOOK AND AUTHOR
const User = require('../models/userMD')

// CONNECT TO THE DB
const db = mongoose.connection


// ==========  DISPLAYS ALL  =========
router.get('/', (req, res) => {
    User.find({}).populate("budget").populate("transactions").then(allUsers => {
        res.json(allUsers)
    }).catch(err => res.json({
        status: 400,
        err: err
    }))
})
//==========  SHOW 1 USER  =========
router.get('/:userId', (req, res) => {
    const user = User.find({_id: req.params.userId}).populate("budget").populate("transactions").then(user => {
        res.json(user)
    }).catch(err => res.json({
        status: 400,
        err: err
    }))
})

// ==========  CREATE 1  =========
router.post('/', (req,res)=>{
    const user = (req.body)
    User.create(user).then((user)=>{
        user: user
    }).catch(err => res.json({
        status: 400,
        err: err
    }))
})

// ==========  UPDATE 1  BY ID =========

  // ==========  DELETE 1  BY ID =========


module.exports = router
