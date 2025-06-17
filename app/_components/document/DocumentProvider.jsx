'use client';

import React, { createContext, useEffect, useRef, useState } from 'react';

export const DocumentContext = createContext(null);

export default function DocumentProvider({ children }) {

	const docRef = useRef(null);

	const [docState, setDocState] = useState(null);

	useEffect(() => {
		if(!docRef.current) return;
		setDocState(docRef.current);
	}, []);

	return (
		<DocumentContext.Provider value={docState}>
			<html lang="ko" ref={docRef}>
			{children}
			</html>
		</DocumentContext.Provider>
	);
}
