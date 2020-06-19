/* eslint-env es6, node */

module.exports = {
	'*': () => 'npm run lint:editorconfig:fix',
	'*.{js,ts}': () => 'npm run lint:fix',
	'*.{sass,scss}': () => 'npm run lint:sass:fix'
};
