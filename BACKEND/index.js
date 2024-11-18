const express = require("express");
const cors = require("cors");

var path = require('path');

const app = express();

//public directory
app.use(express.static(path.join(__dirname, 'public')));

var corsOptions = {
    origin: "http://localhost:8100"
};

app.use(cors(corsOptions));

// parse request
app.use(express.json());

//parse request
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
//normal use
//db.sequelize.sync();

//in development
db.Sequelize.sync({  }).then (() =>{ // quitamos el force: true, para que no borre las tablas
    console.log("Drop and re-sync db.");
});

//simple route
app.get("/", (req, res) => {
    res.json({ message: "Bienvenido a la apliacion Libros. "});
});

require("./routes/libro.routes")(app);

//set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor esta corriendo en el puerto ${PORT}.`)
});
