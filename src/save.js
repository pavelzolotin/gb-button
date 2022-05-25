import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function save( { attributes } ) {
	const { text, textAlignment, gbButtonWidth } = attributes;

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
						<button className="wp-block-gb-block-gb-button__btn">
							<RichText.Content
								className="wp-block-gb-block-gb-button__btn-text"
								value={ text }
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
							<RichText.Content
								className="wp-block-gb-block-gb-button__btn-text"
								tagName="a"
								value={ text }
							/>
						</button>
					</div>
				</>
			) }
		</div>
	);
}
