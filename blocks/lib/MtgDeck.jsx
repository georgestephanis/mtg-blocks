
import MtgCard from './MtgCard';

class MtgDeck {
/*	Companion;
	Commander;
	Deck = [];
	Sideboard = [];
*/
	constructor( input = false ) {
		this.Deck = [];
		this.Sideboard = [];

		if ( input ) {
			this.parseImport( input );
		}
	}

	parseImport( input ) {
		if ( ! Array.isArray( input ) ) {
			input = input.split('\n');
		}

		let type = 'Deck';

		input.forEach( function( line ) {
			if ( line ) {
				// If it starts with a digit, it's a card.  Else, it's a type.
				if ( line.match( /^\d/ ) ) {
					// Decks and Sideboards can be multiple cards, so add it to the array.
					if ( 'Deck' === type || 'Sideboard' === type ) {
						this[ type ].push( new MtgCard( line ) );
					} else {
						this[ type ] = new MtgCard( line );
					}
				} else {
					type = line;
				}
			}
		}, this );
	}

	async getScryfallData() {
		// Make one big array of all involved cards.
		const allCards = this.Deck.concat( this.Sideboard, this.Commander, this.Companion );

		// Map the data into strings so we can properly sort out unique lookups.
		let lookupData = allCards.map( card => card.set + '|' + card.setNumber );

		// Filter out duplicates and sort!
		lookupData = [ ...new Set( lookupData ) ].sort();

		lookupData = lookupData.map( card => ({
			set: card.substring( 0, card.indexOf( '|' ) ),
			collector_number: card.substring( 1 + card.indexOf( '|' ) ),
		}))

		// console.log( lookupData );

		// Remember, Scryfall maxes out at 75 cards searched for!
		const rawResponse = await fetch('https://api.scryfall.com/cards/collection', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( { identifiers: lookupData } ),
		});
		const scryfallData = await rawResponse.json();

		console.log( scryfallData );

		const foundCards = scryfallData.data;

		console.log( foundCards );

		// Reuse a var as we fly through?
		let cardData;

		// Loop through
		if ( this.Companion ) {
			cardData = foundCards.find( card => { card.collector_number === this.Companion.setNumber && card.set.toUpperCase() === this.Companion.set.toUpperCase() } );
			if ( cardData ) {
				this.Companion.lookup = cardData;
			}
		}

		if ( this.Commander ) {
			cardData = foundCards.find( card => { card.collector_number === this.Commander.setNumber && card.set.toUpperCase() === this.Commander.set.toUpperCase() } );
			if ( cardData ) {
				this.Commander.lookup = cardData;
			}
		}

		// Show something to verify.
		console.log( this );
	}

	get arena() {
		let deckExport = '';

		if ( this.Commander ) {
			deckExport += 'Commander\n' + this.Commander.arena + '\n\n';
		}

		if ( this.Companion ) {
			deckExport += 'Companion\n' + this.Companion.arena + '\n\n';
		}

		if ( this.Sideboard.length ) {
			deckExport += 'Deck\n';
			this.Deck.forEach( function( card ) {
				deckExport += card.arena + '\n';
			} )
			deckExport += '\n';
		}

		if ( this.Sideboard.length ) {
			deckExport += 'Sideboard\n';
			this.Sideboard.forEach( function( card ) {
				deckExport += card.arena + '\n';
			} )
			deckExport += '\n';
		}

		return deckExport;
	}
}

export default MtgDeck;
