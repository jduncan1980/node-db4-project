exports.up = function (knex) {
	return knex.schema
		.createTable('recipes', (tbl) => {
			tbl.increments('id');
			tbl.string('recipe_name', 128).notNullable();
		})
		.createTable('ingredients', (tbl) => {
			tbl.increments('id');
			tbl.string('ingredient_name', 128).notNullable();
		})
		.createTable('steps', (tbl) => {
			tbl.increments('id');
			tbl.string('step', 128);
			tbl
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('recipes')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
		})
		.createTable('recipe_ingredients', (tbl) => {
			tbl
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('recipes')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			tbl
				.integer('ingredient_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('ingredients')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			tbl.float('ingredient_quantity', 2).notNullable();
			tbl.string('ingredient_measurement', 128);
			tbl.primary(['recipe_id', 'ingredient_id']);
		});
};

exports.down = function (knex) {
	knex.schema
		.dropTableIfExists('recipe_ingredients')
		.dropTableIfExists('steps')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('recipes');
};
