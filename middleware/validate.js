const recipes = require('../recipes/recipesModel');

const validateRecipeId = () => {
	return (req, res, next) => {
		recipes
			.findRecipeById(req.params.id)
			.then((recipe) => {
				if (recipe) {
					req.recipe = recipe;
					next();
				} else {
					res.status(404).json({ message: 'Recipe Not Found.' });
				}
			})
			.catch((err) => {
				next(err);
			});
	};
};

const validateIngredientId = () => {
	return (req, res, next) => {
		recipes
			.findByIngredientId(req.params.id)
			.then((ingredient) => {
				if (ingredient) {
					req.ingredient = ingredient;
					next();
				} else {
					res.status(404).json({ message: 'Ingredient not found.' });
				}
			})
			.catch((err) => {
				next(err);
			});
	};
};

module.exports = {
	validateRecipeId,
	validateIngredientId,
};
