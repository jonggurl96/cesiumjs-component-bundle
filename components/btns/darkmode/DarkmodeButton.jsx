'use client';

import { DocumentContext }                                              from "@app/_components/document/DocumentProvider.jsx";
import Button                                                           from "@components/btns/Button.jsx";
import Image                                                            from 'next/image';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';

/**
 * 다크모드 우선순위
 * 1. local storage
 * 2. prefers-color-scheme
 * @returns {JSX.Element}
 * @constructor
 */
export default function DarkmodeButton() {

	const htmlElement = useContext(DocumentContext);

	const [theme, setTheme] = useState("light");

	const toggleTheme = useCallback(() => {
		if(!htmlElement) return;

		const newTheme = theme === "dark" ? "light" : "dark";
		localStorage.setItem("theme", newTheme);
		htmlElement.setAttribute("data-theme", newTheme);
		setTheme(newTheme);
	}, [htmlElement, theme]);

	const iconUrl = useMemo(() => `/styles/images/icon/darkmode/${theme === "dark" ? "light" : "dark"}_icon.svg`, [theme]);

	// mount 후 한 번만 실행
	useEffect(() => {
		if(!htmlElement) return;

		let newTheme;

		if(localStorage.getItem("theme") === "dark")
			newTheme = "dark";
		else if(localStorage.getItem("theme") === "light")
			newTheme = "light";
		else
			newTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

		htmlElement.setAttribute("data-theme", newTheme);

		setTheme(newTheme);
	}, [htmlElement]);

	return (
		<Button style={{ width : 40, height: 40, cursor: 'pointer', padding: 3 }} onClick={toggleTheme}>
			<div style={{ position : "relative", top: 0, left: 0, width: "100%", height: "100%" }}>
				<Image src={iconUrl}  alt={theme === "dark" ? "라이트모드" : "다크모드"} style={{ objectFit: "cover" }} fill />
			</div>
		</Button>
	);
}
