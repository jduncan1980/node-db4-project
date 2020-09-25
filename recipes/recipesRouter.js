const express = require('express');
const recipes = require('./recipesModel');
const {
	validateRecipeId,
	validateIngredientId,
} = require('../middleware/validate');
const { getInstructions } = require('./recipesModel');

const router = express.Router();

router.get('/recipes', async (req, res, next) => {
	try {
		const response = await recipes.getRecipes();
		res.status(200).json(response);
	} catch (error) {
		next(error);
	}
});

router.get(
	'/recipes/:id/shoppingList',
	validateRecipeId(),
	async (req, res, next) => {
		const { id } = req.params;
		try {
			const response = await recipes.getShoppingList(id);
			res.status(200).json(response);
		} catch (error) {
			next(error);
		}
	}
);

router.get(
	'/recipes/:id/instructions',
	validateRecipeId(),
	async (req, res, next) => {
		const { id } = req.params;
		try {
			const response = await getInstructions(id);
			res.status(200).json(response);
		} catch (error) {
			next(error);
		}
	}
);

router.get(
	'/ingredients/:id/recipes',
	validateIngredientId(),
	async (req, res, next) => {
		const { id } = req.params;
		try {
			console.log('try');
			const response = await recipes.getRecipesWith(id);
			res.status(200).json(response);
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
