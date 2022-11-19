// priority: 0

console.info('Hello from server_scripts/recipe.js');

ServerEvents.recipes((event) => {
	// Replace IO here

	// Change recipes here
    
	// MI Quantum Armor Set

	event.remove({output: 'modern_industrialization:quantum_helmet' });
    event.remove({output: 'modern_industrialization:quantum_chestplate' });
    event.remove({output: 'modern_industrialization:quantum_leggings'});
	event.remove({output: 'modern_industrialization:quantum_boots' });
	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 32,
		duration: 1000,
		item_inputs: [
			{
				item: 'modern_industrialization:quantum_upgrade',
				amount: 1,
			},
			{
				item: 'minecraft:netherite_helmet',
				amount: 1,
			},
			{
				item: 'botania:terrasteel_helmet',
				amount: 1,
			},
			{
				item: 'techreborn:quantum_helmet',
				amount: 1,
			},
			{
				item: 'indrev:modular_armor_helmet',
				amount: 1,
			},
			{
				item: 'modern_industrialization:quantum_circuit',
				amount: 4,
			},
			{
				item: 'modern_industrialization:singularity',
				amount: 4,
			}
		],
		item_outputs: [
			{
				item: 'modern_industrialization:quantum_helmet',
				amount: 1,
		    }
		]
	});

	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 32,
		duration: 1000,
		item_inputs: [
			{
				item: 'modern_industrialization:quantum_upgrade',
				amount: 1,
			},
			{
				item: 'minecraft:netherite_chestplate',
				amount: 1,
			},
			{
				item: 'botania:terrasteel_chestplate',
				amount: 1,
			},
			{
				item: 'techreborn:quantum_chestplate',
				amount: 1,
			},
			{
				item: 'indrev:modular_armor_chest',
				amount: 1,
			},
			{
				item: 'modern_industrialization:quantum_circuit',
				amount: 4,
			},
			{
				item: 'modern_industrialization:singularity',
				amount: 7,
			}
		],
		item_outputs: [
			{
				item: 'modern_industrialization:quantum_chestplate',
				amount: 1,
		    }
		]
	});

	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 32,
		duration: 1000,
		item_inputs: [
			{
				item: 'modern_industrialization:quantum_upgrade',
				amount: 1,
			},
			{
				item: 'minecraft:netherite_leggings',
				amount: 1,
			},
			{
				item: 'botania:terrasteel_leggings',
				amount: 1,
			},
			{
				item: 'techreborn:quantum_leggings',
				amount: 1,
			},
			{
				item: 'indrev:modular_armor_legs',
				amount: 1,
			},
			{
				item: 'modern_industrialization:quantum_circuit',
				amount: 4,
			},
			{
				item: 'modern_industrialization:singularity',
				amount: 6,
			}
		],
		item_outputs: [
			{
				item: 'modern_industrialization:quantum_leggings',
				amount: 1,
		    }
		]
	});

	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 32,
		duration: 1000,
		item_inputs: [
			{
				item: 'modern_industrialization:quantum_upgrade',
				amount: 1,
			},
			{
				item: 'minecraft:netherite_boots',
				amount: 1,
			},
			{
				item: 'botania:terrasteel_boots',
				amount: 1,
			},
			{
				item: 'techreborn:quantum_boots',
				amount: 1,
			},
			{
				item: 'indrev:modular_armor_boots',
				amount: 1,
			},
			{
				item: 'modern_industrialization:quantum_circuit',
				amount: 4,
			},
			{
				item: 'modern_industrialization:singularity',
				amount: 4,
			}
		],
		item_outputs: [
			{
				item: 'modern_industrialization:quantum_boots',
				amount: 1,
		    }
		]
	});

	// Quantum Sword
    
	event.remove({output: 'modern_industrialization:quantum_sword'})
	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 32,
		duration: 1000,
		item_inputs: [
			{
				item: 'modern_industrialization:quantum_upgrade',
				amount: 1,
			},
			{
				item: 'minecraft:netherite_sword',
				amount: 1,
			},
			{
				item: 'botania:star_sword',
				amount: 1,
			},
			{
				item: 'botania:thunder_sword',
				amount: 1,
			},
			{
				item: 'techreborn:nanosaber',
				amount: 1,
			},
			{
				item: 'indrev:gamer_axe',
				amount: 1,
			},
			{
				item: 'modern_industrialization:quantum_circuit',
				amount: 4,
			},
			{
				item: 'modern_industrialization:singularity',
				amount: 16,
			}
		],
		item_outputs: [
			{
				item: 'modern_industrialization:quantum_sword',
				amount: 1,
		    }
		]
	});

    // Quantum Upgrade

	event.remove({ output: 'modern_industrialization:quantum_upgrade' });
	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 32,
		duration: 1000,
		item_inputs: [
			{
				item: 'modern_industrialization:highly_advanced_upgrade',
				amount: 64,
			},
			{
				item: 'modern_industrialization:quantum_circuit',
				amount: 8,
			},
			{
				item: 'modern_industrialization:singularity',
				amount: 4,
			},
			{
				item: 'modern_industrialization:quantum_circuit_board',
				amount: 1,
			},
			{
				item: 'botania:gaia_ingot',
				amount: 8,
			},
			{
				item: 'ae2:singularity',
				amount: 64,
			},
		],

		fluid_inputs: {
			fluid: 'modern_industrialization:uu_matter',
			amount: 64,
		},
		item_outputs: [
			{
				item: 'modern_industrialization:quantum_upgrade',
				amount: 1,
			},
		],
	});

	// Quantum Processor

	event.remove({output: 'modern_industrialization:quantum_circuit'});
	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 32,
		duration: 1000,
		item_inputs: [
			{
				item: 'modern_industrialization:processing_unit',
				amount: 8,
			},
			{
				item: 'modern_industrialization:cooling_cell',
				amount: 4,
			},
			{
				item: 'modern_industrialization:qbit',
				amount: 4,
			},
			{
				item: 'modern_industrialization:quantum_circuit_board',
				amount: 1,
			},
			{
				item: 'modern_industrialization:plutonium_nugget',
				amount: 4,
			},
			{
				item: 'indrev:circuit_mk4',
				amount: 16,
			},
            {
				item: 'techreborn:industrial_circuit',
				amount: 16,
			},
		],
		item_outputs: [
			{
				item: 'modern_industrialization:quantum_circuit',
				amount: 1,
			},
		],
	});

	// Tech Reborn Industrial Circuit
	event.remove({output: 'techreborn:industrial_circuit'});
	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 16,
		duration: 500,
		item_inputs: [
			{
				item: 'techreborn:advanced_circuit',
				amount: 2,
			},
			{
				item: 'modern_industrialization:platinum_plate',
				amount: 4,
			},
			{
				item: 'indrev:circuit_mk3',
				amount: 2,
			},
		],
		item_outputs: [
			{
				item: 'techreborn:industrial_circuit',
				amount: 1,
			}
		]
	});
	
	// Processing Boards

	// Electronic Circuit Board
	event.remove({output: 'modern_industrialization:electronic_circuit_board'});
	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 8,
		duration: 200,
		item_inputs: [
			{
				item: 'modern_industrialization:aluminum_plate',
				amount: 4,
			},
			{
				item: 'modern_industrialization:electrum_cable',
				amount: 6,
			},
			{
				item: 'modern_industrialization:analog_circuit_board',
				amount: 1,
			},
			{
				item: 'modern_industrialization:redstone_battery',
				amount: 1,
			},
		],
		item_outputs: [
			{
				item: 'modern_industrialization:electronic_circuit_board',
				amount: 1,
			}
		],
	});
    
    event.remove({output: 'modern_industrialization:digital_circuit_board'});
	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 16,
		duration: 500,
		item_inputs: [
			{
				item: 'modern_industrialization:stainless_steel_plate',
				amount: 8,
			},
			{
				item: 'modern_industrialization:aluminum_cable',
				amount: 8,
			},
			{
				item: 'modern_industrialization:electronic_circuit_board',
				amount: 1,
			},
			{
				item: 'modern_industrialization:silicon_battery',
				amount: 1,
			},
		],
		fluid_inputs: [
			{
				fluid: 'modern_industrialization:polyethylene',
				amount: 750,
			}
		],
		item_outputs: [
			{
				item: 'modern_industrialization:digital_circuit_board',
				amount: 1,
			}
		],
	});

	event.remove({output: 'modern_industrialization:processing_unit_board'});
	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 32,
		duration: 1200,
		item_inputs: [
			{
				item: 'modern_industrialization:platinum_plate',
				amount: 4,
			},
			{
				item: 'modern_industrialization:annealed_copper_cable',
				amount: 16,
			},
			{
				item: 'modern_industrialization:digital_circuit_board',
				amount: 1,
			},
			{
				item: 'modern_industrialization:cadmium_battery',
				amount: 2,
			},
			{
				item: 'botania:terrasteel_nugget',
				amount: 4,
			}
		],
		fluid_inputs:[
			{
				fluid: 'modern_industrialization:polyvinyl_chloride',
				amount: 1500,
			}
		],
		item_outputs: [
			{
				item: 'modern_industrialization:processing_unit_board',
				amount: 1,
			}
		],
	});
    
	event.remove({output: 'modern_industrialization:quantum_circuit_board'});
	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 64,
		duration: 1200,
		item_inputs: [
			{
				item: 'modern_industrialization:iridium_plate',
				amount: 16,
			},
			{
				item: 'modern_industrialization:superconductor_cable',
				amount: 16,
			},
			{
				item: 'modern_industrialization:processing_unit_board',
				amount: 1,
			},
			{
				item: 'modern_industrialization:plutonium_battery',
				amount: 2,
			},
			{
				item: 'botania:terrasteel_nugget',
				amount: 8,
			},
			{
				item: 'techreborn:industrial_circuit',
				amount: 16,
			},
			{
				item: 'indrev:circuit_mk4',
				amount: 16,
			}
		],
		fluid_inputs: [
			{
				fluid: 'modern_industrialization:helium_3',
				amount: 50,
			}
		],
		item_outputs: [
			{
				item: 'modern_industrialization:quantum_circuit_board',
				amount: 1,
			}
		],
	});

	// Tech Reborn Quantum Suit

	event.remove({output: 'techreborn:quantum_helmet'});
	event.remove({output: 'techreborn:quantum_chestplate'});
	event.remove({output: 'techreborn:quantum_leggings'});
	event.remove({output: 'techreborn:quantum_boots'});
	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 24,
		duration: 800,
		item_inputs: [
			{
				item: 'techreborn:tungstensteel_plate',
				amount: 2,
			},
			{
				item: 'techreborn:lapotron_crystal',
				amount: 1,
			},
			{
				item: 'techreborn:data_storage_chip',
				amount: 2,
			},
			{
				item: 'techreborn:superconductor',
				amount: 2,
			}
		],
		item_outputs: [
			{
				item: 'techreborn:quantum_helmet',
				amount: 1,
			}
		]
	});

	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 24,
		duration: 800,
		item_inputs: [
			{
				item: 'techreborn:tungstensteel_plate',
				amount: 4,
			},
			{
                item: 'modern_industrialization:gravichestplate',
				amount: 1,
			},
			{
				item: 'techreborn:lapotron_crystal',
				amount: 1,
			},
			{
				item: 'techreborn:data_storage_chip',
				amount: 2,
			},
			{
				item: 'techreborn:superconductor',
				amount: 2,
			},
			{
				item: 'techreborn:iridium_neutron_reflector',
				amount: 1,
			}
		],
		item_outputs: [
			{
				item: 'techreborn:quantum_chestplate',
				amount: 1,
			}
		]
	});

	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 24,
		duration: 800,
		item_inputs: [
			{
				item: 'techreborn:tungstensteel_plate',
				amount: 2,
			},
			{
				item: 'techreborn:lapotron_crystal',
				amount: 1,
			},
			{
				item: 'techreborn:data_storage_chip',
				amount: 2,
			},
			{
				item: 'techreborn:superconductor',
				amount: 2,
			}
		],
		item_outputs: [
			{
				item: 'techreborn:quantum_leggings',
				amount: 1,
			}
		]
	});

	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 24,
		duration: 800,
		item_inputs: [
			{ 
                item: 'techreborn:tungstensteel_plate',
				amount: 2,
			},
			{
				item: 'techreborn:lapotron_crystal',
				amount: 2,
			},
			{
				item: 'techreborn:data_storage_chip',
				amount: 2,
			},
			{
				item: 'techreborn:superconductor',
				amount: 2,
			}
		],
		item_outputs: [
			{
				item: 'techreborn:quantum_boots',
				amount: 1,
			}
		]
	});

	// Lapotron Crystal
	event.remove({output: 'techreborn:lapotron_crystal'});
	event.shaped('techreborn:lapotron_crystal', ['LIL','LEL','MIM'], {
		L: 'techreborn:lazurite_plate',
		E: 'techreborn:energy_crystal',
		I: 'techreborn:industrial_circuit',
		M: 'botania:mana_diamond',
	});

	// Indrev Modular Suit 

	event.remove({output: 'indrev:modular_armor_helmet'});
	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 24,
		duration: 800,
		item_inputs:[
			{
				item: 'minecraft:netherite_ingot',
				amount: 4,
			},
			{
				item: 'indrev:circuit_mk4',
				amount: 1,
			},
			{
				item: 'techreborn:industrial_circuit',
				amount: 2,
			},
			{
				item: 'indrev:enriched_nikolite_ingot',
				amount: 2,
			},
			{
				item: 'indrev:steel_helmet',
				amount: 1,
			},
			{
				item: 'indrev:battery',
				amount: 2,
			},
			{
				item: 'indrev:modular_core_activated',
				amount: 1,
			},
		],
		item_outputs: [
			{
				item: 'indrev:modular_armor_helmet',
				amount: 1,
			}
		],
	});

	event.remove({output: 'indrev:modular_armor_chest'});
	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 24,
		duration: 800,
		item_inputs:[
			{
				item: 'minecraft:netherite_ingot',
				amount: 8,
			},
			{
				item: 'indrev:circuit_mk4',
				amount: 1,
			},
			{
				item: 'techreborn:industrial_circuit',
				amount: 2,
			},
			{
				item: 'indrev:enriched_nikolite_ingot',
				amount: 2,
			},
			{
				item: 'indrev:steel_chestplate',
				amount: 1,
			},
			{
				item: 'indrev:battery',
				amount: 2,
			},
			{
				item: 'indrev:modular_core_activated',
				amount: 1,
			},
		],
		item_outputs: [
			{
				item: 'indrev:modular_armor_chest',
				amount: 1,
			}
		],
	});

	event.remove({output: 'indrev:modular_armor_legs'});
	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 24,
		duration: 800,
		item_inputs:[
			{
				item: 'minecraft:netherite_ingot',
				amount: 7,
			},
			{
				item: 'indrev:circuit_mk4',
				amount: 1,
			},
			{
				item: 'techreborn:industrial_circuit',
				amount: 2,
			},
			{
				item: 'indrev:enriched_nikolite_ingot',
				amount: 2,
			},
			{
				item: 'indrev:steel_leggings',
				amount: 1,
			},
			{
				item: 'indrev:battery',
				amount: 2,
			},
			{
				item: 'indrev:modular_core_activated',
				amount: 1,
			},
		],
		item_outputs: [
			{
				item: 'indrev:modular_armor_legs',
				amount: 1,
			}
		],
	});

	event.remove({output: 'indrev:modular_armor_boots'});
	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 24,
		duration: 800,
		item_inputs:[
			{
				item: 'minecraft:netherite_ingot',
				amount: 4,
			},
			{
				item: 'indrev:circuit_mk4',
				amount: 1,
			},
			{
				item: 'techreborn:industrial_circuit',
				amount: 2,
			},
			{
				item: 'indrev:enriched_nikolite_ingot',
				amount: 2,
			},
			{
				item: 'indrev:steel_boots',
				amount: 1,
			},
			{
				item: 'indrev:battery',
				amount: 2,
			},
			{
				item: 'indrev:modular_core_activated',
				amount: 1,
			},
		],
		item_outputs: [
			{
				item: 'indrev:modular_armor_boots',
				amount: 1,
			}
		],
	});

    // Gamer Axe
	event.remove({output: 'indrev:gamer_axe'});
	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 24,
		duration: 800,
		item_inputs:[
			{
				item: 'minecraft:netherite_ingot',
				amount: 4,
			},
			{
                item: 'modern_industrialization:steel_plate',
				amount: 6,
			},
			{
				item: 'indrev:circuit_mk4',
				amount: 2,
			},
			{
				item: 'techreborn:industrial_circuit',
				amount: 2,
			},
			{
				item: 'indrev:enriched_nikolite_ingot',
				amount: 2,
			},
			{
				item: 'minecraft:netherite_axe',
				amount: 1,
			},
			{
				item: 'indrev:battery',
				amount: 1,
			},
		],
		item_outputs: [
			{
				item: 'indrev:gamer_axe',
				amount: 1,
			}
		],
	});

	// Tech Reborn Tools

	event.remove({output: 'techreborn:nanosaber'})
	event.custom({
		type: 'modern_industrialization:assembler',
		eu: 24,
		duration: 800,
		item_inputs: [
			{
				item: 'techreborn:lapotron_crystal',
				amount: 1,
			},
			{
				item: 'modern_industrialization:carbon_plate',
				amount: 2,
			},
			{
				item: 'modern_industrialization:diamond_plate',
				amount: 4,
			},
			{
				item: 'indrev:circuit_mk4',
				amount: 1,
			},
			{
				item: 'techreborn:industrial_circuit',
				amount: 2,
			}
		],
		item_outputs: [
			{
				item: 'techreborn:nanosaber'
			}
		]
	});
	// Remove recipes here

	event.remove({output: 'modern_industrialization:redstone_tiny_dust' });

	// Add recipes here

	event.shaped('minecraft:stone', ['CF ', '   ', '   '], {
		C: 'minecraft:cobblestone',
		F: 'minecraft:fire_charge',
	});
});


