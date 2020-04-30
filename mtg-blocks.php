<?php

// Plugin name: Magic: The Gathering Blocks

add_action( 'init', 'register_mtg_blocks' );
function register_mtg_blocks() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_style( 'mtg-blocks_deck', plugins_url( 'blocks/deck.css', __FILE__ ) );
	wp_register_script(
		'mtg-blocks_deck',
		plugins_url( 'blocks/deck.js', __FILE__ ),
		array(
			'wp-blocks',
			'wp-block-editor',
			'wp-components',
			'wp-element',
			'wp-i18n',
		)
	);

	register_block_type( 'mtg-blocks/deck', array(
		'render_callback' => 'mtg_blocks_dynamic_render_callback',
		'editor_script' => 'mtg-blocks_deck',
		'style' => 'mtg-blocks_deck',
	) );
}

function mtg_blocks_dynamic_render_callback( $attributes, $content ) {
	return "NO SOUP FOR YOU";
	$content = str_replace( '{G}', '🟢', $content );
	return $content;
}
