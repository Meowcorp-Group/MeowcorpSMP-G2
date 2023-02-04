ServerEvents.recipes((event) => {
	// TODO: migrate to new RecipeManager format
	const recipe = new RecipeManager(event);
	// ex: MIForgeHammer(10, 100, ['4x indrev:steel_ingot', '128x minecraft:dirt', 'c:brass_ingots'], ['128x minecraft:stone', 'minecraft:stone', 'minecraft:stone']);

	recipe.MIForgeHammer(0, 30, ['3x create:raw_zinc'], ['4x techreborn:zinc_dust']);
});
