const db = require('../data/dbConfig');

const getRecipes = () => {
	return db('recipes');
};

const findRecipeById = (id) => {
	return db('recipes').where({ id });
};

const findByIngredientId = (id) => {
	return db('ingredients').where({ id });
};

const getShoppingList = (recipe_id) => {
	return db('ingredients as i')
		.join('recipe_ingredients as ri', 'i.id', 'ri.ingredient_id')
		.select(
			'i.ingredient_name',
			'ri.ingredient_quantity',
			'ri.ingredient_measurement'
		)
		.where('ri.recipe_id', recipe_id);
};

const getInstructions = (recipe_id) => {
	return db('steps').where({ recipe_id });
};

const getRecipesWith = (ingredient_id) => {
	return db('recipes as r')
		.join('recipe_ingredients as ri', 'r.id', 'ri.recipe_id')
		.select('r.recipe_name')
		.where('ri.ingredient_id', ingredient_id);
};

module.exports = {
	getRecipes,
	getShoppingList,
	getInstructions,
	findRecipeById,
	getRecipesWith,
	findByIngredientId,
};

// select i.ingredient_name, ri.ingredient_quantity, ri.ingredient_measurement
//  from ingredients as i
//  join recipe_ingredients as ri
//  on i.id = ri.ingredient_id
//  where ri.recipe_id = 2
