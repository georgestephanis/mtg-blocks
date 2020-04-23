
import CardLink from './CardLink';

function DeckCard( { card } ) {
	return (
		<li>
			{ card.quantity }x <CardLink card={ card } />
		</li>
	);
}

export default DeckCard;
