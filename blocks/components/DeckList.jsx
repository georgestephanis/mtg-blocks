
const {
	Fragment
} = wp.element;

const {
	__
} = wp.i18n;

import CardLink from './CardLink';
import DeckCard from './DeckCard';

function DeckList( { deck } ) {
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
					<ul>
						{ deck.Deck.map( card => ( <DeckCard key={ card.raw } card={ card } /> ) ) }
					</ul>
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
