#!/usr/bin/env node

// by @georgestephanis, license: GPLv3

// usage: `pbpaste | ./arena-format-validator.js` or `cat export.txt | node arena-format-validator.js`

function validateDeck( deck ) {
	// Swap this to true if you want information about successful bits too.
	const printInfo = false;
	const deckArray = deck.split('\n');
	const found = {};

	let type, matches;
	deckArray.forEach( function( line ) {
		if ( line ) {
			if ( line.match( /^\d/ ) ) {
				matches = line.match( /^(?<quantity>\d+) (?<name>.+) \((?<set>[\da-zA-Z]{3})\) (?<setNumber>\d+)$/ );

				if ( ! type ) {
					if ( matches ) {
						console.error( "\x1b[31m" + 'Error! Found a valid card without a type delimiter -- ' +
									matches.groups.quantity + ' ' + matches.groups.name +
									' (' + matches.groups.set + ') ' + matches.groups.setNumber + "\x1b[0m" );
					} else {
						console.error( "\x1b[31m" + 'Error! Found a malformed card without a type delimiter -- ' + line + "\x1b[0m" );
					}
				} else {
					if ( matches ) {
						printInfo && console.info( 'Found a ' + type + ' card -- ' +
									matches.groups.quantity + ' ' + matches.groups.name +
									' (' + matches.groups.set + ') ' + matches.groups.setNumber );
						found[ type ].push( matches.groups );
					} else {
						console.error( "\x1b[31m" + 'Error! This ' + type + ' card is malformed -- ' + line + "\x1b[0m" );
					}
				}
			} else {
				printInfo && console.info( 'Found a section delimiter -- ' + line );
				type = line;
				if ( Array.isArray( found[ type ] ) ) {
					console.error( "\x1b[31m" + 'Error! Section delimiter ' + type + ' found multiple times!' + "\x1b[0m" );
				} else {
					found[ type ] = [];
				}

				if ( ! [ 'Commander', 'Companion', 'Deck', 'Sideboard' ].includes( type ) ) {
					console.error( "\x1b[31m" + 'Error! Section delimiter ' + type + ' is unfamiliar!' + "\x1b[0m" );
				}
			}
		} else {
			printInfo && console.info( 'Found a blank line.' + ( type ? ' Ending ' + type + ' section.' : '' ) );
			type = null;
		}

	} );

	if ( ! found.Deck ) {
		console.error( "\x1b[31m" + 'Error! No "Deck" section was found!' + "\x1b[0m" );
	}

	if ( found ) {
		console.log( "\n" );
		console.log( 'Full parsed result:' );
		console.log( "\n" );

		for ( type in found ) {
			console.log( type );
			console.table( found[ type ] );
		}
	} else {
		console.error( "\x1b[31m" + 'Error! No parseable data was found!' + "\x1b[0m" );
	}

	return found;
}

let deck = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on( 'data', chunk => deck += chunk );

process.stdin.on( 'end', () => {
  validateDeck( deck );
});


