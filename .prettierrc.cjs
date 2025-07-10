const prettierConfig = require("@nxlibs/prettier-config");

/**
 * @type {import("prettier").Config}
 */
module.exports = {
	...prettierConfig,
	tabWidth: 4,
	singleQuote: true,
};