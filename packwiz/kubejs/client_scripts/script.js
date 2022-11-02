// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

REIEvents.hideItems(event => {
	// Hide items in REI here
	// event.hide('minecraft:cobblestone')
	event.hide('techreborn:tin_ore')
	event.hide('indrev:tin_ore')
})