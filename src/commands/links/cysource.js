/*
 *   This file is part of discord-self-bot
 *   Copyright (C) 2017-2018 Favna
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, version 3 of the License
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const commando = require('discord.js-commando');

module.exports = class cydiaSourceCommand extends commando.Command {
	constructor (client) {
		super(client, {
			'name': 'cysource',
			'aliases': ['cysrc', 'source'],
			'group': 'links',
			'memberName': 'cysource',
			'description': 'Gets the link to a cydia source using the Cydia Share URL API',
			'examples': ['cysource {repo_url}', 'cypkg http://apt.thebigboss.org/repofiles/cydia/'],
			'guildOnly': false,

			'args': [
				{
					'key': 'repo',
					'prompt': 'What is the repo URL?',
					'type': 'string',
					'label': 'URL of the repo'
				}
			]
		});
	}

	run (msg, args) {
		return msg.say(`To add this repo directly to cydia click the following URL: https://cydia.saurik.com/api/share#?source=${args.repo}`);
	}

};