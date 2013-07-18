/**
 * Module for Content
 */

var Content = {
	buildingList: {},
	upgradeList: {},
	allItemsList: {},
	itemList: {},
	weaponList: {},
	mobList: {},
	
	//checks if object of the given name is already in the list
	//if not, adds object to the list, else alerts name exists
	addContentListEntry: function (newContent, whichList, noUpdate) {
		if(!(newContent.name in whichList)) {
			whichList[newContent.name] = newContent;
			//check if the item should be added to allItemsList
			//if this is skipped you MUST call Content.refreshAllItemsList() afterwards to keep the list correct
			if(!noUpdate){
				allItemsList[newContent.name] = newContent;
			}
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
			$.extend(tempObj, statList[entry]);
			Content.addContentListEntry(tempObj, contentList, true);
		};
	},
	
	refreshAllItemsList: function () {
		//clear the list
		Content.allItemsList = {};
		//then add everything back in fresh
		$.extend(Content.allItemsList, Content.itemList, Content.weaponList);
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
	createMsg: null,	
};

Content.Building = Object.create(Content.Thing);
$.extend(Content.Building, {
	type: 'building',
	availableMsg: null,
	maxMsg: null,
	maximum: 1,
	req: null,
	getReq: function (index) {
		if(!index) { index = 0 };
		return this.req[index];
	}
});

Content.Upgrade = Object.create(Content.Building);
$.extend(Content.Upgrade, {
	type: 'upgrade',
});

Content.Item = Object.create(Content.Thing);
$.extend(Content.Item, {
	type: 'item',
	consumable: false,
	material: false,
	weight: 1,
	drops: {},
	trade: [{wood: 10}],
	getTrade: function (index) {
		if(!index) { index = 0 };
		return this.cost[index];
	}
});

Content.Equipment = Object.create(Content.Item);
$.extend(Content.Equipment, {
	type: 'equipment',
	equipType: 'misc',
	
});

Content.Weapon = Object.create(Content.Equipment);
$.extend(Content.Weapon, {
	equipType: 'weapon',
	weaponType: 'melee',
	damage: 1,
	cooldown: 1,
	verb: 'hit',
	uses: {}
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