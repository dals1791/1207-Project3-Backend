const { model } = require('../db/connection')
const mongoose = require('../db/connection')
//IMPORT THE SCHEMA CLASS. Classes are uppercase.
const Schema = mongoose.Schema

const transactionsSchema = new Schema ({
    description: {type: String, required: true},
    category: {type: String, required: true},
    amount: {type: Number, required: true},
    time: {type: Date, required: true},
    isRoutine: {type: Boolean, default: false, required: false},
    isExpense: {type: Boolean, default: false, required: false}
})


//export model named "Budget"
const Transactions = mongoose.model('Transactions', transactionsSchema)

module.exports = Transactions