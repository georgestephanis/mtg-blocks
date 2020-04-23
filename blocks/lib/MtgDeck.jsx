
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
