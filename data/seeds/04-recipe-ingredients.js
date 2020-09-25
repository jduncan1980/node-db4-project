exports.seed = function (knex) {
	return knex('recipe_ingredients').then(function () {
		// Inserts seed entries
		return knex('recipe_ingredients').insert([
			{ recipe_id: 1, ingredient_id: 1, ingredient_quantity: 2 },
			{
				recipe_id: 1,
				ingredient_id: 2,
				ingredient_quantity: 1,
				ingredient_measurement: 'TBLSPN',
			},
			{
				recipe_id: 1,
				ingredient_id: 3,
				ingredient_quantity: 1,
				ingredient_measurement: 'Pinch',
			},
			{
				recipe_id: 2,
				ingredient_id: 4,
				ingredient_quantity: 2,
				ingredient_measurement: 'Slices',
			},
			{
				recipe_id: 2,
				ingredient_id: 5,
				ingredient_quantity: 2,
				ingredient_measurement: 'TBLSPN',
			},
			{
				recipe_id: 2,
				ingredient_id: 6,
				ingredient_quantity: 1,
				ingredient_measurement: 'TBLSPN',
			},
			{
				recipe_id: 3,
				ingredient_id: 2,
				ingredient_quantity: 1,
				ingredient_measurement: 'TBLSPN',
			},
			{
				recipe_id: 3,
				ingredient_id: 4,
				ingredient_quantity: 2,
				ingredient_measurement: 'Slices',
			},
			{
				recipe_id: 3,
				ingredient_id: 7,
				ingredient_quantity: 1.5,
				ingredient_measurement: 'Oz.',
			},
		]);
	});
};
