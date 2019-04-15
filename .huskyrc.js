// https://www.npmjs.com/package/husky

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
