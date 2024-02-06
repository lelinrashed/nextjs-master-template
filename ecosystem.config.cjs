module.exports = {
	apps: [
		{
			name: "<app_name>",
			script: "npx",
			args: "next start --keepAliveTimeout 75000",
			instances: 1,
			autorestart: true,
			watch: true,
			exec_mode: "fork",
			appendEnvToName: true,
			max_memory_restart: "1G",
			env: {
				NODE_ENV: "development",
				PORT: 3000,
			},
			env_staging: {
				NODE_ENV: "production",
				PORT: 3030,
			},
			env_production: {
				NODE_ENV: "production",
				PORT: 4040,
			},
		},
	],

	deploy: {
		production: {
			user: "<server_user>",
			host: "<server_port>",
			ref: "origin/main",
			repo: "<repository_url>",
			path: "<path_to_app_in_server>",
			"pre-deploy": "git fetch --all && git checkout .",
			"post-deploy":
				"source ~/.nvm/nvm.sh && npm install && npm run build && pm2 startOrReload ecosystem.config.cjs --env production && pm2 save",
			ssh_options: "ForwardAgent=yes",
		},
		staging: {
			user: "<server_user>",
			host: "<server_port>",
			ref: "origin/staging",
			repo: "<repository_url>",
			path: "<path_to_app_in_server>",
			"pre-deploy": "git fetch --all && git checkout .",
			"post-deploy":
				"source ~/.nvm/nvm.sh && npm install && npm run build && pm2 startOrReload ecosystem.config.cjs --env staging && pm2 save",
		},
	},
};
