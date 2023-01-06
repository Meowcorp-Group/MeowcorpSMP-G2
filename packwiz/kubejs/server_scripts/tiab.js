ServerEvents.recipes((event) => {

event.remove({timeinabottle:time_in_a_bottle})

event.shaped('timeinabottle:time_in_a_bottle', 
['GGG', 
 'DCD', 
 'MBM'], 
{
    G: 'minecraft:gold_ingot',
    C: 'minecraft:clock',
    D: 'botania:mana_diamond',
    M: 'botania:rune_of_mana',
    B: 'minecraft:bottle'
});

});