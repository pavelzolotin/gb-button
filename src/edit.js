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
	URLInput,
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';

/**
 * External dependencies
 */
import classnames from 'classnames';
import './editor.scss';

function ButtonEdit( props ) {
	const { attributes, setAttributes } = props;
	const { url, text, title, textAlignment, gbButtonWidth } = attributes;

	const setButtonText = ( newText ) => {
		setAttributes( { text: newText } );
	};

	const onChangeButtonAlignment = ( newAlignment ) => {
		setAttributes( { textAlignment: newAlignment } );
	};

	const onChangeURL = ( newURL ) => {
		setAttributes( { url: newURL } );
	};

	const alignClasses = classnames( `gb-button-align-${ textAlignment }` );

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={ textAlignment }
					onChange={ onChangeButtonAlignment }
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
					<URLInput
						className="wp-block-gb-block-gb-button__input"
						value={ url }
						onChange={ onChangeURL }
					/>
				</PanelBody>
			</InspectorControls>
			<div
				{ ...useBlockProps( {
					className: alignClasses,
				} ) }
			>
				<>
					<div className="wp-block-gb-block-gb-button__wrapper">
						<div
							className={ `wp-block-gb-block-gb-button__btn ${
								gbButtonWidth ? 'full-width' : ''
							}` }
						>
							<RichText
								className="wp-block-gb-block-gb-button__btn-text"
								href={ url }
								aria-label={ __( 'Button text', 'gb-button' ) }
								placeholder={ __( 'Add text…', 'gb-button' ) }
								title={ title }
								value={ text }
								onChange={ ( value ) => setButtonText( value ) }
								identifier="text"
								allowedFormats={ [
									'core/bold',
									'core/italic',
								] }
							/>
						</div>
					</div>
				</>
			</div>
		</>
	);
}

export default ButtonEdit;
