ServerEvents.recipes((event) => {
	// TODO: migrate to new RecipeManager format
	const recipe = new RecipeManager(event);

	event.custom({
		type: 'modern_industrialization:macerator',
		duration: 100,
		eu: 2,
		item_inputs: [
			{
				amount: 1,
				item: 'create:raw_zinc',
			},
		],
		item_outputs: [
			{
				amount: 1,
				item: 'create:crushed_zinc_ore',
			},
			{
				amount: 1,
				item: 'create:crushed_zinc_ore',
				probability: 0.5,
			},
		],
	});

	event.custom({
		type: 'modern_industrialization:macerator',
		duration: 200,
		eu: 2,
		item_inputs: [
			{
				amount: 1,
				item: 'create:zinc_ore',
			},
		],
		item_outputs: [
			{
				amount: 3,
				item: 'create:raw_zinc',
			},
		],
	});
});
