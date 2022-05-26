import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function save( { attributes } ) {
	const { url, text, textAlignment, gbButtonWidth } = attributes;

	const alignClasses = classnames( `gb-button-align-${ textAlignment }` );

	return (
		<div
			{ ...useBlockProps.save( {
				className: alignClasses,
			} ) }
		>
			{ ! gbButtonWidth && (
				<>
					<div className="wp-block-gb-block-gb-button__wrapper">
						<div className="wp-block-gb-block-gb-button__btn">
							<RichText.Content
								className="wp-block-gb-block-gb-button__btn-text"
								href={ url }
								value={ text }
							/>
						</div>
					</div>
				</>
			) }
			{ gbButtonWidth && (
				<>
					<div className="wp-block-gb-block-gb-button__wrapper">
						<div className="wp-block-gb-block-gb-button__btn full-width">
							<RichText.Content
								className="wp-block-gb-block-gb-button__btn-text"
								href={ url }
								value={ text }
							/>
						</div>
					</div>
				</>
			) }
		</div>
	);
}
