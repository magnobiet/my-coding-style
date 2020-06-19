/* eslint-env es6, node */

function tasks(commands) {
	return commands.join(' && ');
}

module.exports = {
	'hooks': {
		'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
		'pre-commit': tasks([
			'lint-staged',
			'npm run lint:editorconfig',
			'npm run lint',
			'npm run lint:sass'
		])
	}
};
