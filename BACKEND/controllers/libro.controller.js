const db = require("../models");
const Libro = db.libros;
const Op = db.Sequelize.Op;

//crea y salva un nuevo libro
exports.create = (req, res) => {
    //valida peticion
    if(!req.body.autor){
        res.status(400).send({
            message: "contenido no puede estar vacio!"

            
        });
    }
    // crea un Libro
    const libro = {
        titulo: req.body.titulo,
        autor: req.body.autor
    };

    // salva Libro en la base de datos
    Libro.create(libro)
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                err.message || "algun error ha ocurrido mientras creaba el libro"
            });
        });

};

//recupera todas los libros de la base de datos
exports.findAll = (req, res) => {
    Libro.findAll()
        .then(data => {  
            res.send(data);      
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Algun error ha ocurrido mientras recuperaba libros"
            });
                          

        });
        

    };



//encuentra un libro con la id
exports.findOne = (req, res) => {

};

//actualiza un libro con la respuesta a id
exports.update = (req, res) => {

};

//borra un libro con el especifico id
exports.delete = (req, res) => {

};
