ServerEvents.recipes((event) => {
	event.remove({ output: 'timeinabottle:time_in_a_bottle' });

	event.shaped('timeinabottle:time_in_a_bottle', ['GGG', 'DCD', 'MBM'], {
		G: 'minecraft:gold_ingot',
		C: 'minecraft:clock',
		D: 'botania:mana_diamond',
		M: 'botania:rune_mana',
		B: 'minecraft:glass_bottle',
	});

	event.remove({ output: 'piercingpaxels:upgrade_unbreakable' });

	event.shaped('piercingpaxels:upgrade_unbreakable', ['QNQ', 'NnN', 'GNG'], {
		Q: 'modern_industrialization:quantum_circuit',
		N: 'minecraft:netherite_block',
		n: 'minecraft:nether_star',
		G: 'botania:life_essence',
	});
});
