module.exports = {
	branches: [
		{
			name: 'main',
			channel: 'latest',
		},
		{
			name: 'stable',
			channel: 'stable',
		},
	],
	dryRun: true,
	ci: false,
	prepare: '@semantic-release/npm',
	publish: '@semantic-release/npm',
};

