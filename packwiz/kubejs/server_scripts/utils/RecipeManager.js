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

	inputs.forEach((input) => {
		// createMixing input does not support quantity, so we must emulate it
		let inputCount = 1;

		// if the first few characters are numbers, followed by x then it's a quantity
		if (input.match(/^.*\dx\s/i)) {
			inputCount = parseInt(input.split('x')[0]);
			input = input.split('x')[1].trim();
		}
		// what user inputs: 3x create:raw_zinc
		// what we want: create:raw_zinc create:raw_zinc create:raw_zinc
		for (let i = 0; i < inputCount; i++) {
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
		}

		// if input starts with "c:" then it is a tag
		// if (input.startsWith('c:')) {
		// 	this.recipe.ingredients.push({
		// 		tag: input,
		// 	});
		// } else {
		// 	this.recipe.ingredients.push({
		// 		item: input,
		// 	});
		// }
	});

	outputs.forEach((output) => {
		// parse quantity
		let outputCount = 1;

		// if the first few characters are numbers, followed by x then it's a quantity
		if (output.match(/^.*\dx\s/i)) {
			outputCount = parseInt(output.split('x')[0]);
			output = output.split('x')[1].trim();
		}

		// output cannot be a tag
		this.recipe.results.push({
			count: outputCount,
			item: output,
		});
	});

	this.event.custom(this.recipe);
};

/**
 * Recipes: Modern Industrialization
 */

// Modern Industrialization - Forge Hammer
// ex: MIForgeHammer(10, 100, ['4x indrev:steel_ingot', '128x minecraft:dirt', 'c:brass_ingots'], ['128x minecraft:stone', 'minecraft:stone', 'minecraft:stone']);
RecipeManager.prototype.MIForgeHammer = function (
	duration,
	energy,
	inputs,
	outputs
) {
	this.recipe = {
		type: 'modern_industrialization:forge_hammer',
		// duration: x,
		// eu: x,
		item_inputs: [],
		item_outputs: [],
	};

	this.recipe.duration = duration;
	this.recipe.eu = energy;

	inputs.forEach((input) => {
		// handle quantity
		let inputCount = 1;

		if (input.match(/^.*\dx\s/i)) {
			inputCount = parseInt(input.split('x')[0]);
			input = input.split('x')[1].trim();
		}

		// check if tag
		if (input.startsWith('c:')) {
			input = input.replace('c:', '');
			this.recipe.item_inputs.push({
				tag: input,
				amount: inputCount,
			});
		} else {
			this.recipe.item_inputs.push({
				item: input,
				amount: inputCount,
			});
		}
	});

	outputs.forEach((output) => {
		// handle quantity
		let outputCount = 1;

		// if the first few characters are a number, followed by x then it's a quantity
		if (output.match(/^.*\dx\s/i)) {
			outputCount = parseInt(output.split('x')[0]);
			output = output.split('x')[1].trim();
		}

		// outputs cannot be tag by design
		this.recipe.item_outputs.push({
			item: output,
			amount: outputCount,
		});
	});

	// this.event.custom(this.recipe);
	this.event.custom(this.recipe);
};
