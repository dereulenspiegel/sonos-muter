Sonos-Mute
==========

This is just a small utility for people annoyed by Sonos users in the same network. If you have Sonos devices in your network you want to mute, but someone else is starting music again and again, just use this small tool. It will stop playback on all discovered devices every 5 seconds.

Installation
------------
Sonos-Mute requires [node.js](http://nodejs.org) v0.10.x installed to run.

Install latest via source
```
$ git clone https://github.com/dereulenspiegel/sonos-mute.git
$ cd sonos-mute
$ npm install -g
```

Usage
-----
After installation simply open up a console (or use the console from the installation) and type sonos-mute and let the console stay open. sonos-mute will discover current and newly added devices and stop playback on them.