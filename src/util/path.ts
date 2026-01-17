// copied from @polymer/polymer/lib/utils/path.js

type PathMember = string | number;
type Path = string | PathMember[];

/**
 * Converts array-based paths to flattened path.  String-based paths
 * are returned as-is.
 *
 * Example:
 *
 * ```
 * normalize(['foo.bar', 0, 'baz'])  // 'foo.bar.0.baz'
 * normalize('foo.bar.0.baz')        // 'foo.bar.0.baz'
 * ```
 * @param {Path} path Input path
 * @return {string} Flattened path
 */
export const normalize = (path: Path): string => {
	if (Array.isArray(path)) {
		const parts = [];
		for (let i = 0; i < path.length; i++) {
			const args = path[i].toString().split('.');
			for (let j = 0; j < args.length; j++) {
				parts.push(args[j]);
			}
		}
		return parts.join('.');
	}

	return path;
};

/**
 * Splits a path into an array of property names. Accepts either arrays
 * of path parts or strings.
 *
 * Example:
 *
 * ```
 * split(['foo.bar', 0, 'baz'])  // ['foo', 'bar', '0', 'baz']
 * split('foo.bar.0.baz')        // ['foo', 'bar', '0', 'baz']
 * ```
 * @param {Path} path Input path
 * @return {string[]} Array of path parts
 */
export const split = (path: Path): string[] => {
	if (Array.isArray(path)) {
		return normalize(path).split('.');
	}
	return path.toString().split('.');
};

/**
 * Reads a value from a path.  If any sub-property in the path is `undefined`,
 * this method returns `undefined` (will never throw.
 *
 * @param {Object} root Object from which to dereference path from
 * @param {Path} path Path to read
 * @return {*} Value at path, or `undefined` if the path could not be
 *  fully dereferenced.
 */
export const get = (root: unknown, path: Path) => {
	let prop = root;
	const parts = split(path);
	// Loop over path parts[0..n-1] and dereference
	for (let i = 0; i < parts.length; i++) {
		if (!prop) {
			return;
		}
		const part = parts[i];
		prop = (prop as any)[part];
	}
	return prop;
};
