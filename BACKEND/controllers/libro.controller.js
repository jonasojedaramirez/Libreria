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
        autor: req.body.autor,
        filename: req.file ? req.file.filename : ""
    }

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
    const id = req.params.id;

    Libro.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: 'No se puede encontrar Libro con id=${id}'
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error encontrando Libro con id=" + id
            });
        });

};

//actualiza un libro con la respuesta a id
exports.update = (req, res) => {
    const id = req.params.id;

    Libro.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: " Libro ha sido actualizado exitosamente."
                });
            } else {
                res.send({
                    message: 'No se puede actualizar Libro con id=${id}. Podria ser que no existe'
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando Libro con id=" + id
            });
        });

};

//borra un libro con el especifico id
exports.delete = (req, res) => {
    const id = req.params.id;
    Libro.destroy({
        where: { id: id }
    })
        .then(num =>  {
            if (num == 1) {
                res.send({
                    message: " Libro ha sido borrado exitosamente!"
                });
            } else {
                res.send({
                    message: ' No se puede borrar Libro con id=${id}. Libro no encontrado '
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: " No se ha podido borrar Libro con id=" + id
            });
        });

};
