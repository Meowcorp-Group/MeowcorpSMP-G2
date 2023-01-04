ServerEvents.recipes((event) => {
    
    event.custom(
        {
        type: "modern_industrialization:macerator",
        duration: 10,
        eu: 2,
        item_inputs: [
          {
            amount: 3,
            tag: "c:raw_zinc_ores"
          }
        ],
        item_outputs: [
          {
            amount: 4,
            item: "techreborn:zinc_dust"
          }
        ]
      });

      event.custom(
        {
        type: "modern_industrialization:macerator",
        duration: 5,
        eu: 2,
        item_inputs: [
          {
            amount: 1,
            item: "create:zinc_ore"
          }
        ],
        item_outputs: [
          {
            amount: 3,
            item: "create:raw_zinc"
          }
        ]
      });

});