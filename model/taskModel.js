const mongoose = require('mongoose')

const takenSchema = mongoose.Schema({
    omschrijving: String,
    afgerond: Boolean
})

const Task = mongoose.model('task', takenSchema)

module.exports = Task