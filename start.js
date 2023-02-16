const express = require("express")
const takenRouter = require('./routes/routeTaken')
require("./connection")

const app  = express()

// gebruik als parse require type : application.json
app.use(express.json())

// verwijder de cross foutmelding
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
        );
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        next();});

app.use('/api/taken', takenRouter)

app.get("/", (req, res) => {
    res.send("Hallo")
})

port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server is actief op poort ${port}`);
})