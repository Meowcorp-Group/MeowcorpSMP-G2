ServerEvents.recipes((event) => {
    
  // Heated Recipes  

    event.custom({
      type: "create:mixing",
      heatRequirement: "heated",
      ingredients: [
        {
          count: 3,
          item: "minecraft:copper_ingot",
        },
        {
          count: 1,
          tag: "c:tin_ingots",
        },
      ],
      results: [
        {
          count: 3,
          item: "modern_industrialization:bronze_ingot",
        },
      ],
    });

  // No Heat Requirement Recipes
    
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        count: 1,
        tag: "c:lead_dusts",
      },
      {
        count: 1,
        item: "modern_industrialization:antimony_dust",
      },
    ],
    results: [
      {
        count: 2,
        item: "modern_industrialization:battery_alloy_dust",
      },
    ],
  });

  
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        count: 3,
        item: "modern_industrialization:copper_dust",
      },
      {
        count: 1,
        tag: "c:tin_dusts",
      },
    ],
    results: [
      {
        count: 3,
        item: "modern_industrialization:bronze_ingot",
      },
    ],
  });

});