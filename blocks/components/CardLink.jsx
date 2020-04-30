
function CardLink( { card } ) {
	if ( card.lookup && card.lookup.related_uris ) {
		let manaCost = card.lookup.mana_cost;
		//	.replace( /\{1\}/gi, '①' )
		//	.replace( /\{2\}/gi, '②' )
		//	.replace( /\{3\}/gi, '③' )
		//	.replace( /\{4\}/gi, '④' )
		//	.replace( /\{5\}/gi, '⑤' )
		//	.replace( /\{6\}/gi, '⑥' )
		//	.replace( /\{7\}/gi, '⑦' )
		//	.replace( /\{8\}/gi, '⑧' )
		//	.replace( /\{9\}/gi, '⑨' )
		//	.replace( /\{10\}/gi, '⑩' )
		//	.replace( /\{11\}/gi, '⑪' )
		//	.replace( /\{12\}/gi, '⑫' )
		//	.replace( /\{13\}/gi, '⑬' )
		//	.replace( /\{14\}/gi, '⑭' )
		//	.replace( /\{15\}/gi, '⑮' )
		//	.replace( /\{16\}/gi, '⑯' )
		//	.replace( /\{17\}/gi, '⑰' )
		//	.replace( /\{18\}/gi, '⑱' )
		//	.replace( /\{19\}/gi, '⑲' )
		//	.replace( /\{20\}/gi, '⑳' )
		//	.replace( /\{X\}/gi, 'Ⓧ' )
		//	.replace( /\{Y\}/gi, 'Ⓨ' )
		//	.replace( /\{Z\}/gi, 'Ⓩ' )
		//	.replace( /\{W\}/gi, '⚪' )
		//	.replace( /\{U\}/gi, '🔵' )
		//	.replace( /\{B\}/gi, '⚫' )
		//	.replace( /\{R\}/gi, '🔴' )
		//	.replace( /\{G\}/gi, '🟢' )
		//	.replace( /\{C\}/gi, '🟠' )
		//	.replace( /\{W/U\}/gi, '' ) // azorius
		//	.replace( /\{W/B\}/gi, '' ) // orzhov
		//	.replace( /\{B/R\}/gi, '' ) // rakdos
		//	.replace( /\{B/G\}/gi, '' ) // golgari
		//	.replace( /\{U/B\}/gi, '' ) // dimir
		//	.replace( /\{U/R\}/gi, '' ) // izzet
		//	.replace( /\{R/G\}/gi, '' ) // gruul
		//	.replace( /\{R/W\}/gi, '' ) // boros
		//	.replace( /\{G/W\}/gi, '' ) // selesnya
		//	.replace( /\{G/U\}/gi, '' ) // simic
		//	.replace( /\{S\}/gi, '❄️' );
		return ( <a href={ card.lookup.related_uris.gatherer }>{ card.name } <span className="mana-cost">{ manaCost }</span></a> );
	}
	return ( <a href="#">{ card.name }</a> );
}

export default CardLink;
