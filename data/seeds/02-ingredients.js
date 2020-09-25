exports.seed = function (knex) {
	return knex('ingredients').then(function () {
		// Inserts seed entries
		return knex('ingredients').insert([
			{ ingredient_name: 'Egg' },
			{ ingredient_name: 'Butter' },
			{ ingredient_name: 'Salt' },
			{ ingredient_name: 'Bread' },
			{ ingredient_name: 'Peanut Butter' },
			{ ingredient_name: 'Jelly' },
			{ ingredient_name: 'Cheese' },
		]);
	});
};
