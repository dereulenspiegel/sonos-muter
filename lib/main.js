"use strict";
var sonos = require('sonos');
var InfiniteLoop = require('infinite-loop');

console.log('Searching for Sonos devices in the network');

function silenceSonosDevice(device) {
	device.stop(function(stopped,err){
		if(err){
			console.log('An error occured while stopping the device: %j', err);
		}
	});
};

sonos.search(function(device,model){
	if (model === 'BR100' || model === 'ANVIL'){
		return;
	}
	
	console.log('Discovered Sonos device');
	var iLoop = new InfiniteLoop();
	iLoop.setInterval(5000);
	iLoop.add(silenceSonosDevice,device);
	iLoop.run();
});

