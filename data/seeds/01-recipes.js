exports.seed = function (knex) {
	return knex('recipes').then(function () {
		// Inserts seed entries
		return knex('recipes').insert([
			{ recipe_name: 'Scrambled Eggs' },
			{ recipe_name: 'PB+J' },
		]);
	});
};
