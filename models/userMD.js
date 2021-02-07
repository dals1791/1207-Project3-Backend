const { model } = require('../db/connection')
const mongoose = require('../db/connection')
//IMPORT THE SCHEMA CLASS. Classes are uppercase.
const Schema = mongoose.Schema

const userSchema = new Schema ({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    budget: [ {
            ref: 'Budget',
            type: mongoose.Schema.Types.ObjectId
    } ],
    transactions: [ {
            ref: 'Transactions',
            type: mongoose.Schema.Types.ObjectId
    } ]
})


//export model named "User"
const User = mongoose.model('User', userSchema)

module.exports = User