import React  from 'react';
import styles from './Button.module.css';

/**
 * Default Button
 * @param style {React.CSSProperties?}
 * @param onClick {function(MouseEvent?)}
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export default function Button({ style, onClick, children }) {
	return (
		<div
			className={styles.Button}
			style={style || {}}
			onClick={onClick}
		>
			{children}
		</div>
	);
}
