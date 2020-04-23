const {
	registerBlockType
} = wp.blocks;

const {
	InspectorControls
} = wp.blockEditor;

const {
	Button,
	PanelBody,
	TextareaControl
} = wp.components;

const {
	Fragment
} = wp.element;

const {
	__
} = wp.i18n;

import MtgDeck from './lib/MtgDeck';
import DeckList from './components/DeckList';

import './deck.scss'

registerBlockType( 'magic-blocks/deck', {
	title: __( 'MTG Deck', 'mtg-blocks' ),
	icon: 'admin-page',
	category: 'common',
	supports    : {
		html    : false,
	},

	attributes: {
		raw: {
			type: 'string',
			default: '',
			source: 'text',
			selector: 'pre',
		},
		deck: {
			type: 'object',
			default: null,
		}
	},

	edit: function( props ) {
		const parseRaw = function( event ) {
			props.setAttributes( { deck: new MtgDeck( props.attributes.raw ) } );
		},
		clearDeck = function() {
			props.setAttributes({
				raw : '',
				deck : null,
			});
		};

		return (
			<Fragment>
				{ props.attributes.deck ? (
					<DeckList deck={ props.attributes.deck } />
				) : (
					<Fragment>
						<TextareaControl
							label={ __( 'Arena Format Deck Import', 'mtg-blocks' ) }
							value={ props.attributes.raw }
							onChange={ raw => props.setAttributes( { raw } ) }
						/>
						<Button isSecondary onClick={ e => parseRaw( e ) }>
							{ __( 'Process Import →', 'mtg-blocks' ) }
						</Button>
					</Fragment>
				) }
				<InspectorControls>
					<PanelBody title={ __( 'Deck Settings', 'mtg-blocks' ) }>
						<Button isPrimary={ !! props.attributes.deck } disabled={ ! props.attributes.deck } isLarge={true} onClick={ clearDeck }>
							{ __( 'Reset Deck', 'mtg-blocks' ) }
						</Button>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	},

	save: function( props ) {
		return (
			<div className="mtg-blocks_deck">
				<pre>{ props.attributes.raw }</pre>
				{ props.attributes.deck ? ( <DeckList deck={ props.attributes.deck } /> ) : null }
			</div>
		);
	}
} );
