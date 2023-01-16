// priority: 1000
// Recipe Manager - MeowcorpSMP-G2

// KubeJS/Rhino does not support ES6 classes,
// so we are using ES5 Prototype-based classes
// Babel does not work.

// constructor class so you don't have to
// pass event on every command
function RecipeManager(event) {
	this.event = event;
}

// return recipe object
RecipeManager.prototype.raw = function () {
	return this.recipe;
};

// parse inputs
RecipeManager.prototype.parseInput = function (input) {
	// TODO
};

// parse output
RecipeManager.prototype.parseOutput = function (output) {
	// TODO
};

/**
 * Recipes: Create Mod
 */

// Create - Mechanical Mixer
// ex: createMixing(true, ['c:copper_ingots',  'c:tin_ingots'], ['4x modern_industrialization:bronze_ingot'])
RecipeManager.prototype.createMixing = function (heated, inputs, outputs) {
	this.recipe = {
		type: 'create:mixing',
		ingredients: [],
		results: [],
	};

	if (heated) this.recipe.heatRequirement = 'heated';

	// mixer inputs cannot take quantity
	inputs.forEach((input) => {
		// if input starts with "c:" then it is a tag
		if (input.startsWith('c:')) {
			this.recipe.ingredients.push({
				tag: input,
			});
		} else {
			this.recipe.ingredients.push({
				item: input,
			});
		}
	});

	outputs.forEach((output) => {
		// parse quantity
		outputCount = 1;
		if (output.includes('x')) {
			outputCount = output.split('x')[0];
			output = output.split('x')[1];
		} else {
			outputCount = 1;
		}

		// output cannot be a tag
		this.recipe.results.push({
			count: outputCount,
			item: output,
		});
	});

	this.event.custom(recipe);
};
