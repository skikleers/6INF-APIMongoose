const express = require('express')
const router = express.Router()
const taskController = require("../controller/tasksController")


router.route("/")
.get(taskController.getAll)
.post(taskController.addTask)
.put(taskController.updateTask)

module.exports = router