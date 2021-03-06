const { model } = require('../db/connection')
const mongoose = require('../db/connection')
//IMPORT THE SCHEMA CLASS. Classes are uppercase.
const Schema = mongoose.Schema

const userSchema = new Schema ({

    firstName: {type: String, required: true},
    lastName: {type: String, required: false},
    email: {type: String, required: false},
    userName: {type: String, required: true},
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