module.exports = function (app) {
    const usuarios = require('../controllers/usuariocontroller')

    app.route('/usuarios')
    .get(usuarios.listAll)
    .post(usuarios.creatOne)

    app.route('/usuarios/:id')
    .get(usuarios.showOne)
    .put(usuarios.updateUser)
    .delete(usuarios.removerUser)
}