// https://www.npmjs.com/package/lint-staged

module.exports = {
	"ignore": ["dist/**/*.*"],
	"linters": {
		"*": [
			"npm run lint:editorconfig:fix",
			"git add"
		],
		"*.{sass,scss}": [
			"npm run lint:sass:fix",
			"git add"
		]
	}
};
