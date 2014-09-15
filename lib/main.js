"use strict";
var sonos = require('sonos');

sonos.search(function(device,model){
	if (model === 'BR100' || model === 'ANVIL') return;
	
	console.log('Discovered Sonos device ');
	device.stop(function(stopped,err){
		console.log('Device stopped');
	});
});

