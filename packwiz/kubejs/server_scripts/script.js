// priority: 0

console.info(
  "Hello, World! (You will see this line every time server resources reload)"
);

ServerEvents.recipes((event) => {
	
  // Change recipes here

  event.remove({output: "modern_industrialization:quantum_upgrade"});
  event.custom({
    type: "modern_industrialization:assembler",
    eu: 32,
    duration: 1000,
    item_inputs: [
      {
        item: "modern_industrialization:highly_advanced_upgrade",
        amount: 32,
      },
      {
        item: "modern_industrialization:quantum_circuit",
        amount: 8,
      },
      {
        item: "modern_industrialization:singularity",
        amount: 4,
      },
      {
        item: "modern_industrialization:quantum_circuit_board",
        amount: 1,
      },
      {
        item: "botania:gaia_ingot",
        amount: 8,
      },
      {
        item: "ae2:singularity",
        amount: 64,
      },
    ],

    fluid_inputs: {
      fluid: "modern_industrialization:uu_matter",
      amount: 64,
    },
    item_outputs: [
      {
        item: "modern_industrialization:quantum_upgrade",
        amount: 1,
      },
    ],
  });


  // Add recipes here

  event.shaped("minecraft:stone", ["CF ", "   ", "   "], {
    C: "minecraft:cobblestone",
    F: "minecraft:fire_charge",

  })
})


ServerEvents.tags("item", (event) => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')
  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
});
