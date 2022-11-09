// priority: 0

console.info('Hello from client_scripts/hide.js');

const hiddenItems = {
	// Tech Reborn (modid techreborn)
	techreborn: {
		// ores (deepslate variants also removed)
		ores: [
			'tin',
			// 'deepslate_tin',
			'bauxite',
			// 'deepslate_bauxite',
			'iridium',
			// 'deepslate_iridium',
			'lead',
			// 'deepslate_lead',
			'silver',
			// 'deepslate_silver',
			'titanium',
			// 'deepslate_titanium',
			'nickel',
			// 'deepslate_nickel'
		],
		// materials (blocks, ingots, nuggets, dusts, fluids)
		materials: [
			'tin',
			'tungsten',
			'lead',
			'silver',
			'gold',
			'iron',
			'diamond',
			'emerald',
			'copper',
			'bauxite',
			'steel',
			'platinum',
			'invar',
			'nickel',
			'ruby',
			'bronze',
			'chrome',
			'aluminum',
			'titanium',
		    'bronze',
			'electrum',
			'invar',
			'lead',
			'nickel',
			'platinum',
			'carbon',
			'iridium',
		],
	},
	// Industrial Revolution (modid indrev)
	indrev: {
		// ores (deepslate variants also removed)
		ores: [
			'tin',
			// 'deepslate_tin',
			'lead',
			// 'deepslate_lead',
			'silver',
			// 'deepslate_silver',
			'tungsten',
			// 'deepslate_tungsten',
		],
		// materials (blocks, ingots, nuggets, dusts)
		materials: [
			'iron',
			'gold',
			'copper',
			'bronze',
			'lead',
			'silver',
			'tungsten',
			'tin',
			'electrum',
			'steel',
		],
	},
};

let initBlacklist = (event) => {
	// loop mods, types, and items
	for (let modid in hiddenItems)
		for (let type in hiddenItems[modid])
			for (let item of hiddenItems[modid][type]) {
				if (type == "ores") {
					event.hide(`${modid}:${item}_ore`);
					event.hide(`${modid}:deepslate_${item}_ore`);
					event.hide(`${modid}:raw_${item}`);
					event.hide(`${modid}:raw_${item}_storage_block`);
					event.hide(`${modid}:raw_${item}_block`)
				}

				if (type == "materials") {
					if (modid == "techreborn") {
						/**
						 * Tech Reborn identifier format:
						 * raw_{item}
						 * raw_{item}_storage_block
						 * {item}_small_dust
						 * {item}_dust
						 * {item}_ingot
						 * {item}_nugget
						 * {item}_plate
						 * {item}_storage_block
						*/
						event.hide(`${modid}:${item}_plate`)
						event.hide(`${modid}:${item}_small_dust`);
						event.hide(`${modid}:${item}_dust`);
						event.hide(`${modid}:${item}_storage_block`)
						event.hide(`${modid}:${item}_ingot`);
						event.hide(`${modid}:${item}_nugget`);
						event.hide(`${modid}:${item}_block`)
						event.hide(`${modid}:raw_${item}`)
					}

					if (modid == "indrev") {
						/**
						 * Industrial Revolution identifier format:
						 * raw_{item}
						 * raw_{item}_block
						 * {item}_dust
						 * {item}_ingot
						 * {item}_nugget
						 * {item}_plate
						 * {item}_block
						 */
						event.hide(`${modid}:${item}_dust`);
						event.hide(`${modid}:${item}_ingot`);
						event.hide(`${modid}:${item}_nugget`);
						event.hide(`${modid}:${item}_plate`);
						event.hide(`${modid}:${item}_block`);
					}
				}
			}
}

REIEvents.hide('item', (event) => {
	// Hide items in REI here
	initBlacklist(event)
    event.hide('modern_industrialization:redstone_tiny_dust')
})

JEIEvents.hideItems((event) => {
	// Hide items in JEI here
	initBlacklist(event);
});
