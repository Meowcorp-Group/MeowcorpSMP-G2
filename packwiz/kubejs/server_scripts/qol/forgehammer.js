ServerEvents.recipes((event) => {
	// TODO: migrate to new RecipeManager format
	const recipe = new RecipeManager(event);
    
    event.custom(
        {
        type: "modern_industrialization:forge_hammer",
        duration: 0,
        eu: 30,
        item_inputs: [
          {
            amount: 3,
            item: "create:raw_zinc"
          }
        ],
        item_outputs: [
          {
            amount: 4,
            item: "techreborn:zinc_dust"
          }
        ]
      });

})
