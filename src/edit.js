/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	BlockControls,
	AlignmentToolbar,
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';

/**
 * External dependencies
 */
import classnames from 'classnames';
import './editor.scss';

function ButtonEdit( props ) {
	const { attributes, setAttributes } = props;
	const { url, text, textAlignment, gbButtonWidth } = attributes;

	const setButtonText = ( newText ) => {
		setAttributes( { text: newText } );
	};

	const buttonAlignment = ( newAlignment ) => {
		setAttributes( { textAlignment: newAlignment } );
	};

	const alignClasses = classnames( `gb-button-align-${ textAlignment }` );

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={ textAlignment }
					onChange={ buttonAlignment }
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __( 'Button Settings', 'gb-button' ) }>
					<ToggleControl
						label={ __( 'Change button width', 'gb-button' ) }
						className="toggleImage"
						help={
							gbButtonWidth
								? __( 'Width 100%', 'gb-button' )
								: __( 'Default width', 'gb-button' )
						}
						onChange={ ( boolean ) => {
							setAttributes( { gbButtonWidth: boolean } );
						} }
						checked={ gbButtonWidth }
					/>
				</PanelBody>
			</InspectorControls>
			<div
				{ ...useBlockProps( {
					className: alignClasses,
				} ) }
			>
				{ ! gbButtonWidth && (
					<>
						<div className="wp-block-gb-block-gb-button__wrapper">
							<div className="wp-block-gb-block-gb-button__btn">
								<RichText
									className="wp-block-gb-block-gb-button__btn-text"
									href={ url }
									aria-label={ __(
										'Button text',
										'gb-button'
									) }
									placeholder={ __(
										'Add text…',
										'gb-button'
									) }
									value={ text }
									onChange={ ( value ) =>
										setButtonText( value )
									}
								/>
							</div>
						</div>
					</>
				) }
				{ gbButtonWidth && (
					<>
						<div className="wp-block-gb-block-gb-button__wrapper">
							<div className="wp-block-gb-block-gb-button__btn full-width">
								<RichText
									className="wp-block-gb-block-gb-button__btn-text"
									href={ url }
									aria-label={ __(
										'Button text',
										'gb-button'
									) }
									placeholder={ __(
										'Add text…',
										'gb-button'
									) }
									value={ text }
									onChange={ ( value ) =>
										setButtonText( value )
									}
								/>
							</div>
						</div>
					</>
				) }
			</div>
		</>
	);
}

export default ButtonEdit;
