
import MtgCard from './MtgCard';

class MtgDeck {
/*	Companion;
	Commander;
	Deck = [];
	Sideboard = [];
	fetched; // whether the data has already been fetched.
*/
	constructor( input = false ) {
		this.Deck = [];
		this.Sideboard = [];

		this.fetched = false;

		if ( input ) {
			this.parseImport( input );
		}
	}

	parseImport( input ) {
		if ( typeof input === 'object' && input !== null ) {
			if ( input.Companion ) {
				this.Companion = new MtgCard( input.Companion );
			}

			if ( input.Commander ) {
				this.Commander = new MtgCard( input.Commander );
			}

			if ( input.Deck ) {
				this.Deck = input.Deck;
				this.Deck.forEach( function( card, index ) {
					this.Deck[ index ] = new MtgCard( card );
				}, this );
			}

			if ( input.Sideboard ) {
				this.Sideboard = input.Sideboard;
				this.Sideboard.forEach( function( card, index ) {
					this.Sideboard[ index ] = new MtgCard( card );
				}, this );
			}

			if ( input.fetched ) {
				this.fetched = input.fetched;
			}

			return this;
		}

		if ( typeof input === 'string' || input instanceof String ) {
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

		this.getScryfallData();
	}

	findCardFromResult( data, matchParams ) {
		let found = data.find( function( card ) {
			return card.collector_number === matchParams.collector_number && card.set.toUpperCase() === matchParams.set.toUpperCase();
		} );

		return found;
	}

	async getScryfallData( setAttributesCallback = null ) {
		this.fetched = 'working';

		// Make one big array of all involved cards.
		const allCards = this.Deck.concat( this.Sideboard, this.Commander, this.Companion ).filter(Boolean);

		// Map the data into strings so we can properly sort out unique lookups.
		let lookupData = allCards.map( card => card.set + '|' + card.setNumber );

		// Filter out duplicates and sort!
		lookupData = [ ...new Set( lookupData ) ].sort();

		lookupData = lookupData.map( card => ({
			set: card.substring( 0, card.indexOf( '|' ) ),
			collector_number: card.substring( 1 + card.indexOf( '|' ) ),
		}))

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

		const foundCards = scryfallData.data;

		// Reuse a var as we fly through?
		let cardData;

		// Loop through\
		if ( this.Commander ) {
			this.Commander.lookup = this.findCardFromResult( foundCards, { set: this.Commander.set, collector_number: this.Commander.setNumber } );
		}

		if ( this.Companion ) {
			this.Companion.lookup = this.findCardFromResult( foundCards, { set: this.Companion.set, collector_number: this.Companion.setNumber } );
		}

		if ( this.Deck.length ) {
			this.Deck = this.Deck.map( function( card ) {
				card.lookup = this.findCardFromResult( foundCards, { set: card.set, collector_number: card.setNumber } );
				return card;
			}, this );
		}

		if ( this.Sideboard.length ) {
			this.Sideboard = this.Sideboard.map( function( card ) {
				card.lookup = this.findCardFromResult( foundCards, { set: card.set, collector_number: card.setNumber } );
				return card;
			}, this );
		}

		if ( setAttributesCallback ) {
			setAttributesCallback( { deck: this } );
		}

		this.fetched = 'done';
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
