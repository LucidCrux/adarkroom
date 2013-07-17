/**
 * Events that can occur when wandering around the world
 **/
Events.Encounters = [
	/* Tier 1 */
	{ /* Snarling Beast */
		title: 'A Snarling Beast',
 		isAvailable: function() {
 			return World.getDistance() <= 10 && World.getTerrain() == World.TILE.FOREST;
 		},
 		scenes: {
 			'start': {
 				combat: true,
 				enemy: 'snarling beast'
 			}
 		}
	},
	{ /* Gaunt Man */
     	title: 'A Gaunt Man',
  		isAvailable: function() {
  			return World.getDistance() <= 10 && World.getTerrain() == World.TILE.BARRENS;
  		},
  		scenes: {
  			'start': {
  				combat: true,
  				enemy: 'gaunt man'
  			}
		}
  	},
	{ /* Strange Bird */
     	title: 'A Strange Bird',
  		isAvailable: function() {
  			return World.getDistance() <= 10 && World.getTerrain() == World.TILE.FIELD;
  		},
  		scenes: {
  			'start': {
  				combat: true,
  				enemy: 'strange bird'
  			}
		}
  	},
	/* Tier 2*/
	{ /* Shivering Man */
     	title: 'A Shivering Man',
  		isAvailable: function() {
  			return World.getDistance() > 10 && World.getDistance() <= 20 && World.getTerrain() == World.TILE.BARRENS;
  		},
  		scenes: {
  			'start': {
  				combat: true,
  				enemy: 'shivering man'
  			}
		}
  },
	{ /* Man-eater */
		title: 'A Man-Eater',
 		isAvailable: function() {
 			return World.getDistance() > 10 && World.getDistance() <= 20 && World.getTerrain() == World.TILE.FOREST;
 		},
 		scenes: {
 			'start': {
 				combat: true,
 				enemy: 'man-eater'
 			}
 		}
	},
	{ /* Scavenger */
     	title: 'A Scavenger',
  		isAvailable: function() {
  			return World.getDistance() > 10 && World.getDistance() <= 20 && World.getTerrain() == World.TILE.BARRENS;
  		},
  		scenes: {
  			'start': {
  				combat: true,
  				enemy: 'scavenger'
  			}
		}
  	},
	{ /* Huge Lizard */
     	title: 'A Huge Lizard',
  		isAvailable: function() {
  			return World.getDistance() > 10 && World.getDistance() <= 20 && World.getTerrain() == World.TILE.FIELD;
  		},
  		scenes: {
  			'start': {
  				combat: true,
  				enemy: 'lizard'
  			}
		}
  	},
	/* Tier 3*/
	{ /* Feral Terror */
		title: 'A Feral Terror',
 		isAvailable: function() {
 			return World.getDistance() > 20 && World.getTerrain() == World.TILE.FOREST;
 		},
 		scenes: {
 			'start': {
 				combat: true,
 				enemy: 'feral terror'
 			}
 		}
	},
	{ /* Soldier */
     	title: 'A Soldier',
  		isAvailable: function() {
  			return World.getDistance() > 20 && World.getTerrain() == World.TILE.BARRENS;
  		},
  		scenes: {
  			'start': {
  				combat: true,
  				enemy: 'soldier'
  			}
		}
  	},
	{ /* Sniper */
     	title: 'A Sniper',
  		isAvailable: function() {
  			return World.getDistance() > 20 && World.getTerrain() == World.TILE.FIELD;
  		},
  		scenes: {
  			'start': {
  				combat: true,
  				enemy: 'sniper'
  			}
		}
  	},
];