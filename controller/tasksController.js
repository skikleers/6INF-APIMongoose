const taskModel = require('../model/taskModel')

const getAll = async (req, res) => {
    const taken = await taskModel.find()
    res.json(taken)
}

const addTask = async (req, res) => {
    const omschrijving = req.body.omschrijving

    const newTaak = new taskModel({
        omschrijving : omschrijving,
        afgerond: false
    })

    newTaak.save()
    res.json({newTaak})
}

const updateTask = async (req, res) => {
    const id = req.body.id
    // const status = req.body.status
    console.log(id);
    let updateTaak = await taskModel.findById(id)

    updateTaak.afgerond = !updateTaak.afgerond

    updateTaak.save();
    res.json({updateTaak})
}

module.exports = {
    getAll,
    addTask,
    updateTask
}