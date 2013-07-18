/*
 * List of initial content used to populate Content lists
 */

//Buildings
Content.buildingStatArray = [
	{	name: 'trap',
		maximum: 10,
		availableMsg: 'builder says she can make traps to catch any creatures might still be alive out there',
		buildMsg: 'more traps to catch more creatures',
		maxMsg: "more traps won't help now",
		type: 'building',
		getReq: function() {
			var n = Outside.numBuilding('trap');
			return {
				'wood': 10 + (n*10)
			};
		}
	},
	{	name: 'cart',
		maximum: 1,
		availableMsg: 'builder says she can make a cart for carrying wood',
		buildMsg: 'the rickety cart will carry more wood from the forest',
		type: 'building',
		req: [{ 'wood': 30 }]

	},
	{	name: 'hut',
		maximum: 20,
		availableMsg: "builder says there are more wanderers. says they'll work, too.",
		buildMsg: 'builder puts up a hut, out in the forest. says word will get around.',
		maxMsg: 'no more room for huts.',
		type: 'building',
		getReq: function() {
			var n = Outside.numBuilding('hut');
			return {
				'wood': 100 + (n*50)
			};
		}
	},
	{	name: 'lodge',
		maximum: 1,
		availableMsg: 'villagers could help hunt, given the means',
		buildMsg: 'the hunting lodge stands in the forest, a ways out of town',
		type: 'building',
		req: [{
				'wood': 200,
				'fur': 10,
				'meat': 5
		}]
	},
	{	name: 'trading post',
		maximum: 1,
		availableMsg: "a trading post would make commerce easier",
		buildMsg: "now the nomads have a place to set up shop, they might stick around a while",
		type: 'building',
		req: [{
				'wood': 400,
				'fur': 100
		}]
	},
	{	name: 'tannery',
		maximum: 1,
		availableMsg: "builder says leather could be useful. says the villagers could make it.",
		buildMsg: 'tannery goes up quick, on the edge of the village',
		type: 'building',
		req: [{
				'wood': 500,
				'fur': 50
		}]
	},
	{	name: 'smokehouse',
		maximum: 1,
		availableMsg: "should cure the meat, or it'll spoil. builder says she can fix something up.",
		buildMsg: 'builder finishes the smokehouse. she looks hungry.',
		type: 'building',
		req: [{
				'wood': 600,
				'meat': 50
		}]
	},
	{	name: 'workshop',
		maximum: 1,
		availableMsg: "builder says she could make finer things, if she had the tools",
		buildMsg: "workshop's finally ready. builder's excited to get to it",
		type: 'building',
		req: [{
				'wood': 800,
				'leather': 100,
				'scales': 10
		}]
	},
	{	name: 'steelworks',
		maximum: 1,
		availableMsg: "builder says the villagers could make steel, given the tools",
		buildMsg: "a haze falls over the village as the steelworks fires up",
		type: 'building',
		req: [{
				'wood': 1500,
				'iron': 100,
				'coal': 100
		}]
	},
	{	name: 'armoury',
		maximum: 1,
		availableMsg: "builder says it'd be useful to have a steady source of bullets",
		buildMsg: "armoury's done, welcoming back the weapons of the past.",
		type: 'building',
		req: [{
				'wood': 3000,
				'steel': 100,
				'sulphur': 50
		}]
	}
];

//Upgrades (upgrades are related to buildings. e.g. more traps, more huts, armoury equipment)
Content.upgradeStatArray = [
	
];

//Items
Content.itemStatArray = [
	//Materials
	{	name: 'wood',
		material: true,
		trade: [{ 'wood': 1 }]
	},
	{	name: 'fur',
		material: true,
		trade: [{ 'wood': 100 }]
	},
	{	name: 'scales',
		material: true,
		trade: [{ 'fur': 150 }]
	},
	{	name: 'teeth',
		material: true,
		trade: [{ 'fur': 300 }]
	},
	{	name: 'leather',
		material: true,
		trade: [{ fur: 10 }]
	},
	{	name: 'meat',
		material: true,
		trade: [{ 'fur': 5 }]
	},
	{	name: 'cured meat',
		material: true,
		trade: [{ 'fur': 30 }]
	},
	{	name: 'bait',
		material: true,
		trade: [{ 'meat': 2 }]
	},
	{	name: 'cloth',
		material: true,
		trade: [{ 'fur': 50 }]
	},
	{	name: 'iron',
		material: true,
		trade: [{
				'fur': 150,
				'scales': 50
		}]
	},
	{	name: 'coal',
		material: true,
		trade: [{
				'fur': 200,
				'teeth': 50
		}]
	},
	{	name: 'steel',
		material: true,
		trade: [{
				'fur': 300,
				'scales': 50,
				'teeth': 50
		}]
	},
	{	name: 'alien alloy',
		material: true,
		trade: [{
				'fur': 1500,
				'scales': 750,
				'teeth': 300
		}]
	},
	//Consumables
	{	name: 'medicine',
		consumable:true,
		weight: 0.3,
		trade: [{
				'scales': 50,
				'teeth': 30
		}]
	},
	{	name: 'bullets',
		consumable:true,
		weight: 0.1,
		trade: [{ 'scales': 10 }]
	},
	{	name: 'energy cell',
		consumable:true,
		weight: 0.2,
		trade: [{
				'scales': 10,
				'teeth': 10
		}]
	},
	{	name: 'torch',
		consumable:true,
		buildMsg: 'a torch to keep the dark away',
		trade: [{
				'wood': 1,
				'cloth': 1
		}]
	}
];

//Equipment
Content.equipmentStatArray = [
	{	name: 'waterskin',
		equipType: 'liquidStorage',
		maximum: 1,
		buildMsg: 'this waterskin\'ll hold a bit of water, at least',
		trade: [{
				'leather': 50
		}]
	},
	{	name: 'cask',
		equipType: 'liquidStorage',
		maximum: 1,
		buildMsg: 'the cask holds enough water for longer expeditions',
		trade: [{
				'leather': 100,
				'iron': 20
		}]
	},
	{	name: 'water tank',
		equipType: 'liquidStorage',
		maximum: 1,
		buildMsg: 'never go thirsty again',
		trade: [{
				'iron': 100,
				'steel': 50
		}]
	},
	{	name: 'rucksack',
		equipType: 'itemStorage',
		maximum: 1,
		buildMsg: 'carrying more means longer expeditions to the wilds',
		trade: [{
				'leather': 200
		}]
	},
	{	name: 'wagon',
		equipType: 'itemStorage',
		maximum: 1,
		buildMsg: 'the wagon can carry a lot of supplies',
		trade: [{
				'wood': 500,
				'iron': 100
		}]
	},
	{	name: 'convoy',
		equipType: 'itemStorage',
		maximum: 1,
		buildMsg: 'the convoy can haul mostly everything',
		trade: [{
				'wood': 1000,
				'iron': 200,
				'steel': 100
		}]
	},
	{	name: 'l armour',
		equipType: 'armour',
		maximum: 1,
		buildMsg: "leather's not strong. better than rags, though.",
		trade: [{
				'leather': 200,
				'scales': 20
		}]
	},
	{	name: 'i armour',
		equipType: 'armour',
		maximum: 1,
		buildMsg: "iron's stronger than leather",
		trade: [{
				'leather': 200,
				'iron': 100
		}]
	},
	{	name: 's armour',
		equipType: 'armour',
		maximum: 1,
		buildMsg: "steel's stronger than iron",
		trade: [{
				'leather': 200,
				'steel': 100
		}]
	},
	{	name: 'compass',
		equipType: 'tool',
		maximum: 1,
		trade: [{ 
				fur: 400, 
				scales: 20, 
				teeth: 10 
		}]
	}
];

//Weapons
Content.weaponStatArray = [
	//Unarmed
	{
		name: 'fists',
		weaponType: 'unarmed',
		damage: 1,
		cooldown: 2,
		verb: 'punch'
	},
	//Melee
	{
		name: 'bone spear',
		weaponType: 'melee',
		weight: 2,
		damage: 2,
		cooldown: 2,
		verb: 'stab',
		buildMsg: "this spear's not elegant, but it's pretty good at stabbing",
		trade: [{
				'wood': 100,
				'teeth': 5
		}]
	},
	{
		name: 'iron sword',
		weaponType: 'melee',
		weight: 3,
		damage: 4,
		cooldown: 2,
		verb: 'swing',
		buildMsg: "sword is sharp. good protection out in the wilds.",
		trade: [{
				'wood': 200,
				'leather': 50,
				'iron': 20
		}]
	},
	{
		name: 'steel sword',
		weaponType: 'melee',
		weight: 3.5,
		damage: 6,
		cooldown: 2,
		verb: 'slash',
		buildMsg: "the steel is strong, and the blade true.",
		trade: [{
				'wood': 500,
				'leather': 100,
				'steel': 20
		}]
	},
	{
		name: 'bayonet',
		weaponType: 'melee',
		weight: 1.5,
		damage: 8,
		cooldown: 2,
		verb: 'thrust',
		trade: [{
				'scales': 500,
				'teeth': 250
		}]
	},
	//Ranged
	{
		name: 'rifle',
		weaponType: 'ranged',
		weight: 5,
		damage: 5,
		cooldown: 1,
		verb: 'shoot',
		uses: { 'bullets': 1 },
		buildMsg: "black powder and bullets, like the old days.",
		trade: [{
				'wood': 200,
				'steel': 50,
				'sulphur': 50
		}]
	},
	{
		name: 'laser rifle',
		weaponType: 'ranged',
		weight: 5,
		damage: 8,
		cooldown: 1,
		verb: 'blast',
		uses: { 'energy cell': 1 }
	},
	{
		name: 'grenade',
		weaponType: 'ranged',
		damage: 15,
		cooldown: 5,
		verb: 'lob',
		uses: { 'grenade': 1 },
		trade: [{
				'scales': 100,
				'teeth': 50
		}]
	},
	{
		name: 'bola',
		weaponType: 'ranged',
		weight: 0.5,
		damage: 'stun',
		cooldown: 15,
		verb: 'tangle',
		uses: { 'bola': 1 },
		trade: [{
				'teeth': 10
		}]
	}
];

//Mobs
Content.mobStatArray = [
	//============ tier 1 ============//
	{	name: 'beast',
		char: 'B',
		notification: 'a startled beast defends its home',
		damage: 1,
		hit: 0.8,
		attackDelay: 1,
		health: 5,
		terrain: null,
		loot: {
			'fur': {min: 1, max: 3, chance: 1},
			'teeth': {min: 1, max: 4, chance: 0.8}
		}
	},
	{	name: 'large beast',
		char: 'B',
		notification: 'a large beast charges out of the dark',
		damage: 3,
		hit: 0.8,
		attackDelay: 2,
		health: 10,
		terrain: null,
		loot: {
			'fur': {min: 1, max: 6, chance: 1},
			'teeth': {min: 1, max: 3, chance: 1}
		}
	},
	{	name: 'snarling beast',
		char: 'B',
		notification: 'a snarling beast leaps out of the underbrush',
		damage: 1,
		hit: 0.8,
		attackDelay: 1,
		health: 5,
		terrain: World.TILE.FOREST,
		loot: {
			'fur': {min: 1, max: 3, chance: 1},
			'meat': {min: 1, max: 3, chance: 1},
			'teeth': {min: 1, max: 3, chance: 0.8}
		}
	},
	{	name: 'beastly matriach',
		char: 'M',
		notification: 'a large creature lunges, muscles rippling in the torchlight',
		damage: 4,
		hit: 0.8,
		attackDelay: 2,
		health: 10,
		terrain: null,
		loot: {
			'cloth': {min: 5, max: 10, chance: 0.5},
			'teeth': {min: 5, max: 10, chance: 1},
			'scales': {min: 5, max: 10, chance: 0.8}
		}
	},
	{	name: 'man',
		char: 'M',
		notification: 'a man joins the fight',
		damage: 3,
		hit: 0.8,
		attackDelay: 2,
		health: 10,
		terrain: null,
		loot: {
			'cured meat': {min: 1, max: 5, chance: 0.8},
			'cloth': {min: 1, max: 5, chance: 0.8}
		}
	},
	{	name: 'gaunt man',
		char: 'G',
		notification: 'a gaunt man approaches, a crazed look in his eye',
		damage: 2,
		hit: 0.8,
		attackDelay: 2,
		health: 6,
		terrain: World.TILE.BARRENS,
		loot: {
			'cloth': {min: 1, max: 3, chance: 0.8},
			'teeth': {min: 1, max: 2, chance: 0.8},
			'leather': {min: 1, max: 2, chance: 0.5}
		}
	},
	{	name: 'frail man',
		char: 'M',
		notification: 'a frail man stands defiantly, blocking the path',
		damage: 1,
		hit: 0.8,
		attackDelay: 2,
		health: 10,
		terrain: null,
		loot: {
			'cured meat': {min: 1, max: 5, chance: 0.8},
			'cloth': {min: 1, max: 5, chance: 0.5},
			'leather': {min: 1, max: 1, chance: 0.2},
			'medicine': {min: 1, max: 3, chance: 0.5}
		}
	},
	{	name: 'old man',
		char: 'M',
		notification: 'an old man bursts through a door, wielding a scalpel',
		damage: 3,
		hit: 0.5,
		attackDelay: 2,
		health: 10,
		terrain: null,
		loot: {
			'cured meat': {min: 1, max: 3, chance: 0.5},
			'cloth': {min: 1, max: 5, chance: 0.8},
			'medicine': {min: 1, max: 2, chance: 0.5}
		}
	},
	{	name: 'weak squatter',
		char: 'S',
		notification: 'a man charges down the hall, a rusty blade in his hand',
		damage: 3,
		hit: 0.8,
		attackDelay: 2,
		health: 10,
		terrain: null,
		loot: {
			'cured meat': {min: 1, max: 10, chance: 0.8},
			'cloth': {min: 1, max: 10, chance: 0.5},
			'leather': {min: 1, max: 10, chance: 0.2}
		}
	},
	{	name: 'strange bird',
		char: 'B',
		notification: 'a strange looking bird speeds across the plains',
		damage: 3,
		hit: 0.8,
		attackDelay: 2,
		health: 4,
		terrain: World.TILE.FIELD,
		loot: {
			'scales': {min: 1, max: 3, chance: 0.8},
			'teeth': {min: 1, max: 2, chance: 0.5},
			'meat': {min: 1, max: 3, chance: 0.8}
		}
	},
	{	name: 'cave lizard',
		char: 'L',
		notification: 'a cave lizard attacks',
		damage: 3,
		hit: 0.8,
		attackDelay: 2,
		health: 6,
		terrain: null,
		loot: {
			'scales': {min: 1, max: 3, chance: 1},
			'teeth': {min: 1, max: 2, chance: 0.8}
		}
	},
	{	name: 'giant lizard',
		char: 'L',
		notification: 'a giant lizard shambles forward',
		damage: 4,
		hit: 0.8,
		attackDelay: 2,
		health: 10,
		terrain: null,
		loot: {
			'scales': {min: 1, max: 3, chance: 1},
			'teeth': {min: 1, max: 2, chance: 1}
		}
	},
	//============ tier 2 ============//
	{	name: 'shivering man',
		char: 'S',
		notification: 'a shivering man approaches and attacks with surprising strength',
		damage: 5,
		hit: 0.5,
		attackDelay: 1,
		health: 20,
		terrain: World.TILE.BARRENS,
		loot: {
			'cloth': {min: 1, max: 1, chance: 0.2},
			'teeth': {min: 1, max: 2, chance: 0.8},
			'leather': {min: 1, max: 1, chance: 0.2},
			'medicine': {min: 1, max: 3, chance: 0.7}
		}
	},
	{	name: 'chief',
		char: 'C',
		notification: 'only the chief remains',
		damage: 5,
		hit: 0.8,
		attackDelay: 2,
		health: 20,
		terrain: null,
		loot: {
			'cured meat': {min: 5, max: 10, chance: 1},
			'cloth': {min: 5, max: 10, chance: 0.8},
			'iron': {min: 1, max: 5, chance: 0.8}
		}
	},
	{	name: 'man-eater',
		char: 'E',
		notification: 'a large creature attacks, claws freshly bloodied',
		damage: 3,
		hit: 0.8,
		attackDelay: 1,
		health: 25,
		terrain: World.TILE.FOREST,
		loot: {
			'fur': {min: 5, max: 10, chance: 1},
			'meat': {min: 5, max: 10, chance: 1},
			'teeth': {min: 5, max: 10, chance: 0.8}
		}
	},
	{	name: 'scavenger',
		char: 'S',
		notification: 'a scavenger draws close, hoping for an easy score',
		damage: 4,
		hit: 0.8,
		attackDelay: 2,
		health: 30,
		terrain: World.TILE.BARRENS,
		loot: {
			'cloth': {min: 5, max: 10, chance: 0.8},
			'leather': {min: 5, max: 10, chance: 0.8},
			'iron': {min: 1, max: 5, chance: 0.5},
			'medicine': {min: 1, max: 2, chance: 0.1}
		}
	},
	{	name: 'hidden scavenger',
		char: 'S',
		notification: 'a scavenger waits just inside the door',
		damage: 4,
		hit: 0.8,
		attackDelay: 2,
		health: 30,
		terrain: null,
		loot: {
			'cloth': {min: 5, max: 10, chance: 0.8},
			'leather': {min: 5, max: 10, chance: 0.8},
			'cured meat': {min: 1, max: 5, chance: 0.5}
		}
	},
	{	name: 'panicked scavenger',
		char: 'S',
		notification: 'a panicked scavenger bursts through the door, screaming',
		damage: 5,
		hit: 0.8,
		attackDelay: 2,
		health: 30,
		terrain: null,
		loot: {
			'cured meat': {min: 1, max: 5, chance: 1},
			'leather': {min: 5, max: 10, chance: 0.8},
			'steal sword': {min: 1, max: 1, chance: 0.5}
		}
	},
	{	name: 'lizard',
		char: 'L',
		notification: 'the grass thrashes wildly as a huge lizard pushes through',
		//alternate notification: 'a huge lizard scrambles up out of the darkness of an old metro station.',
		damage: 5,
		hit: 0.8,
		attackDelay: 2,
		health: 20,
		terrain: World.TILE.FIELD,
		loot: {
			'scales': {min: 5, max: 10, chance: 0.8},
			'teeth': {min: 5, max: 10, chance: 0.5},
			'meat': {min: 5, max: 10, chance: 0.8}
		}
	},
	{	name: 'squatter',
		char: 'S',
		notification: 'a squatter stands firmly in the doorway of a small hut',
		damage: 3,
		hit: 0.8,
		attackDelay: 2,
		health: 20,
		terrain: null,
		loot: {
			'cloth': {min: 1, max: 5, chance: 0.8},
			'teeth': {min: 1, max: 5, chance: 0.5}
		}
	},
	{	name: 'thug',
		char: 'T',
		notification: 'ambushed on the street',
		//alternate notification: 'a thug moves out of the shadows',
		damage: 4,
		hit: 0.8,
		attackDelay: 2,
		health: 30,
		terrain: null,
		loot: {
			'cloth': {min: 5, max: 10, chance: 0.8},
			'leather': {min: 5, max: 10, chance: 0.8},
			'cured meat': {min: 1, max: 5, chance: 0.5}
		}
	},
	{	name: 'macho thug',
		char: 'T',
		notification: 'a thug is waiting on the other side of the wall',
		damage: 3,
		hit: 0.8,
		attackDelay: 2,
		health: 30,
		terrain: null,
		loot: {
			'cloth': {min: 1, max: 5, chance: 0.8},
			'cured meat': {min: 3, max: 3, chance: 0.5},
			'steel sword': {min: 1, max: 1, chance: 0.5}
		}
	},
	{	name: 'lone beast',
		char: 'B',
		notification: 'a beast stands alone in an overgrown park',
		//alternate notification: 'a beast charges out of a ransacked classroom.',
		//alternate notification: 'another beast, draw by the noise, leaps out of a copse of trees.',
		damage: 3,
		hit: 0.8,
		attackDelay: 1,
		health: 25,
		terrain: null,
		loot: {
			'fur': {min: 5, max: 10, chance: 1},
			'teeth': {min: 1, max: 5, chance: 1}
		}
	},
	{	name: 'prowling beast',
		char: 'B',
		notification: 'a snarling beast jumps out from behind a car',
		damage: 2,
		hit: 0.8,
		attackDelay: 1,
		health: 30,
		terrain: null,
		loot: {
			'fur': {min: 1, max: 5, chance: 0.8},
			'meat': {min: 1, max: 5, chance: 0.8},
			'teeth': {min: 1, max: 5, chance: 0.5}
		}
	},
	{	name: 'madman',
		char: 'M',
		notification: 'a madman attacks, screeching',
		damage: 6,
		hit: 0.3,
		attackDelay: 1,
		health: 10,
		terrain: World.TILE.BARRENS,
		loot: {
			'cloth': {min: 2, max: 4, chance: 0.3},
			'cured meat': {min: 1, max: 5, chance: 0.9},
			'medicine': {min: 1, max: 2, chance: 0.4}
		}
	},
	{	name: 'vigilante',
		char: 'V',
		notification: 'a man stands over a dead wanderer. notices he is not alone',
		damage: 6,
		hit: 0.8,
		attackDelay: 2,
		health: 30,
		terrain: null,
		loot: {
			'cured meat': {min: 1, max: 5, chance: 1},
			'leather': {min: 5, max: 10, chance: 0.8},
			'steal sword': {min: 1, max: 1, chance: 0.5}
		}
	},
	//============ tier 3 ============//
	{	name: 'feral terror',
		char: 'F',
		notification: 'a beast, wilder than imagining, erupts out of the foliage',
		damage: 6,
		hit: 0.8,
		attackDelay: 1,
		health: 45,
		terrain: World.TILE.FOREST,
		loot: {
			'fur': {min: 5, max: 10, chance: 1},
			'meat': {min: 5, max: 10, chance: 1},
			'teeth': {min: 5, max: 10, chance: 0.8}
		}
	},
	{	name: 'youth',
		char: 'Y',
		notification: 'a youth lashes out with a tree branch',
		damage: 2,
		hit: 0.7,
		attackDelay: 1,
		health: 45,
		terrain: null,
		loot: {
			'cloth': {min: 1, max: 5, chance: 0.8},
			'teeth': {min: 1, max: 5, chance: 0.5}
		}
	},
	{	name: 'soldier',
		char: 'D',
		notification: 'a soldier, alerted, opens fire.',
		//notification: 'a soldier opens fire from across the desert',
		damage: 8,
		ranged: true,
		hit: 0.8,
		attackDelay: 2,
		health: 50,
		terrain: World.TILE.BARRENS,
		loot: {
			'cloth': {min: 5, max: 10, chance: 0.8},
			'bullets': {min: 1, max: 5, chance: 0.5},
			'rifle': {min: 1, max: 1, chance: 0.2},
			'medicine': {min: 1, max: 2, chance: 0.1}
		}
	},
	{	name: 'urban soldier',
		char: 'D',
		notification: 'the soldier steps out from between the buildings, rifle raised',
		//alternate notification: 'a second soldier opens fire.',
		damage: 8,
		ranged: true,
		hit: 0.8,
		attackDelay: 2,
		health: 50,
		terrain: null,
		loot: {
			'cured meat': {min: 1, max: 5, chance: 0.8},
			'bullets': {min: 1, max: 5, chance: 0.5},
			'rifle': {min: 1, max: 1, chance: 0.2}
		}
	},
	{	name: 'sniper',
		char: 'S',
		notification: 'a shot rings out, from somewhere in the long grass',
		damage: 15,
		ranged: true,
		hit: 0.8,
		attackDelay: 4,
		health: 30,
		terrain: World.TILE.FIELD,
		loot: {
			'cloth': {min: 5, max: 10, chance: 0.8},
			'bullets': {min: 1, max: 5, chance: 0.5},
			'rifle': {min: 1, max: 1, chance: 0.2},
			'medicine': {min: 1, max: 2, chance: 0.1}
		}
	},
	{	name: 'urban sniper',
		char: 'S',
		notification: 'a shot echoes in the empty street',
		damage: 15,
		ranged: true,
		hit: 0.8,
		attackDelay: 4,
		health: 30,
		terrain: null,
		loot: {
			'cured meat': {min: 1, max: 5, chance: 0.8},
			'bullets': {min: 1, max: 5, chance: 0.5},
			'rifle': {min: 1, max: 1, chance: 0.2}
		}
	},
	{	name: 'veteran',
		char: 'V',
		notification: 'a large man attacks, waving a bayonet',
		damage: 3,
		hit: 0.8,
		attackDelay: 2,
		health: 45,
		terrain: null,
		loot: {
			'cured meat': {min: 1, max: 5, chance: 0.8},
			'bayonet': {min: 1, max: 1, chance: 0.5}
		}
	},
	{	name: 'grizzled veteran',
		char: 'V',
		notification: 'a grizzled soldier attacks, waving a bayonet',
		damage: 10,
		hit: 0.8,
		attackDelay: 2,
		health: 65,
		terrain: null,
		loot: {
			'cured meat': {min: 1, max: 8, chance: 0.7},
			'bayonet': {min: 1, max: 1, chance: 0.7}
		}
	},
	{	name: 'commando',
		char: 'C',
		notification: 'a masked soldier rounds the corner, gun drawn',
		damage: 3,
		ranged: true,
		hit: 0.9,
		attackDelay: 2,
		health: 55,
		terrain: null,
		loot: {
			'cured meat': {min: 1, max: 5, chance: 0.8},
			'bullets': {min: 1, max: 5, chance: 0.8},
			'rifle': {min: 1, max: 1, chance: 0.5}
		}
	},
	{	name: 'squatters',
		char: 'SSS',
		notification: 'the crowd surges forward',
		plural: true,
		damage: 2,
		hit: 0.7,
		attackDelay: 0.5,
		health: 40,
		terrain: null,
		loot: {
			'cloth': {min: 1, max: 5, chance: 0.8},
			'teeth': {min: 1, max: 5, chance: 0.5}
		}
	},
	{	name: 'eldery squatters',
		char: 'SSS',
		notification: 'a tribe of elderly squatters is camped out in this ward',
		plural: true,
		damage: 2,
		hit: 0.7,
		attackDelay: 0.6,
		health: 40,
		terrain: null,
		loot: {
			'cured meat': {min: 1, max: 3, chance: 0.5},
			'cloth': {min: 3, max: 8, chance: 0.8},
			'medicine': {min: 1, max: 3, chance: 0.3}
		}
	},
	{	name: 'lizards',
		char: 'LLL',
		notification: 'a pack of lizards rounds the corner',
		plural: true,
		damage: 4,
		hit: 0.7,
		attackDelay: 0.7,
		health: 30,
		terrain: null,
		loot: {
			'meat': {min: 3, max: 8, chance: 1},
			'teeth': {min: 2, max: 4, chance: 1},
			'scales': {min: 3, max: 5, chance: 1}
		}
	},
	{	name: 'large bird',
		char: 'B',
		notification: 'a large bird nests at the top of the stairs',
		damage: 5,
		hit: 0.7,
		attackDelay: 1,
		health: 45,
		terrain: null,
		loot: {
			'meat': {min: 5, max: 10, chance: 0.8}
		}
	},
	{	name: 'rats',
		char: 'RRR',
		notification: 'a swarm of rats rushes up the tunnel',
		plural: true,
		damage: 1,
		hit: 0.8,
		attackDelay: 0.25,
		health: 60,
		terrain: null,
		loot: {
			'fur': {min: 5, max: 10, chance: 0.8},
			'teeth': {min: 5, max: 10, chance: 0.5}
		}
	},
	{	name: 'deformed',
		char: 'D',
		notification: 'behind the door, a deformed figure awakes and attacks',
		damage: 8,
		hit: 0.6,
		attackDelay: 2,
		health: 40,
		terrain: null,
		loot: {
			'cloth': {min: 1, max: 5, chance: 0.8},
			'teeth': {min: 2, max: 2, chance: 1},
			'scales': {min: 2, max: 3, chance: 0.1},
			'steel': {min: 1, max: 3, chance: 0.6}
		}
	},
	{	name: 'tentacles',
		char: 'TTT',
		notification: 'as soon as the door is open a little bit, hundreds of tentacles erupt',
		plural: true,
		damage: 2,
		hit: 0.6,
		attackDelay: 0.5,
		health: 60,
		terrain: null,
		loot: {
			'meat': {min: 10, max: 20, chance: 1}
		}
	}
];

//Populate the content lists with actual objects created from these stats
Content.populateListFromStats (Content.buildingStatArray, Content.Building, Content.buildingList);
Content.populateListFromStats (Content.upgradeStatArray, Content.Upgrade, Content.upgradeList);
Content.populateListFromStats (Content.itemStatArray, Content.Item, Content.itemList);
Content.populateListFromStats (Content.weaponStatArray, Content.Weapon, Content.weaponList);
Content.populateListFromStats (Content.mobStatArray, Content.Mob, Content.mobList);
//delete stat lists as they are no longer used
delete Content.buildingStatArray;
delete Content.upgradeStatArray;
delete Content.itemStatArray;
delete Content.weaponStatArray;
delete Content.mobStatArray;