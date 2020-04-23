class MtgCard {
/*	raw;
	quantity;
	name = '';
	set = '';
	setNumber = 0;
	lookup = {};
*/
	constructor( input = '' ) {
		this.raw = '';

		this.quantity = 0;
		this.name = '';
		this.set = '';
		this.setNumber = '';

		this.lookup = {};

		this.parseImport( input );
	}

	parseImport( input ) {
		if ( ! input ) {
			return;
		}

		if ( typeof input === 'object' && input !== null ) {
			if ( input.raw )       this.raw       = input.raw;
			if ( input.quantity )  this.quantity  = input.quantity;
			if ( input.name )      this.name      = input.name;
			if ( input.set )       this.set       = input.set;
			if ( input.setNumber ) this.setNumber = input.setNumber;
			if ( input.lookup )    this.lookup    = input.lookup;
			return;
		}

		this.raw = input;

		const matches = input.match( /^(?<quantity>\d+) (?<name>.+) \((?<set>[\da-zA-Z]{3})\) (?<setNumber>\d+)$/ );

		if ( matches ) {
			this.quantity  = matches.groups.quantity;
			this.name      = matches.groups.name;
			this.set       = matches.groups.set;
			this.setNumber = matches.groups.setNumber;
		}
	}

	get arena() {
		return this.quantity + ' ' + this.name + ' (' + this.set + ') ' + this.setNumber;
	}
}

export default MtgCard;
