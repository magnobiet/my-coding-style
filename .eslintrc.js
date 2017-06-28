module.exports = {
	"env": {
		"es6": true,
		"node": true,
		"browser": true,
		"jquery": true
	},
	"globals": {
		"_": true,
		"angular": true,
		"Vue": true
	},
	"extends": [
		"eslint:recommended",
		// "angular"
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
