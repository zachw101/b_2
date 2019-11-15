const cakesController = require('../controllers/cakes');

module.exports = function (app) {
    app.get('/cakes', cakesController.index);
    app.post('/cakes', cakesController.create);
    app.get('/cakes/:cakeId', cakesController.getById);
    app.put('/ratings/:cakeId', cakesController.update);
    // app.put('/cakes/:id', cakesController.update);
    app.delete('/cakes/:id', cakesController.delete);
}