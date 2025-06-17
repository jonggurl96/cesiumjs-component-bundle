import localFont from "next/font/local";

export const KRDS_FONT = {
	/** 가변 폰트 */
	VARIABLE   : localFont({ src: 'PretendardGOVVariable/PretendardGOVVariable.ttf' }),
	/** font-weight: 900 */
	BLACK      : localFont({ src: 'PretendardGOV/PretendardGOV-Black.ttf' }),
	/** font-weight: 800 */
	EXTRA_BOLD : localFont({ src: 'PretendardGOV/PretendardGOV-ExtraBold.ttf' }),
	/** font-weight: 700 */
	BOLD       : localFont({ src: 'PretendardGOV/PretendardGOV-Bold.ttf' }),
	/** font-weight: 600 */
	SEMI_BOLD  : localFont({ src: 'PretendardGOV/PretendardGOV-SemiBold.ttf' }),
	/** font-weight: 500 */
	MEDIUM     : localFont({ src: 'PretendardGOV/PretendardGOV-Medium.ttf' }),
	/** font-weight: 400 */
	REGULAR    : localFont({ src: 'PretendardGOV/PretendardGOV-Regular.ttf' }),
	/** font-weight: 300 */
	LIGHT      : localFont({ src: 'PretendardGOV/PretendardGOV-Light.ttf' }),
	/** font-weight: 200 */
	EXTRA_LIGHT: localFont({ src: 'PretendardGOV/PretendardGOV-ExtraLight.ttf' }),
	/** font-weight: 100 */
	THIN       : localFont({ src: 'PretendardGOV/PretendardGOV-Thin.ttf' }),
};
