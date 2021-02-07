const express = require('express')
const router = express.Router()
// IMPORT mongoose
const mongoose = require('../db/connection')

// IMPORT THE MODELs COOKBOOK AND AUTHOR
const Budget = require('../models/budgetMD')

// CONNECT TO THE DB
const db = mongoose.connection


// ==========  DISPLAYS ALL  =========
router.get('/', (req, res) => {
    Budget.find({}).then(allBudgets => {
        res.json(allBudgets)
    }).catch(err => res.json({
        status: 400,
        err: err
    }))
})

// ==========  CREATE 1  =========


// ==========  UPDATE 1  BY ID =========

  // ==========  DELETE 1  BY ID =========


module.exports = router
