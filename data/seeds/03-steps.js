exports.seed = function (knex) {
	return knex('steps').then(function () {
		// Inserts seed entries
		return knex('steps').insert([
			{ step: 'Crack Eggs in to bowl and Mix till scrambled', recipe_id: 1 },
			{ step: 'Heat a pan with butter over medium heat.', recipe_id: 1 },
			{
				step:
					'Pour eggs in to hot pan, scrambling with a fork till cooked through.',
				recipe_id: 1,
			},
			{ step: 'Place both slices of bread on plate', recipe_id: 2 },
			{ step: 'Spread peanut Butter on one Side of bread', recipe_id: 2 },
			{
				step:
					'Put 2 halves together, cut diagonally down the middle, and serve with a glass of milk',
				recipe_id: 2,
			},
			{ step: 'Heat Butter in pan over medium heat.', recipe_id: 3 },
			{ step: 'Place cheese between bread slices.', recipe_id: 3 },
			{
				step: 'Fry bread until golden brown then flip and repeat.',
				recipe_id: 3,
			},
			{ step: 'Serve with cole slaw.', recipe_id: 3 },
		]);
	});
};
