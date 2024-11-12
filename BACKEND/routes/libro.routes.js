module.exports = app => {
    const libros = require("../controllers/libro.controller.js");

    var router = require("express").Router();

    // creamos un nuevo libro
    router.post("/", libros.create);

    //recupera todos los libros
    router.get("/", libros.findAll)

    //recupera un simple libro con id
    router.get("/:id", libros.findOne);

    //actualiza un Libro con la id
    router.put("/:id", libros.update);

    //borra un Libro con la id
    router.delete("/:id", libros.delete);

    app.use('/api/libros', router );


};