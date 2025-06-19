import React from 'react';
import styles from './MaskFullScreen.module.css';

export default function MaskFullScreen({ children }) {
	return (
		<div className={`${styles.maskFullScreen} transparent-mask`}>{children}</div>
	);
}
