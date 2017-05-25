module.exports = {
	"env": {
		"es6": true,
		"node": true,
		"browser": true,
		"jquery": true
	},
	"globals": {
		"angular": true
	},
	"extends": [
		"eslint:recommended",
		// "angular"
	],
	"parserOptions": {
		"sourceType": "module"
	},
	"rules": {
		"no-console": [
			"error", {
				allow: ["log", "warn", "error", "debug"]
			}
		]
	}
};
