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

// ==========  CREATE 1  =========


// ==========  UPDATE 1  BY ID =========

  // ==========  DELETE 1  BY ID =========


module.exports = router
