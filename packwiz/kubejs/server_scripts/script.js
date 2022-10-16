// priority: 0

settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

console.info(
	'Hello, World! (You will see this line every time server resources reload)'
);

ServerEvents.recipes((event) => {
	// Change recipes here

	//TODO: This is a test recipe
	event.remove({ output: 'minecraft:stone' });

	event.shaped('minecraft:stone', ['CF ', '   ', '   '], {
		C: 'minecraft:cobblestone',
		F: 'minecraft:fire_charge',
	});

	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 32,
		duration: 1000,
		item_inputs: [
			{
				item: 'modern_industrialization:highly_advanced_upgrade',
				amount: 32,
			},
			{
				item: 'modern_industrialization:quantum_circuit',
				amount: 8,
			},
			{
				item: 'modern_industrialization:singularity',
				amount: 1,
			},
			{
				item: 'modern_industrialization:quantum_circuit_board',
				amount: 1,
			},
		],

		fluid_inputs: {
			fluid: 'modern_industrialization:uu_matter',
			amount: 50,
		},
		item_outputs: [
			{
				item: 'modern_industrialization:quantum_upgrade',
				amount: 1,
			},
		],
	});
});

ServerEvents.tags('item', (event) => {
	// Change tags here
	// Examples:
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')
	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
});
