/**
 * Module for Content
 */

var Content = {
	buildingList: {},
	upgradeList: {},
	itemList: {},
	weaponList: {},
	mobList: {},
	
	//checks if object of the given name is already in the list
	//if not, adds object to the list, else alerts name exists
	addContentListEntry: function (newContent, whichList) {
		if(!(newContent.name in whichList)) {
			whichList[newContent.name] = newContent;
		} else {
			alert("The list already has an entry for \"" + newContent.name + "\".");
		}
		
	},
	
	//reads each entry from a stat list
	//then creates the correct object type and copies those stats
	//then makes a call to add the object to the given content list
	// *Does not include any kind of error or type checking
	populateListFromStats: function (statList, objType, contentList) {
		for(var entry in statList){
			var tempObj = Object.create(objType);
			jQuery.extend(tempObj, entry);
			Content.addContentListEntry(tempObj, contentList);
		};
	}
};

/**
 * The following are the objects used for OO / "class"
 * type functionality for use with Javascript
 * prototyping inheritance.
 */

Content.Thing = {
	name: 'new thing',
	button: null,
	type: 'thing',
	availableMsg: null,
	buildMsg: 'made a thing',
	cost: [{wood: 10}],
	getCost: function (index) {
		if(index == undefined) {
			index = 0;
		};
		return this.cost[index];
	}
};

Content.Building = Object.create(Content.Thing);
jQuery.extend(Content.Building, {
	type: 'building',
	availableMsg: 'new building available',
	maximum: 1
});

Content.Upgrade = Object.create(Content.Thing);
jQuery.extend(Content.Upgrade, {
	type: 'upgrade',
	maximum: 1
});

Content.Item = Object.create(Content.Thing);
jQuery.extend(Content.Item, {
	type: 'item',
	drops: {},
});

Content.Equipment = Object.create(Content.Thing);
jQuery.extend(Content.Weapon, {
	type: 'equipment',
	equipType: 'misc',
	
});

Content.Weapon = Object.create(Content.Equipment);
jQuery.extend(Content.Weapon, {
	equipType: 'weapon',
	weaponType: 'melee',
	damage: 1,
	cooldown: 1,
	verb: 'hit',
	useCost: {}
});

Content.Mob = {
	name: 'mob',
	char: 'm',
	notification: 'a mob appears',
	plural: false,
	damage: 1,
	ranged: false,
	hit: 0.5,
	attackDelay: 1,
	health: 10,
	terrain: null,
	loot: {}
};