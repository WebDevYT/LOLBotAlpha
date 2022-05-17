'use strict';

// Ready Event
// Bot will start receiving info from Discord ONLY after this

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        client.user.setActivity('1v1.LOL', { type: 'PLAYING' });
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};