module.exports = {
	"env": {
		"es6": true,
		"node": true,
		"browser": true
	},
	"globals": {},
	"extends": [
		"eslint:recommended"
	],
	"parserOptions": {
		"sourceType": "module"
	},
	"rules": {
		"indent": ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		"no-console": ["error", {
			"allow": ["log", "warn", "error", "debug"]
		}],
		"quotes": ["error", "single"],
		"camelcase": "error",
		"semi": ["error", "always"],
	}
};
