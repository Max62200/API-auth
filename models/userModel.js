// On importe la bibliothèque (package) mongoose
const mongoose = require('mongoose');

// UserSchema représente le squelette du document utilisateur dans la base de données
const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Merci de fournir un nom d'utilisateur"],
			minlength: [3, "Le nom d'utilisateur doit contenir au moins 3 caractères"],
			maxlength: [50, "Le nom d'utilisateur ne doit pas dépasser 50 caractères"],
		},
		email: {
			type: String,
			required: [true, 'Merci de fournir un email'],
			match: [
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				'Merci de fournir un email valide',
			],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Merci de fournir un mot de passe'],
			minlength: 3,
			maxlength: 255,
		},
	},
	{
		timestamps: true,
	}
);

// Permet d'exporter le modèle User afin de pouvoir y accèdez dans les autres fichiers
module.exports = mongoose.model('User', userSchema);
