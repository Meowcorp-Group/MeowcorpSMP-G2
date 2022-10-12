// priority: 0

settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

console.info('Hello, World! (You will see this line every time server resources reload)');

ServerEvents.recipes((event) => {
	// Change recipes here
	
	//TODO: This is a test recipe
	event.remove({ output: 'minecraft:stone' });

	event.shaped('minecraft:stone', [
		'CF ',
		'   ',
		'   '
	], {
		C: 'minecraft:cobblestone',
		F: 'minecraft:fire_charge'
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
