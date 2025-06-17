import localFont from "next/font/local";

/** 가변 폰트 */
const KRDS_FONT_VARIABLE = localFont({ src: 'PretendardGOVVariable/PretendardGOVVariable.ttf' });

/** font-weight: 900 */
const KRDS_FONT_BLACK = localFont({ src: 'PretendardGOV/pretendardGOV-Black.ttf' });

/** font-weight: 800 */
const KRDS_FONT_EXTRA_BOLD = localFont({ src: 'PretendardGOV/pretendardGOV-ExtraBold.ttf' });

/** font-weight: 700 */
const KRDS_FONT_BOLD = localFont({ src: 'PretendardGOV/pretendardGOV-Bold.ttf' });

/** font-weight: 600 */
const KRDS_FONT_SEMI_BOLD = localFont({ src: 'PretendardGOV/pretendardGOV-SemiBold.ttf' });

/** font-weight: 500 */
const KRDS_FONT_MEDIUM = localFont({ src: 'PretendardGOV/pretendardGOV-Medium.ttf' });

/** font-weight: 400 */
const KRDS_FONT_REGULAR = localFont({ src: 'PretendardGOV/pretendardGOV-Regular.ttf' });

/** font-weight: 300 */
const KRDS_FONT_LIGHT = localFont({ src: 'PretendardGOV/pretendardGOV-Light.ttf' });

/** font-weight: 200 */
const KRDS_FONT_EXTRA_LIGHT = localFont({ src: 'PretendardGOV/pretendardGOV-ExtraLight.ttf' });

/** font-weight: 100 */
const KRDS_FONT_THIN = localFont({ src: 'PretendardGOV/pretendardGOV-Thin.ttf' });

export const KRDS_FONT = {
	VARIABLE   : KRDS_FONT_VARIABLE,
	BLACK      : KRDS_FONT_BLACK,
	EXTRA_BOLD : KRDS_FONT_EXTRA_BOLD,
	BOLD       : KRDS_FONT_BOLD,
	SEMI_BOLD  : KRDS_FONT_SEMI_BOLD,
	MEDIUM     : KRDS_FONT_MEDIUM,
	REGULAR    : KRDS_FONT_REGULAR,
	LIGHT      : KRDS_FONT_LIGHT,
	EXTRA_LIGHT: KRDS_FONT_EXTRA_LIGHT,
	THIN       : KRDS_FONT_THIN,
};
