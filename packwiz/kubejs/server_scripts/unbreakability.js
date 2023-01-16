ServerEvents.recipes((event) => {

    event.remove({output: 'piercingpaxels:upgrade_unbreakable'});
    
    event.shaped('piecringpaxels:upgrade_unbreakable', 
    ['QNQ', 
     'NnN', 
     'GNG'], 
    {
        Q: 'modern_industrialization:quantum_circuit',
        N: 'minecraft:netherite_block',
        n: 'minecraft:nether_star',
        G: 'botania:gaia_spirit',
    });
    
    });