module.exports = {
	apps: [
		{
			name: "track-attend-record",
			script: "./project_1/src-jobs/track-attend-record.js",
			watch: false,
			env: {
				"PORT": 29110,
				"NODE_ENV": "development"
			},
			env_production: {
				"PORT": 29110,
				"NODE_ENV": "production",
			}
		},
		{
			name: "validate-del-flag",
			script: "./project_1/src-jobs/validate-del-flag.js",
			watch: false,
			env: {
				"PORT": 29120,
				"NODE_ENV": "development"
			},
			env_production: {
				"PORT": 29120,
				"NODE_ENV": "production",
			}
		}
	]
}