// On importe la bibliothèque express
const express = require('express');
const router = express.Router();
// On importe le userController permettant de communiquer avec la base de données
const userController = require('../controllers/userController');

// On définit le chemin de la route
router.get('/', userController.getAllUsers);

// On exporte le router
module.exports = router;
