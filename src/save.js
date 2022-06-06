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
			<>
				<div className="wp-block-gb-block-gb-button__wrapper">
					<div
						className={ `wp-block-gb-block-gb-button__btn ${
							gbButtonWidth ? 'full-width' : ''
						}` }
					>
						<RichText.Content />
						<a
							href={ url }
							className="wp-block-gb-block-gb-button__btn-text"
						>
							{ text }
						</a>
					</div>
				</div>
			</>
		</div>
	);
}
