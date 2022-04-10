/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			issuer: { and: [/\.(js|ts)x?$/] },
			test: /\.svg$/,
			use: [{
				loader: '@svgr/webpack',
				options: {
					svgo: false,
				},
			}],
		});

		return config;
	},
};
