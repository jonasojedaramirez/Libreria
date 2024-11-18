module.exports = (sequelize, Sequelize) => {
    const Libro = sequelize.define("libro", {


        titulo: {
            type: Sequelize.STRING
        },
        autor: {
            type: Sequelize.STRING
        },
        filename: {
            type: Sequelize.STRING
        }
    });    
    return Libro;
};