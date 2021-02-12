const { model } = require('../db/connection')
const mongoose = require('../db/connection')
//IMPORT THE SCHEMA CLASS. Classes are uppercase.
const Schema = mongoose.Schema

const budgetSchema = new Schema ({
    income: {type: Number, default: 0, required: true},
    spendGoal: {type: Number, required: false},
    spendCategory: {type: String, required: false}
})


//export model named "Budget"
const Budget = mongoose.model('Budget', budgetSchema)

module.exports = Budget