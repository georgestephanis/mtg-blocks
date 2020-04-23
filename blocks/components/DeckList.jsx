
const {
	Fragment
} = wp.element;

const {
	__
} = wp.i18n;

import CardLink from './CardLink';
import DeckCard from './DeckCard';

function whatTheType( type_line ) {

	if ( type_line.includes( 'Creature' ) ) {
		return __( 'Creature', 'mtg-blocks' );
	}
	if ( type_line.includes( 'Planeswalker' ) ) {
		return __( 'Planeswalker', 'mtg-blocks' );
	}
	if ( type_line.includes( 'Land' ) ) {
		return __( 'Land', 'mtg-blocks' );
	}
	if ( type_line.includes( 'Instant' ) ) {
		return __( 'Instant', 'mtg-blocks' );
	}
	if ( type_line.includes( 'Sorcery' ) ) {
		return __( 'Sorcery', 'mtg-blocks' );
	}
	if ( type_line.includes( 'Artifact' ) ) {
		return __( 'Artifact', 'mtg-blocks' );
	}
	if ( type_line.includes( 'Enchantment' ) ) {
		return __( 'Enchantment', 'mtg-blocks' );
	}

	return __( 'Unknown', 'mtg-blocks' );
}

function clusterDeckByType( Deck ) {
	const init = {};
	init[ __( 'Creature', 'mtg-blocks' ) ] = [];
	init[ __( 'Planeswalker', 'mtg-blocks' ) ] = [];
	init[ __( 'Instant', 'mtg-blocks' ) ] = [];
	init[ __( 'Sorcery', 'mtg-blocks' ) ] = [];
	init[ __( 'Artifact', 'mtg-blocks' ) ] = [];
	init[ __( 'Enchantment', 'mtg-blocks' ) ] = [];
	init[ __( 'Land', 'mtg-blocks' ) ] = [];
	init[ __( 'Unknown', 'mtg-blocks' ) ] = [];

	const clusteredDeck = Deck.reduce( function ( obj, card ) {
		const type = whatTheType( card.lookup.type_line );
		obj[ type ].push( card );
		return obj;
	}, init );

	return clusteredDeck;
}

function DeckList( { deck } ) {
	let clustered;
	if ( 'done' === deck.fetched ) {
		clustered = clusterDeckByType( deck.Deck );
	}
	return (
		<div className="mtg-deck-list">

			{ deck.Commander && (
				<Fragment>
					<h3>{ __( 'Commander:', 'mtg-blocks' ) }</h3>
					<CardLink card={ deck.Commander } />
				</Fragment>
			) }

			{ deck.Companion && (
				<Fragment>
					<h3>{ __( 'Companion:', 'mtg-blocks' ) }</h3>
					<CardLink card={ deck.Companion } />
				</Fragment>
			) }

			{ deck.Deck.length && (
				<Fragment>
					<h3>{ __( 'Deck:', 'mtg-blocks' ) }</h3>
					{ clustered ? Object.entries( clustered ).map( function( chunk ) {
						if ( ! chunk[1].length ) return;
						return (
							<Fragment key={ chunk[0] }>
								<h4>{ chunk[0] }</h4>
								<ul>
									{ chunk[1].map( card => ( <DeckCard key={ card.raw } card={ card } /> ) ) }
								</ul>
							</Fragment>
						)
					} ) : (
					<ul>
						{ deck.Deck.map( card => ( <DeckCard key={ card.raw } card={ card } /> ) ) }
					</ul>
					) }
				</Fragment>
			) }

			{ deck.Sideboard.length && (
				<Fragment>
					<h3>{ __( 'Sideboard:', 'mtg-blocks' ) }</h3>
					<ul>
						{ deck.Sideboard.map( card => ( <DeckCard key={ card.raw } card={ card } /> ) ) }
					</ul>
				</Fragment>
			) }

		</div>
	)
}


export default DeckList;
