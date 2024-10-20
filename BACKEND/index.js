const express = require("express");

const app = express();

// parse request
app.use(express.json());

//parse request
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
//normal use
//db.sequelize.sync();

//in development
db.Sequelize.sync({ force: true }).then (() =>{
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
