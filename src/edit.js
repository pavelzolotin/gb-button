import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	BlockControls,
	AlignmentToolbar,
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl, withNotices } from '@wordpress/components';
import classnames from 'classnames';
import './editor.scss';

function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { text, textAlignment, gbButtonWidth } = attributes;

	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { textAlignment: newAlignment } );
	};

	const alignClasses = classnames( `gb-button-align-${ textAlignment }` );

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={ textAlignment }
					onChange={ onChangeAlignment }
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
							<button className="wp-block-gb-block-gb-button__btn">
								<RichText
									className="wp-block-gb-block-gb-button__btn-text"
									onChange={ onChangeText }
									value={ text }
									placeholder={ __(
										'Button Text',
										'gb-button'
									) }
									tagName="a"
								/>
							</button>
						</div>
					</>
				) }
				{ gbButtonWidth && (
					<>
						<div className="wp-block-gb-block-gb-button__wrapper">
							<button className="wp-block-gb-block-gb-button__btn full-width">
								<RichText
									className="wp-block-gb-block-gb-button__btn-text"
									onChange={ onChangeText }
									value={ text }
									placeholder={ __(
										'Button Text',
										'gb-button'
									) }
									tagName="a"
								/>
							</button>
						</div>
					</>
				) }
			</div>
		</>
	);
}

export default withNotices( Edit );
