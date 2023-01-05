/*

event.custom({
    type: "create:mixing",
    ingredients: [
      {
        tag: "",
      },
      {
        tag: "",
      },
    ],
    results: [
      {
        count: n,
        item: `${modern}:`,
      },
    ],
  });
  
  */

let modern = 'modern_industrialization';

ServerEvents.recipes((event) => {
	function createMixing(heated, inputs, output, outputCount) {
		recipe = {
			type: 'create:mixing',
			ingredients: [],
			results: [],
		};

		if (heated) recipe.heatRequirement = 'heated';

		inputs.forEach(input => {
			recipe.ingredients.push({
				item: 'input'
			})
		});

		event.custom(recipe);
	}

	// Heated Recipes

	event.custom({
		type: 'create:mixing',
		heatRequirement: 'heated',
		ingredients: [
			{
				item: 'minecraft:copper_ingot',
			},
			{
				item: 'minecraft:copper_ingot',
			},
			{
				item: 'minecraft:copper_ingot',
			},
			{
				tag: 'c:tin_ingots',
			},
		],
		results: [
			{
				count: 4,
				item: `${modern}:bronze_ingot`,
			},
		],
	});

	// No Heat Requirement Recipes

	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				tag: 'c:copper_dusts',
			},
			{
				tag: 'c:nickel_dusts',
			},
		],
		results: [
			{
				count: 2,
				item: `${modern}:cupronickel_dust`,
			},
		],
	});

	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				tag: 'c:gold_dusts',
			},
			{
				tag: 'c:silver_dusts',
			},
		],
		results: [
			{
				count: 2,
				item: `${modern}:electrum_dust`,
			},
		],
	});

	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_235_dust`,
			},
			{
				item: `${modern}:uranium_235_dust`,
			},
			{
				item: `${modern}:uranium_235_dust`,
			},
		],
		results: [
			{
				count: 9,
				item: `${modern}:he_uranium_dust`,
			},
		],
	});

	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				tag: 'c:brick_dusts',
			},
			{
				tag: 'c:brick_dusts',
			},
			{
				item: 'minecraft:clay_ball',
			},
			{
				item: 'minecraft:clay_ball',
			},
		],
		results: [
			{
				count: 4,
				item: `${modern}:fire_clay_dust`,
			},
		],
	});

	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:plutonium_dust`,
			},
			{
				item: `${modern}:plutonium_dust`,
			},
			{
				item: `${modern}:plutonium_dust`,
			},
		],
		results: [
			{
				count: 9,
				item: 'modern_industrialization:he_mox_dust',
			},
		],
	});

	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				tag: 'c:iron_dusts',
			},
			{
				tag: 'c:iron_dusts',
			},
			{
				tag: 'c:nickel_dusts',
			},
		],
		results: [
			{
				count: 3,
				item: `${modern}:invar_dust`,
			},
		],
	});

	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: `${modern}:aluminum_dust`,
			},
			{
				item: `${modern}:chromium_dust`,
			},
			{
				item: `${modern}:stainless_steel_dust`,
			},
		],
		results: [
			{
				count: 3,
				item: `${modern}:kanthal_dust`,
			},
		],
	});

	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:plutonium_dust`,
			},
		],
		results: [
			{
				count: 9,
				item: `${modern}:le_mox_dust`,
			},
		],
	});

	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_238_dust`,
			},
			{
				item: `${modern}:uranium_235_dust`,
			},
		],
		results: [
			{
				count: 9,
				item: `${modern}:le_uranium_dust`,
			},
		],
	});

	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: `${modern}:uranium_238_tiny_dust`,
			},
			{
				item: `${modern}:uranium_238_tiny_dust`,
			},
			{
				item: `${modern}:uranium_238_tiny_dust`,
			},
			{
				item: `${modern}:uranium_238_tiny_dust`,
			},
			{
				item: `${modern}:uranium_238_tiny_dust`,
			},
			{
				item: `${modern}:uranium_238_tiny_dust`,
			},
			{
				item: `${modern}:uranium_238_tiny_dust`,
			},
			{
				item: `${modern}:uranium_238_tiny_dust`,
			},
			{
				item: `${modern}:uranium_235_tiny_dust`,
			},
		],
		results: [
			{
				count: 9,
				item: `${modern}:le_uranium_tiny_dust`,
			},
		],
	});

	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: `${modern}:yttrium_dust`,
			},
			{
				item: `${modern}:yttrium_dust`,
			},
			{
				item: `${modern}:yttrium_dust`,
			},
			{
				item: `${modern}:annealed_copper_dust`,
			},
			{
				item: `${modern}:annealed_copper_dust`,
			},
			{
				item: `${modern}:annealed_copper_dust`,
			},
			{
				item: `${modern}:neodynium_dust`,
			},
			{
				item: `${modern}:neodynium_dust`,
			},
			{
				item: `${modern}:iridium_dust`,
			},
		],
		results: [
			{
				count: 9,
				item: `${modern}:superconductor_dust`,
			},
		],
	});

	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: `${modern}:yttrium_tiny_dust`,
			},
			{
				item: `${modern}:yttrium_tiny_dust`,
			},
			{
				item: `${modern}:yttrium_tiny_dust`,
			},
			{
				item: `${modern}:annealed_copper_tiny_dust`,
			},
			{
				item: `${modern}:annealed_copper_tiny_dust`,
			},
			{
				item: `${modern}:annealed_copper_tiny_dust`,
			},
			{
				item: `${modern}:neodynium_tiny_dust`,
			},
			{
				item: `${modern}:neodynium_tiny_dust`,
			},
			{
				item: `${modern}:iridium_tiny_dust`,
			},
		],
		results: [
			{
				count: 9,
				item: `${modern}:tiny_superconductor_dust`,
			},
		],
	});

	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: `${modern}:chromium_dust`,
			},
			{
				item: `${modern}:iron_dust`,
			},
			{
				item: `${modern}:iron_dust`,
			},
			{
				item: `${modern}:iron_dust`,
			},
			{
				item: `${modern}:iron_dust`,
			},
			{
				item: `${modern}:iron_dust`,
			},
			{
				item: `${modern}:iron_dust`,
			},
			{
				item: `${modern}:nickel_dust`,
			},
			{
				item: `${modern}:manganese_dust`,
			},
		],
		results: [
			{
				count: 9,
				item: `${modern}:stainless_steel_dust`,
			},
		],
	});

	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: `${modern}:chromium_tiny_dust`,
			},
			{
				item: `${modern}:iron_tiny_dust`,
			},
			{
				item: `${modern}:iron_tiny_dust`,
			},
			{
				item: `${modern}:iron_tiny_dust`,
			},
			{
				item: `${modern}:iron_tiny_dust`,
			},
			{
				item: `${modern}:iron_tiny_dust`,
			},
			{
				item: `${modern}:iron_tiny_dust`,
			},
			{
				item: `${modern}:nickel_tiny_dust`,
			},
			{
				item: `${modern}:manganese_tiny_dust`,
			},
		],
		results: [
			{
				count: 9,
				item: `${modern}:stainless_steel_tiny_dust`,
			},
		],
	});

	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				tag: 'c:tin_dusts',
			},
			{
				tag: 'c:lead_dusts',
			},
		],
		results: [
			{
				count: 2,
				item: `${modern}:soldering_alloy_dust`,
			},
		],
	});

	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				tag: 'c:tin_tiny_dusts',
			},
			{
				tag: 'c:lead_tiny_dusts',
			},
		],
		results: [
			{
				count: 2,
				item: `${modern}:soldering_alloy_tiny_dust`,
			},
		],
	});

	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				count: 1,
				tag: 'c:lead_dusts',
			},
			{
				count: 1,
				item: 'modern_industrialization:antimony_dust',
			},
		],
		results: [
			{
				count: 2,
				item: 'modern_industrialization:battery_alloy_dust',
			},
		],
	});

	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				count: 1,
				tag: 'c:lead_tiny_dusts',
			},
			{
				count: 1,
				item: 'modern_industrialization:antimony_tiny_dust',
			},
		],
		results: [
			{
				count: 2,
				item: 'modern_industrialization:battery_alloy_tiny_dust',
			},
		],
	});
});
