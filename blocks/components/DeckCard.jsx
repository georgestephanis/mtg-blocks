
import CardLink from './CardLink';

function DeckCard( { card } ) {
	return (
		<li data-lookup={ JSON.stringify( card.lookup ) }>
			{ card.quantity }x <CardLink card={ card } />
		</li>
	);
}

export default DeckCard;
