// On importe le userModel afin de pouvoir communiqué avec le document User dans la base de données
const userModel = require('../models/userModel');

// Export du module userController et ses fonctions.
module.exports = {
	// Permet de récupérer tous les utilisateurs
	getAllUsers: async (req, res) => {
		// Déclaration de la variable users qui contiendra tous les utilisateurs
		const users = await userModel.find();
		// On renvoie la réponse au client
		res.status(200).json({ users });
	},
};
