/**
 * @param argument {string} Missing Argument Name
 */
export function noArgError(argument) {
	throw new Error(`Argument '${argument}' must be a non-null.`);
}