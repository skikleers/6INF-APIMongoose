const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/Task')
.then(() => console.log("connected"))
.catch((err) => console.log(err))