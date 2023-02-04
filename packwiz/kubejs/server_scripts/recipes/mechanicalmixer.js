let modern = 'modern_industrialization';

ServerEvents.recipes((event) => {
	const rm = new RecipeManager(event);

	rm.createMixing(
		true,
		['3x minecraft:copper_ingot', 'c:tin_ingots'],
		['4x modern_industrialization:bronze_ingot']
	);

	rm.createMixing(
		false,
		['c:copper_dusts', 'c:nickel_dusts'],
		['2x modern_industrialization:cupronickel_dust']
	);

	rm.createMixing(
		false,
		['c:gold_dusts', 'c:silver_dusts'],
		['2x modern_industrialization:electrum_dust']
	);

	rm.createMixing(
		false,
		[
			'6x modern_industrialization:uranium_238_dust',
			'3x modern_industrialization:uranium_235_dust',
		],
		['9x modern_industrialization:he_uranium_dust']
	);

	rm.createMixing(
		false,
		['2x c:brick_dusts', '2x minecraft:clay_ball'],
		['4x modern_industrialization:fire_clay_dust']
	);

	rm.createMixing(
		false,
		[
			'6x modern_industrialization:uranium_238_dust',
			'3x modern_industrialization:plutonium_dust',
		],
		['9x modern_industrialization:he_mox_dust']
	);

	rm.createMixing(
		false,
		['2x c:iron_dusts', 'c:nickel_dusts'],
		['3x modern_industrialization:invar_dust']
	);

	rm.createMixing(
		false,
		[
			'modern_industrialization:aluminum_dust',
			'modern_industrialization:chromium_dust',
			'modern_industrialization:stainless_steel_dust',
		],
		['3x modern_industrialization:kanthal_dust']
	);

	rm.createMixing(
		false,
		[
			'8x modern_industrialization:uranium_238_dust',
			'modern_industrialization:plutonium_dust',
		],
		['9x modern_industrialization:le_mox_dust']
	);

	rm.createMixing(
		false,
		[
			'8x modern_industrialization:uranium_238_dust',
			'modern_industrialization:uranium_235_dust',
		],
		['9x modern_industrialization:le_uranium_dust']
	);

	rm.createMixing(
		false,
		[
			'8x modern_industrialization:uranium_238_tiny_dust',
			'modern_industrialization:uranium_235_tiny_dust',
		],
		['9x modern_industrialization:le_uranium_tiny_dust']
	);

	rm.createMixing(
		false,
		[
			'3x modern_industrialization:yttrium_dust',
			'3x modern_industrialization:annealed_copper_dust',
			'2x modern_industrialization:neodymium_dust',
			'modern_industrialization:iridium_dust',
		],
		['9x modern_industrialization:superconductor_dust']
	);

	rm.createMixing(
		false,
		[
			'3x modern_industrialization:yttrium_tiny_dust',
			'3x modern_industrialization:annealed_copper_tiny_dust',
			'2x modern_industrialization:neodymium_tiny_dust',
			'modern_industrialization:iridium_tiny_dust',
		],
		['9x modern_industrialization:tiny_superconductor_dust']
	);

	rm.createMixing(
		false,
		[
			'modern_industrialization:chromium_dust',
			'6x modern_industrialization:iron_dust',
			'modern_industrialization:nickel_dust',
			'modern_industrialization:manganese_dust',
		],
		['9x modern_industrialization:stainless_steel_dust']
	);

	rm.createMixing(
		false,
		[
			'modern_industrialization:chromium_tiny_dust',
			'6x modern_industrialization:iron_tiny_dust',
			'modern_industrialization:nickel_tiny_dust',
			'modern_industrialization:manganese_tiny_dust',
		],
		['9x modern_industrialization:stainless_steel_tiny_dust']
	);

	rm.createMixing(
		false,
		['c:tin_dusts', 'c:lead_dusts'],
		['2x modern_industrialization:soldering_alloy_dust']
	);

	rm.createMixing(
		false,
		['c:tin_tiny_dusts', 'c:lead_tiny_dusts'],
		['2x modern_industrialization:soldering_alloy_tiny_dust']
	);

	rm.createMixing(
		false,
		['c:lead_dusts', 'modern_industrialization:antimony_dust'],
		['2x modern_industrialization:battery_alloy_dust']
	);

	rm.createMixing(
		false,
		['c:lead_tiny_dusts', 'modern_industrialization:antimony_tiny_dust'],
		['2x modern_industrialization:battery_alloy_tiny_dust']
	);
});
