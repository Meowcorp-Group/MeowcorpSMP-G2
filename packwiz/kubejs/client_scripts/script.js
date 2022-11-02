// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

const blacklist = [
	// ores
	// tech reborn
	'techreborn:tin_ore',
	'techreborn:deepslate_tin_ore',
    'techreborn:bauxite_ore',
    'techreborn:deepslate_bauxite_ore',	
    'techreborn:iridium_ore',
    'techreborn:deepslate_iridium_ore',
    'techreborn:lead_ore',
    'techreborn:deepslate_lead_ore',
    'techreborn:silver_ore',
    'techreborn:deepslate_silver_ore',	
	// industrial revolution
	'indrev:tin_ore',
	'indrev:deepslate_tin_ore'
];

REIEvents.hide('item', event => {
	// Hide items in REI here
	// event.hide('minecraft:cobblestone')
	event.hide(blacklist);
});

JEIEvents.hideItems(event => {
	event.hide(blacklist);
});