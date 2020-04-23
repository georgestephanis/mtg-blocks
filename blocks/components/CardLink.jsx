
function CardLink( { card } ) {
	if ( card.lookup && card.lookup.related_uris ) {
		return ( <a href={ card.lookup.related_uris.gatherer }>{ card.name } <span className="mana-cost">{ card.lookup.mana_cost }</span></a> );
	}
	return ( <a href="#">{ card.name }</a> );
}

export default CardLink;
